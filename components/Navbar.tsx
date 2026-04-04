"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Djouneid Mohamed</h1>

        {/* Desktop menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-cyan-400">À propos</a>
          <a href="#skills" className="hover:text-cyan-400">Compétences</a>
          <a href="#projects" className="hover:text-cyan-400">Projets</a>
          <Link href="/profile">Profile</Link>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-cyan-400">À propos</a>
            <a onClick={() => setOpen(false)} href="#skills" className="hover:text-cyan-400">Compétences</a>
            <a onClick={() => setOpen(false)} href="#projects" className="hover:text-cyan-400">Projets</a>
            <Link onClick={() => setOpen(false)} href="/profile">Profile</Link>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}