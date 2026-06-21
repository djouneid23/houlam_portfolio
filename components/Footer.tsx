"use client";

import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/houlam.mohamed.9/",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/djouneid-mohamed-b95a98285/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2693835276",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-400">
      <div className="mb-4 flex justify-center gap-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-800 p-3 transition hover:border-emerald-400 hover:text-emerald-300"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} Djouneid Mohamed. Tous droits réservés.
      </p>
    </footer>
  );
}
