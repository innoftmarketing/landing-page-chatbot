"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Comment le chatbot apprend-il mes produits et services ?",
    a: "Vous uploadez simplement vos documents (site web, PDF, FAQ existante) et notre IA analyse tout automatiquement. En quelques minutes, le chatbot connait votre catalogue, vos prix et vos conditions. Pas besoin de programmation.",
  },
  {
    q: "Le chatbot comprend-il le Darija marocain ?",
    a: "Oui ! Notre IA est entrainee pour comprendre et repondre en Darija, Francais et Anglais. Elle s'adapte automatiquement a la langue du visiteur pour une experience naturelle.",
  },
  {
    q: "Combien de temps faut-il pour installer le chatbot ?",
    a: "L'installation prend moins de 5 minutes. Vous copiez un simple script sur votre site web et le chatbot apparait immediatement. Notre equipe vous accompagne si besoin.",
  },
  {
    q: "Le chatbot peut-il s'integrer a mes outils existants ?",
    a: "Absolument. Innoft s'integre avec WhatsApp, Instagram, votre CRM, et la plupart des plateformes e-commerce. Nous ajoutons regulierement de nouvelles integrations.",
  },
  {
    q: "Que se passe-t-il si le chatbot ne connait pas la reponse ?",
    a: "Le chatbot transfere automatiquement la conversation a un agent humain et vous envoie une notification. Il apprend aussi de chaque interaction pour s'ameliorer continuellement.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-all ${
              isOpen ? "border-innoft-blue/20 bg-innoft-blue-light/30" : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
              <span className="text-[15px] font-600 text-innoft-dark">
                {faq.q}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-innoft-blue transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60 pb-5" : "max-h-0"
              }`}
            >
              <p className="px-6 text-sm leading-relaxed text-innoft-text-secondary">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
