"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const projects = [
  {
    title: "Plateforme de pentest réseau assistée par IA",
    desc: "Application de pentest réseau développée avec React et Python pour centraliser les résultats d’analyse, interpréter les vulnérabilités avec l’IA, proposer des recommandations et générer des rapports exploitables.",
    tags: ["React", "Python", "Pentest", "IA", "Reporting"],
    image: "/portfolio/project-pentest-ai.png",
  },
  {
    title: "SmartRevise",
    desc: "Agent IA d’aide à la révision permettant d’uploader un cours PDF, puis de générer automatiquement une fiche de révision, un QCM, des flashcards et un chat pour poser des questions au document.",
    tags: ["Agent IA", "PDF", "QCM", "Flashcards", "Chat"],
    image: "/portfolio/project-smartrevise-academic.png",
  },
  {
    title: "Plateforme de publication académique",
    desc: "Plateforme destinée à publier, organiser et consulter des documents académiques comme des livres, mémoires, articles, thèses et autres ressources de recherche.",
    tags: ["Web", "Documents", "Recherche", "Bibliothèque"],
    image: "/portfolio/project-smartrevise-academic.png",
  },
  {
    title: "Plateforme web & mobile de pharmacie",
    desc: "Application de vente de médicaments en ligne avec localisation des pharmacies, pensée pour faciliter la recherche de produits et l’accès aux points de vente.",
    tags: ["Mobile", "Web", "Géolocalisation"],
  },
  {
    title: "HomeLab cybersécurité sous Proxmox",
    desc: "Infrastructure personnelle pour les travaux SOC, SIEM et pentest, avec virtualisation Proxmox et accès VPN pour travailler à distance.",
    tags: ["Proxmox", "VPN", "SOC Lab"],
  },
  {
    title: "Prototype d’architecture de sécurité",
    desc: "Conception d’un modèle de sécurité pour entreprise : segmentation, contrôle d’accès, durcissement et logique de surveillance.",
    tags: ["Architecture", "Hardening", "Risk"],
  },
  {
    title: "Mini SOC intelligent",
    desc: "Mise en place d’un SOC personnel avec Suricata, Wazuh et une couche IA destinée à aider l’analyse et réduire les faux positifs.",
    tags: ["Wazuh", "Suricata", "IA"],
  },
  {
    title: "Agent IA conversationnel",
    desc: "Agent développé avec React, Node.js et l’API OpenRouter pour répondre à des questions textuelles et expérimenter les intégrations IA.",
    tags: ["React", "Node.js", "OpenRouter"],
  },
  {
    title: "Lab réseau multi-sites",
    desc: "Simulation GNS3 reliant plusieurs sites avec Fortigate et une architecture VPN hub-and-spoke pour scénarios d’entreprise.",
    tags: ["GNS3", "Fortigate", "VPN"],
  },
  {
    title: "Application RH",
    desc: "Conception d’une application web de ressources humaines avec React, Laravel et MySQL pour structurer des processus de gestion interne.",
    tags: ["React", "Laravel", "MySQL"],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-slate-900/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Projets
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Réalisations techniques et laboratoires personnels.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Une sélection de projets qui montrent mon intérêt pour les systèmes
            sécurisés, l’automatisation, le réseau, le développement applicatif,
            l’IA et la valorisation des connaissances.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative flex h-full overflow-hidden flex-col rounded-xl border border-slate-800/90 bg-slate-950/80 shadow-xl shadow-slate-950/20 backdrop-blur transition-colors hover:border-emerald-400/60"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-emerald-400/10 via-transparent to-amber-300/10" />

              {project.image && (
                <div className="relative aspect-video border-b border-slate-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Visuel du projet ${project.title}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </div>
              )}

              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-300 transition group-hover:bg-emerald-400/10 group-hover:text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
