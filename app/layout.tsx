import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Innoft — Chatbot IA pour Votre Business",
  description:
    "Transformez chaque visiteur en client avec un chatbot IA intelligent. Réponses instantanées 24/7, multilingue, connecté à vos produits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${sora.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
