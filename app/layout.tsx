import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Djouneid Mohamed | Ingénieur Cybersécurité & IA",
  description:
    "Portfolio professionnel de Djouneid Mohamed : génie logiciel, cybersécurité, pentest, SOC, infrastructure et IA appliquée.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
