"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#parcour", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-white">
          Djouneid Mohamed
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-emerald-300">
              {link.label}
            </a>
          ))}
          <Link href="/profile" className="transition hover:text-emerald-300">
            Profil
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg border border-slate-800 p-2 text-slate-200"
          onClick={() => setOpen((value) => !value)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 px-6 py-5 text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                onClick={() => setOpen(false)}
                href={link.href}
                className="transition hover:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href="/profile"
              className="transition hover:text-emerald-300"
            >
              Profil
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
