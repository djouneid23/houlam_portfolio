import "./globals.css";
export const metadata = {
  title: "Houlam | Ingénieur Cybersécurité & IA",
  description: "Portfolio professionnel - Génie Logiciel & Cybersécurité spécialisée IA"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
