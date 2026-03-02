import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Djouneid Mohamed</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-cyan-400">À propos</a>
          <a href="#skills" className="hover:text-cyan-400">Compétences</a>
          <a href="#projects" className="hover:text-cyan-400">Projets</a>
          <Link href="/profile">Profile</Link>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}