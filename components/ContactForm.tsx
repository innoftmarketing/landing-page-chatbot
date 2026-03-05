"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

const GOOGLE_SCRIPT_URL = "REPLACE_WITH_YOUR_APPS_SCRIPT_URL";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      timestamp: new Date().toLocaleString("fr-MA"),
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Still redirect even if fetch fails — lead is not lost since
      // we go to thank-you page and can follow up manually
    }

    router.push("/thank-you");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 border border-gray-200 space-y-4"
    >
      <h3 className="font-[family-name:var(--font-sora)] text-lg font-700 text-innoft-dark mb-1">
        Parlez a un expert
      </h3>
      <p className="text-sm text-innoft-text-secondary mb-4">
        Remplissez le formulaire, un expert vous recontacte sous 24h.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="fullName"
          type="text"
          required
          placeholder="Nom complet *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="phone"
          type="tel"
          placeholder="Telephone"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
        <input
          name="company"
          type="text"
          placeholder="Entreprise"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
      </div>

      <input
        name="website"
        type="text"
        placeholder="Site web (optionnel)"
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-innoft-blue px-6 py-3.5 text-sm font-600 text-white transition-all hover:bg-innoft-blue/90 hover:shadow-lg hover:shadow-innoft-blue/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
