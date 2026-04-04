// =============================
"use client";

import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-400 border-t border-slate-800 bg-slate-950">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.facebook.com/houlam.mohamed.9/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/djouneid-mohamed-b95a98285/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
         <a
          href="https://wa.me/2693835276"  // Remplace par ton numéro avec code pays
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Djouneid Mohamed — Tous droits réservés</p>
    </footer>
  );
}
