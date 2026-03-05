import Image from "next/image";
import {
  MessageCircle,
  Bot,
  Users,
  ArrowRight,
  Check,
  CheckCircle2,
  Globe,
  Calendar,
  BrainCircuit,
  Headphones,
  Upload,
  Settings,
  Rocket,
  Star,
  Instagram,
  Linkedin,
  Phone,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import PhoneMockup from "@/components/PhoneMockup";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

/* ═══════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative bg-innoft-light overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-innoft-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 lg:pt-20 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-innoft-blue/8 border border-innoft-blue/15 px-4 py-1.5 mb-6">
              <Bot size={14} className="text-innoft-blue" />
              <span className="text-xs font-600 text-innoft-blue">
                Chatbot IA pour votre site web
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-sora)] text-[36px] md:text-[44px] lg:text-[52px] font-800 leading-[1.1] text-innoft-dark mb-5">
              Ne Perdez Plus<br />
              de Clients Sur<br />
              <span className="text-innoft-blue">Votre Site Web</span>
            </h1>

            <p className="text-base md:text-lg text-innoft-text-secondary max-w-lg mb-8 mx-auto lg:mx-0 leading-relaxed">
              Un assistant IA qui connait vos produits, repond en Darija, et convertit vos visiteurs — meme a 3h du matin.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-full bg-innoft-blue px-7 py-3 text-sm font-600 text-white transition-all hover:bg-innoft-blue/90 hover:shadow-lg hover:shadow-innoft-blue/25 flex items-center justify-center gap-2"
              >
                Nous Contacter
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-600 text-innoft-dark transition-all hover:border-innoft-blue/30 hover:bg-innoft-blue/5 text-center"
              >
                Comment ca marche
              </a>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              {[
                { icon: <Bot size={16} />, label: "Agent Support" },
                { icon: <Calendar size={16} />, label: "Agent Booking" },
                { icon: <Users size={16} />, label: "Agent Commercial" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-innoft-blue/10 text-innoft-blue flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-600 text-innoft-dark">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <PhoneMockup variant="hero" />
              {/* Floating badges */}
              <div className="absolute -top-3 -right-2 md:-right-8 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-innoft-cyan/20 flex items-center justify-center">
                    <Check size={12} className="text-innoft-cyan" />
                  </div>
                  <span className="text-[11px] font-600 text-innoft-dark">+40% Conversions</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-left-8 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-innoft-blue/15 flex items-center justify-center">
                    <Globe size={12} className="text-innoft-blue" />
                  </div>
                  <span className="text-[11px] font-600 text-innoft-dark">Darija + FR + EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. BUILT FOR - trust / industries
   ═══════════════════════════════════════════ */
function BuiltFor() {
  const industries = [
    { icon: <ShoppingBag size={20} />, label: "E-commerce" },
    { icon: <Stethoscope size={20} />, label: "Cliniques & Sante" },
    { icon: <GraduationCap size={20} />, label: "Education" },
    { icon: <Building2 size={20} />, label: "Immobilier" },
    { icon: <UtensilsCrossed size={20} />, label: "Restauration" },
    { icon: <Car size={20} />, label: "Automobile" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-700 text-innoft-text-tertiary uppercase tracking-[0.2em] mb-3">
            Pour tous les secteurs
          </p>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-xl md:text-2xl font-700 text-innoft-dark mb-10">
            Concu pour les entreprises qui veulent scaler leur service client
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-innoft-blue/20 hover:bg-innoft-blue-light/30 transition-all cursor-default">
                <div className="text-innoft-text-secondary">{item.icon}</div>
                <span className="text-xs font-600 text-innoft-dark">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center text-sm text-innoft-text-secondary mt-8">
            Si votre business a un site web, Innoft est fait pour vous. <a href="#contact" className="text-innoft-blue font-600 hover:underline">Contactez-nous !</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. TWO PRODUCTS - Classic & Pro
   ═══════════════════════════════════════════ */
function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-700 text-innoft-text-tertiary uppercase tracking-[0.2em] mb-3">
            Deux modes, un seul outil
          </p>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark mb-4">
            Innoft s&apos;adapte a vos besoins :<br />
            clients externes ou equipe interne
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {/* Classic */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border-2 border-innoft-blue/15 bg-white p-8 h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xs font-600 text-innoft-text-tertiary bg-gray-100 px-3 py-1 rounded-full">
                  Pour vos clients
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-700 text-innoft-dark mb-1">
                Innoft Classic
              </h3>
              <p className="text-sm text-innoft-text-secondary mb-6">
                Le chatbot qui repond a vos clients automatiquement.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Repond instantanement aux questions",
                  "Prend des rendez-vous sans back-and-forth",
                  "Capture et qualifie les leads",
                  "Disponible 24/7 meme apres les heures",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-innoft-blue mt-0.5 shrink-0" />
                    <span className="text-sm text-innoft-dark/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-[11px] text-innoft-text-tertiary font-500 mb-6">
                <span>Ideal pour :</span>
                <span className="bg-innoft-blue-light text-innoft-blue px-2 py-0.5 rounded-full font-600">E-commerce</span>
                <span className="bg-innoft-blue-light text-innoft-blue px-2 py-0.5 rounded-full font-600">Services</span>
              </div>

              <a
                href="#contact"
                className="block w-full text-center rounded-xl bg-innoft-blue px-6 py-3 text-sm font-600 text-white transition-all hover:bg-innoft-blue/90"
              >
                Nous Contacter
              </a>
            </div>
          </ScrollReveal>

          {/* Work / Pro */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl border-2 border-innoft-cyan/20 bg-white p-8 h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xs font-600 text-innoft-text-tertiary bg-gray-100 px-3 py-1 rounded-full">
                  Pour votre equipe
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-700 text-innoft-dark mb-1">
                Innoft Work
              </h3>
              <p className="text-sm text-innoft-text-secondary mb-6">
                L&apos;assistant interne qui aide votre equipe au quotidien.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Repond aux questions de l'equipe instantanement",
                  "Partage procedures, prix et docs internes",
                  "Verifie le stock, planning et calendrier",
                  "Reduit les interruptions et questions repetitives",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-innoft-cyan mt-0.5 shrink-0" />
                    <span className="text-sm text-innoft-dark/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-[11px] text-innoft-text-tertiary font-500 mb-6">
                <span>Ideal pour :</span>
                <span className="bg-innoft-cyan-light text-innoft-dark px-2 py-0.5 rounded-full font-600">Equipes</span>
                <span className="bg-innoft-cyan-light text-innoft-dark px-2 py-0.5 rounded-full font-600">Agences</span>
              </div>

              <a
                href="#contact"
                className="block w-full text-center rounded-xl border-2 border-innoft-dark px-6 py-3 text-sm font-600 text-innoft-dark transition-all hover:bg-innoft-dark hover:text-white"
              >
                Nous Contacter
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-xs text-innoft-text-tertiary mt-8">
            Vous pouvez utiliser les deux modes avec le meme compte Innoft.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. BOLD STATEMENT - dark section
   ═══════════════════════════════════════════ */
function BoldStatement() {
  return (
    <section className="bg-innoft-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-10">
        <MessageCircle size={200} className="text-innoft-blue" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-[44px] lg:text-[56px] font-800 leading-[1.15] text-white">
            Pas de Nouvelle App.
            <br />
            Pas de Logiciel Complexe.
            <br />
            Juste <span className="text-innoft-cyan">Votre Site Web</span>
            <br />
            Avec l&apos;IA Derriere.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. FEATURES - alternating layout (Sawabot style)
   ═══════════════════════════════════════════ */
function FeaturesIntro() {
  return (
    <section id="features" className="pt-20 pb-4 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-700 text-innoft-text-tertiary uppercase tracking-[0.2em] mb-3">
            Decouvrez les fonctionnalites
          </p>
          <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl lg:text-4xl font-700 text-innoft-dark">
            Qu&apos;est-ce qu&apos;Innoft peut faire pour vous ?
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface FeatureRowProps {
  reverse?: boolean;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  tagline: string;
  phoneMockup: React.ReactNode;
}

function FeatureRow({ reverse, label, title, description, bullets, tagline, phoneMockup }: FeatureRowProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
          {/* Phone side */}
          <ScrollReveal className="flex-1 flex justify-center">
            {phoneMockup}
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal delay={150} className="flex-1">
            <div className={`${reverse ? "lg:pr-4" : "lg:pl-4"}`}>
              <span className="inline-block text-xs font-600 text-innoft-blue bg-innoft-blue-light px-3 py-1 rounded-full mb-4">
                {label}
              </span>
              <h3 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark leading-tight mb-4">
                {title}
              </h3>
              <p className="text-sm text-innoft-text-secondary leading-relaxed mb-6">
                {description}
              </p>

              <div className="space-y-3 mb-6">
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-innoft-blue mt-0.5 shrink-0" />
                    <span className="text-sm text-innoft-dark/80">{b}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-innoft-text-tertiary italic">{tagline}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. USE YOUR OWN KNOWLEDGE
   ═══════════════════════════════════════════ */
function KnowledgeSection() {
  return (
    <section className="py-16 lg:py-20 bg-innoft-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text side */}
          <ScrollReveal className="flex-1">
            <div>
              <span className="inline-block text-xs font-600 text-innoft-blue bg-innoft-blue-light px-3 py-1 rounded-full mb-4">
                Base de connaissances
              </span>
              <h3 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark leading-tight mb-4">
                Utilisez Vos Propres<br />Donnees
              </h3>
              <p className="text-sm text-innoft-text-secondary leading-relaxed mb-6">
                Innoft repond uniquement a partir de vos documents et donnees. Pas d&apos;hallucinations, pas d&apos;informations inventees.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Uploadez vos PDF, FAQ et docs produit",
                  "Connectez votre Google Drive",
                  "Aucune reponse inventee — que vos donnees",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-innoft-cyan mt-0.5 shrink-0" />
                    <span className="text-sm text-innoft-dark/80">{b}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-innoft-text-tertiary italic">
                Toujours fiable. Toujours a jour.
              </p>
            </div>
          </ScrollReveal>

          {/* Visual side - knowledge card */}
          <ScrollReveal delay={150} className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-[300px] md:w-[340px] rounded-2xl bg-white border border-gray-200 p-6 shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-innoft-blue to-innoft-cyan flex items-center justify-center mb-4">
                  <BrainCircuit size={28} className="text-white" />
                </div>
                <h4 className="font-[family-name:var(--font-sora)] text-lg font-700 text-innoft-dark mb-3">
                  Base IA Innoft
                </h4>
                <div className="space-y-2.5">
                  {[
                    { label: "catalogue-produits.pdf", size: "2.4 MB" },
                    { label: "faq-clients.docx", size: "1.1 MB" },
                    { label: "tarifs-2024.pdf", size: "840 KB" },
                    { label: "procedures-internes.pdf", size: "3.2 MB" },
                  ].map((doc) => (
                    <div key={doc.label} className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5">
                      <div className="w-8 h-8 rounded-lg bg-innoft-blue/10 flex items-center justify-center shrink-0">
                        <Upload size={14} className="text-innoft-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-600 text-innoft-dark truncate">{doc.label}</div>
                        <div className="text-[10px] text-innoft-text-tertiary">{doc.size}</div>
                      </div>
                      <Check size={14} className="text-innoft-cyan shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. HOW IT WORKS
   ═══════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle size={28} />,
      number: "1",
      title: "Remplissez le formulaire",
      description: "Dites-nous votre secteur, vos besoins et votre site web. Ca prend 30 secondes.",
    },
    {
      icon: <Headphones size={28} />,
      number: "2",
      title: "Un expert vous contacte",
      description: "Notre equipe vous rappelle sous 24h pour comprendre vos besoins et preparer votre chatbot.",
    },
    {
      icon: <Rocket size={28} />,
      number: "3",
      title: "Integration sur votre site",
      description: "On configure et installe le chatbot sur votre site. Vous n'avez rien a faire.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-innoft-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-700 text-white/60 uppercase tracking-[0.2em] mb-3">
            Simple comme bonjour
          </p>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-white mb-14">
            Comment ca marche ?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-white rounded-2xl p-7 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-innoft-blue text-white flex items-center justify-center mx-auto mb-5 font-[family-name:var(--font-sora)] text-lg font-800">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-innoft-blue/10 text-innoft-blue flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-base font-700 text-innoft-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-innoft-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p className="text-center text-sm text-white/70 mt-10">
            On s&apos;occupe de tout — vous, vous gerez votre business.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. GET STARTED CTA
   ═══════════════════════════════════════════ */
function GetStartedCTA() {
  return (
    <section className="py-20 bg-innoft-light">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Text side */}
              <div className="flex-1 p-10 lg:p-14">
                <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark mb-6">
                  Demarrez avec Innoft
                </h2>
                <div className="space-y-3 mb-8">
                  {[
                    "Remplissez le formulaire en 30 secondes",
                    "Un expert vous rappelle sous 24h",
                    "On integre le chatbot sur votre site",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-innoft-cyan/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-innoft-cyan" />
                      </div>
                      <span className="text-sm text-innoft-dark/80">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-innoft-blue px-7 py-3 text-sm font-600 text-white transition-all hover:bg-innoft-blue/90 hover:shadow-lg hover:shadow-innoft-blue/25"
                >
                  Nous Contacter
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Phone side */}
              <div className="flex-1 flex justify-center py-10 lg:py-0 bg-innoft-light/50">
                <div className="scale-90">
                  <PhoneMockup variant="feature2" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   10. CONTACT
   ═══════════════════════════════════════════ */
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-700 text-innoft-text-tertiary uppercase tracking-[0.2em] mb-3">
                Contactez-nous
              </p>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark leading-tight mb-4">
                Pret a Booster Votre Business ?
              </h2>
              <p className="text-sm text-innoft-text-secondary mb-8 leading-relaxed">
                Rejoignez les entreprises marocaines qui convertissent plus avec l&apos;IA. Un expert vous accompagne de A a Z.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Un expert dedie vous accompagne",
                  "Integration cle en main sur votre site",
                  "Support technique continu",
                  "Formation de votre equipe incluse",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-innoft-cyan shrink-0" />
                    <span className="text-sm text-innoft-dark/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial mini */}
              <div className="bg-innoft-light rounded-2xl p-5 border border-gray-100">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-innoft-dark/80 italic mb-3">
                  &ldquo;Depuis Innoft, nos ventes en ligne ont augmente de 35%. Le chatbot repond meme en Darija !&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-innoft-blue/10 flex items-center justify-center text-xs font-700 text-innoft-blue">
                    Y
                  </div>
                  <div>
                    <span className="text-xs font-600 text-innoft-dark">Yasmine B.</span>
                    <span className="text-xs text-innoft-text-tertiary ml-2">Beaute Express</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal delay={200}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   11. FAQ
   ═══════════════════════════════════════════ */
function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-innoft-light">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-700 text-innoft-text-tertiary uppercase tracking-[0.2em] mb-3">
            FAQ
          </p>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-700 text-innoft-dark mb-12">
            Questions Frequentes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <FaqAccordion />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   12. FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  const footerLinks = {
    Produit: ["Fonctionnalites", "Tarifs", "Integrations", "Contact"],
    Secteurs: ["E-commerce", "Immobilier", "Education", "Sante"],
    Ressources: ["Documentation", "Blog", "Guide de demarrage", "API"],
    Entreprise: ["A propos", "Carriere", "Contact", "Mentions legales"],
  };

  return (
    <footer className="bg-innoft-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="Innoft" width={90} height={58} className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Le chatbot IA qui transforme votre site web en machine a ventes.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-innoft-blue hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-innoft-blue hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-innoft-blue hover:text-white transition-all" aria-label="WhatsApp">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-700 text-white/60 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/30">
            &copy; 2024 Innoft. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialite</a>
            <a href="#" className="hover:text-white/60 transition-colors">Conditions d&apos;utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BuiltFor />
      <Products />
      <BoldStatement />
      <FeaturesIntro />

      {/* Feature 1 - Answer Questions */}
      <FeatureRow
        label="Support automatique"
        title="Repondez aux Questions Automatiquement"
        description="Innoft repond a vos clients instantanement — prix, horaires, livraison, stock... Tout ce qu'ils demandent."
        bullets={[
          '"C\'est quoi vos tarifs ?"',
          '"Vous etes ouverts aujourd\'hui ?"',
          '"Quels documents faut-il ?"',
        ]}
        tagline="Toujours disponible. Toujours precis."
        phoneMockup={<PhoneMockup variant="feature1" />}
      />

      {/* Feature 2 - Book Appointments */}
      <FeatureRow
        reverse
        label="Prise de rendez-vous"
        title="Prenez des Rendez-Vous Automatiquement"
        description="Vos clients reservent directement via le chat. Plus de back-and-forth par telephone."
        bullets={[
          "Synchronise avec Google Calendar",
          "Evite les doubles reservations",
          "Envoie des confirmations automatiques",
        ]}
        tagline="Toujours disponible. Toujours organise."
        phoneMockup={<PhoneMockup variant="feature2" />}
      />

      {/* Feature 3 - Support Team */}
      <FeatureRow
        label="Support equipe"
        title="Supportez Votre Equipe en Interne"
        description="Vos employes posent des questions au chatbot au lieu d'interrompre les collegues."
        bullets={[
          "Reponses instantanees",
          "Moins d'interruptions",
          "Meilleure productivite",
        ]}
        tagline="Toujours disponible. Toujours efficace."
        phoneMockup={<PhoneMockup variant="feature3" />}
      />

      <KnowledgeSection />
      <HowItWorks />
      <GetStartedCTA />
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
