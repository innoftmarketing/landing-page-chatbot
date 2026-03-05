"use client";

import { type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          type="text"
          required
          placeholder="Nom complet *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
        <input
          type="email"
          required
          placeholder="Email *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="tel"
          placeholder="Telephone"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
        <input
          type="text"
          placeholder="Entreprise"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
        />
      </div>

      <input
        type="url"
        placeholder="Site web (optionnel)"
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-innoft-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-innoft-blue/20 focus:border-innoft-blue transition-all"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-innoft-blue px-6 py-3.5 text-sm font-600 text-white transition-all hover:bg-innoft-blue/90 hover:shadow-lg hover:shadow-innoft-blue/25 flex items-center justify-center gap-2"
      >
        Envoyer
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
