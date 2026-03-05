export default function PhoneMockup({ variant = "hero" }: { variant?: "hero" | "feature1" | "feature2" | "feature3" }) {
  return (
    <div className="relative mx-auto w-[280px] md:w-[300px]">
      {/* Phone frame */}
      <div className="rounded-[40px] bg-innoft-dark p-3 shadow-2xl shadow-innoft-dark/20">
        <div className="rounded-[32px] bg-white overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-600 text-innoft-dark">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><rect x="0" y="4" width="2.5" height="6" rx="0.5"/><rect x="3.5" y="2.5" width="2.5" height="7.5" rx="0.5"/><rect x="7" y="1" width="2.5" height="9" rx="0.5"/><rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/></svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="4" rx="0.5"/><rect x="2" y="2" width="12" height="6" rx="1"/></svg>
            </div>
          </div>

          {/* Chat header */}
          <div className="bg-innoft-blue px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <div>
              <div className="text-white text-xs font-600">Assistant Innoft</div>
              <div className="text-white/60 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-innoft-cyan inline-block" />
                En ligne
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-3 space-y-2.5 min-h-[280px] bg-gray-50/80">
            {variant === "hero" && <HeroMessages />}
            {variant === "feature1" && <Feature1Messages />}
            {variant === "feature2" && <Feature2Messages />}
            {variant === "feature3" && <Feature3Messages />}
          </div>

          {/* Input bar */}
          <div className="px-3 py-2.5 border-t border-gray-100 flex items-center gap-2 bg-white">
            <div className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-[11px] text-gray-400">
              Ecrivez un message...
            </div>
            <div className="w-8 h-8 rounded-full bg-innoft-blue flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BotMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="bg-white text-innoft-dark text-[11px] leading-relaxed px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%]">
        {text}
      </div>
    </div>
  );
}

function UserMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-innoft-blue text-white text-[11px] leading-relaxed px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
        {text}
      </div>
    </div>
  );
}

function HeroMessages() {
  return (
    <>
      <BotMsg text="Bienvenue ! Je suis l'assistant IA de votre site. Comment puis-je vous aider ?" />
      <UserMsg text="Quel est le prix du forfait Pro ?" />
      <BotMsg text="Le forfait Pro est a 299 DH/mois. Il inclut le support prioritaire et les analytics avances ! 🚀" />
      <UserMsg text="Wach kayn chi offre f Darija ?" />
      <BotMsg text="Ah bikhir ! Ana kanfham Darija, Francais w Anglais. Kifach n9dr n3awnk ? 😊" />
    </>
  );
}

function Feature1Messages() {
  return (
    <>
      <BotMsg text="Bienvenue chez ModaShop ! Comment puis-je vous aider ?" />
      <UserMsg text="C'est quoi vos horaires ?" />
      <BotMsg text="Nous sommes ouverts du Lundi au Samedi, de 9h a 20h. Le dimanche de 10h a 18h. 🕐" />
      <UserMsg text="Vous livrez a Marrakech ?" />
      <BotMsg text="Oui ! Livraison gratuite a Marrakech en 24-48h. Commandez avant 14h pour recevoir demain." />
      <UserMsg text="Quels documents acceptez-vous ?" />
      <BotMsg text="Carte bancaire, virement, et paiement a la livraison. Que preferez-vous ?" />
    </>
  );
}

function Feature2Messages() {
  return (
    <>
      <BotMsg text="Bonjour ! Je peux vous aider a prendre rendez-vous. Quel service vous interesse ?" />
      <UserMsg text="Je veux un RDV pour consultation" />
      <BotMsg text="Parfait ! Les creneaux disponibles cette semaine : Mercredi 10h, Jeudi 14h, Vendredi 9h. Lequel preferez-vous ?" />
      <UserMsg text="Jeudi 14h stp" />
      <BotMsg text="C'est confirme ! RDV Jeudi a 14h. Vous recevrez un rappel par SMS 1h avant. ✅" />
    </>
  );
}

function Feature3Messages() {
  return (
    <>
      <BotMsg text="Salut l'equipe ! Posez vos questions internes ici." />
      <UserMsg text="C'est quoi la procedure de remboursement ?" />
      <BotMsg text="Procedure de remboursement : 1) Verifier le delai (30 jours) 2) Creer un ticket dans le CRM 3) Envoyer le formulaire au client. Delai de traitement : 5 jours ouvrables." />
      <UserMsg text="Ou trouver le doc des tarifs B2B ?" />
      <BotMsg text="Le document est dans Drive > Commercial > Tarifs B2B 2024.pdf. Derniere mise a jour : 15 Mars." />
    </>
  );
}
