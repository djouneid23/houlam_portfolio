"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Cybersécurité",
    items: [
      "Tests d’intrusion web & réseau",
      "Analyse de vulnérabilités",
      "Audit et recommandations",
      "Surveillance IDS/IPS",
      "Gestion des incidents",
      "Hardening Linux",
    ],
  },
  {
    title: "SOC, réseau & infrastructure",
    items: [
      "Wazuh, Suricata, SIEM",
      "Proxmox et virtualisation",
      "VPN, segmentation réseau",
      "GNS3, Fortigate",
      "Linux Server, Windows Server",
      "Docker et Git",
    ],
  },
  {
    title: "Génie logiciel & SI",
    items: [
      "UML, MERISE",
      "Architecture multi-tiers",
      "Applications web et mobile",
      "React, Next.js, Node.js",
      "Laravel, PHP, Flutter",
      "Analyse des besoins métier",
    ],
  },
  {
    title: "Bases de données",
    items: [
      "Conception relationnelle",
      "SQL avancé",
      "Optimisation et indexation",
      "Sécurisation des données",
      "Sauvegarde et reprise",
      "Administration BDD",
    ],
  },
  {
    title: "IA & data",
    items: [
      "Machine learning",
      "Détection d’anomalies",
      "Classification d’attaques",
      "Analyse comportementale",
      "Réduction des faux positifs",
      "Python",
    ],
  },
  {
    title: "Automatisation",
    items: [
      "Scripts Bash",
      "Python",
      "Ansible",
      "API et intégrations",
      "Node.js / Express",
      "Workflows techniques",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Compétences
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Des compétences orientées terrain et réalisation.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20 transition-colors hover:border-emerald-400/50"
            >
              <h3 className="text-xl font-semibold text-emerald-300">{category.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {category.items.map((skill) => (
                  <li key={skill} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300 transition group-hover:scale-125" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
