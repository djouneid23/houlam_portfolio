"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  "Pentest web & réseau",
  "SOC, SIEM & détection",
  "IA appliquée à la cybersécurité",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pt-28 pb-20 flex items-center">
      <Image
        src="/portfolio/hero-cyber-comoros.png"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-20 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.24),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(120deg,#020617_0%,rgba(2,6,23,0.88)_48%,rgba(2,6,23,0.72)_100%)]" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Djouneid Mohamed
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            Ingénieur cybersécurité, pentester & builder IA.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Je conçois, teste et sécurise des systèmes d’information avec une
            approche offensive, défensive et orientée automatisation. Mon travail
            relie génie logiciel, infrastructure, SOC et intelligence artificielle
            pour détecter les risques plus tôt et renforcer les environnements critiques.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-50"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/api/download-cv"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
            >
              Télécharger le CV
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Voir mes projets
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-amber-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/photo_pro.png"
                alt="Portrait professionnel de Djouneid Mohamed"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="border-t border-slate-800 p-5">
              <p className="font-semibold text-white">Security Engineer | Pentester</p>
              <p className="mt-1 text-sm text-slate-400">
                Génie logiciel, cybersécurité, SOC et IA appliquée.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
