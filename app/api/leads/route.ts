import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email, phone, company, website, timestamp } = body;

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const errors: string[] = [];

  // 1. Send to Google Apps Script (preserving existing behavior)
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (googleScriptUrl) {
    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timestamp, fullName, email, phone, company, website }),
      });
    } catch (err) {
      console.error("Google Script error:", err);
      errors.push("Google Sheets submission failed");
    }
  }

  // 2. Send to Perfex CRM
  const perfexUrl = process.env.PERFEX_CRM_URL;
  const perfexToken = process.env.PERFEX_CRM_API_TOKEN;

  if (perfexUrl && perfexToken) {
    try {
      const perfexBody = new URLSearchParams();
      perfexBody.append("name", fullName);
      perfexBody.append("email", email);
      if (phone) perfexBody.append("phonenumber", phone);
      if (company) perfexBody.append("company", company);
      if (website) perfexBody.append("website", website);
      perfexBody.append("status", process.env.PERFEX_CRM_DEFAULT_STATUS || "1");
      perfexBody.append("source", process.env.PERFEX_CRM_DEFAULT_SOURCE || "1");
      perfexBody.append("assigned", process.env.PERFEX_CRM_DEFAULT_ASSIGNED || "1");
      perfexBody.append("description", "Lead from innoft.ma website");

      const perfexResponse = await fetch(`${perfexUrl}/api/leads`, {
        method: "POST",
        headers: {
          authtoken: perfexToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: perfexBody.toString(),
      });

      if (!perfexResponse.ok) {
        const text = await perfexResponse.text();
        console.error("Perfex CRM error:", perfexResponse.status, text);
        errors.push("Perfex CRM submission failed");
      }
    } catch (err) {
      console.error("Perfex CRM error:", err);
      errors.push("Perfex CRM submission failed");
    }
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { success: true, warnings: errors },
      { status: 207 }
    );
  }

  return NextResponse.json({ success: true });
}
