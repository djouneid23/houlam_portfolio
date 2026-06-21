"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Architecture SI",
    text: "Conception d’applications, bases de données et systèmes d’information structurés.",
  },
  {
    title: "Sécurité offensive & défensive",
    text: "Tests d’intrusion, audit, durcissement, surveillance et réponse aux incidents.",
  },
  {
    title: "IA pour la cyberdéfense",
    text: "Automatisation, détection d’anomalies et analyse comportementale pour réduire le bruit opérationnel.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-slate-900/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              À propos
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Un profil hybride entre logiciel, infrastructure et cybersécurité.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="space-y-6 text-slate-300 leading-relaxed"
          >
            <p>
              Je suis orienté architecture des systèmes d’information, sécurité
              avancée et intelligence artificielle. Mon parcours combine le génie
              logiciel, l’administration des environnements techniques, les bases
              de données, le réseau et la cybersécurité.
            </p>
            <p>
              Mon objectif est de construire des solutions fiables, sécurisées et
              utiles aux entreprises comme aux administrations : applications
              métiers, laboratoires de cybersécurité, architectures réseau, SOC
              personnel et outils d’automatisation.
            </p>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 transition-colors hover:border-emerald-400/50"
                >
                  <h3 className="font-semibold text-emerald-300">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
