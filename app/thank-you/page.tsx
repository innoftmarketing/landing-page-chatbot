import type { Metadata } from "next";
import Script from "next/script";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Merci — Innoft",
  description: "Votre demande a bien ete envoyee. Un expert vous contactera sous 24h.",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Fire Lead conversion event */}
      <Script id="fb-lead-event" strategy="afterInteractive">
        {`
          if(typeof fbq === 'function') {
            fbq('track', 'Lead');
          }
        `}
      </Script>

      <main className="min-h-screen bg-innoft-light flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-innoft-cyan/15 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle2 size={40} className="text-innoft-cyan" />
          </div>

          <h1 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-800 text-innoft-dark mb-4">
            Merci !
          </h1>

          <p className="text-lg text-innoft-text-secondary mb-3 leading-relaxed">
            Votre demande a bien ete envoyee.
          </p>

          <p className="text-base text-innoft-text-secondary mb-10 leading-relaxed">
            Un expert Innoft vous contactera sous <span className="font-600 text-innoft-dark">24 heures</span> pour discuter de vos besoins et preparer votre chatbot IA.
          </p>

          {/* What happens next */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10 text-left">
            <h2 className="font-[family-name:var(--font-sora)] text-sm font-700 text-innoft-dark mb-4 uppercase tracking-wider">
              Prochaines etapes
            </h2>
            <div className="space-y-3">
              {[
                "Un expert vous appelle pour comprendre vos besoins",
                "On configure votre chatbot avec vos donnees",
                "On l'integre directement sur votre site web",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-innoft-blue text-white flex items-center justify-center shrink-0 text-xs font-700">
                    {i + 1}
                  </div>
                  <span className="text-sm text-innoft-dark/80">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-600 text-innoft-dark transition-all hover:border-innoft-blue/30 hover:bg-innoft-blue/5"
          >
            <ArrowLeft size={16} />
            Retour a l&apos;accueil
          </a>
        </div>
      </main>
    </>
  );
}
