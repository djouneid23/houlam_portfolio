"use client";

import { motion } from "framer-motion";

const parcours = [
  {
    title: "Formateur chez GSIMEL Côte d'Ivoire",
    date: "2026",
    description:
      "Animation de formations orientées tests d'intrusion et Python, avec une approche pratique centrée sur les compétences terrain.",
  },
  {
    title: "Double Master Génie Logiciel, Cybersécurité & IA",
    date: "2024 - présent",
    description:
      "Spécialisation en systèmes d'information, sécurité applicative et réseau, analyse de données et intelligence artificielle appliquée à la détection des menaces.",
  },
  {
    title: "Formation Pentest & Audit de Sécurité",
    date: "2025",
    description:
      "Identification de vulnérabilités, exploitation contrôlée, analyse des risques et rédaction de rapports techniques avec recommandations de remédiation.",
  },
  {
    title: "CompTIA Security+ & CompTIA Server+",
    date: "2025",
    description:
      "Validation des compétences en sécurité réseau, gestion des risques, réponse aux incidents et administration serveur.",
  },
  {
    title: "Cisco CCNA 1, 2 & 3",
    date: "2024",
    description:
      "Fondamentaux réseau, routage, switching, configuration d'équipements Cisco, protocoles réseau et sécurité de base.",
  },
  {
    title: "Licence en Développement Informatique",
    date: "2024",
    description:
      "Conception d'applications, programmation orientée objet, développement web et mobile, bases de données, systèmes et réseaux.",
  },
  {
    title: "DTS en Informatique de Gestion",
    date: "2023",
    description:
      "Développement d'applications de gestion, administration des bases de données et analyse des besoins métiers.",
  },
  {
    title: "Certificat de formation en business plan",
    date: "2022",
    description:
      "Formation sur l'élaboration et la défense d'un business plan, organisée par l'Union européenne.",
  },
];

export default function Parcours() {
  return (
    <section id="parcour" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Parcours
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Formation, certifications et expérience.
          </h2>
        </motion.div>

        <div className="relative border-l border-slate-800">
          {parcours.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative mb-8 ml-6"
            >
              <span className="absolute -left-[37px] top-6 h-4 w-4 rounded-full border-4 border-slate-950 bg-amber-300" />

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <time className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
                    {item.date}
                  </time>
                </div>
                <p className="mt-4 text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
