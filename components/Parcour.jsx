"use client";

import { motion } from "framer-motion";

const parcours = [
    {
    title: "Formateur chez GSIMEL Côte d’Ivoire ",
    date: "2026",
    description:
      "Tests d'intrusion, Python."
  },
  {
    title: "Double Master Génie Logiciel & Cybersécurité & IA",
    date: "2024 - Présent",
    description:
      "Spécialisé dans les tests d’intrusion, l’audit de sécurité applicatif et réseau, ainsi que l’automatisation de la détection des vulnérabilités via l’analyse de données et l’intelligence artificielle, afin d’identifier proactivement les failles et renforcer la sécurité des systèmes d’information"
  },
  {
    title: "Formation Pentest & Audit de Sécurité",
    date: "2025",
    description:
      "Formation Pentest & Audit de Sécurité axée sur l’identification des vulnérabilités, la réalisation de tests d’intrusion, l’exploitation contrôlée des failles, l’analyse des risques et la rédaction de rapports techniques avec recommandations de remédiation."
  },
  {
    title: "Certification CompTIA Security+ et compTIA Serveur + GSIMEL",
    date: "2025",
    description:
      "Validation des compétences en sécurité réseau, gestion des risques et réponse aux incidents et adminsitration serveur."
  },
  {
    title: "Cisco CCNA 1 & 2 & 3",
    date: "2024",
    description:
      "Formation Cisco CCNA 1, 2 & 3 couvrant les fondamentaux du réseau, le routage et switching, la configuration d’équipements Cisco, les protocoles réseau, la sécurité de base, et la gestion d’infrastructures réseau d’entreprise."
  },
  {
    title: "Diplôme de Licence en Développement informatique ",
    date: "2024",
    description:
      "Diplôme de Licence en Développement Informatique axé sur la conception d’applications, la programmation orientée objet, le développement web et mobile, ainsi que les bases des systèmes, réseaux et bases de données. Formation orientée vers la réalisation de projets logiciels et la résolution de problématiques techniques."
  },
  {
    title: "DTS en Informatiue de gestion ",
    date: "2023",
    description:
        "DTS en Informatique de Gestion orienté vers le développement d’applications de gestion, l’administration des bases de données, l’analyse des besoins métiers et la mise en place de solutions informatiques pour l’optimisation des processus organisationnels."
  },
  {
    title: "Certificat de formation ",
    date: "2022",
    description:
        "Obtention d'un certificat de formation sur l’élaboration et défendre son business plan organisé par l'Union européenne"
  }
  
];

export default function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Mon Parcours
        </motion.h2>

        <div className="relative border-l border-slate-700">

          {parcours.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              {/* Point */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500"></span>

              <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/10 transition">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <time className="block mb-2 text-sm text-cyan-400">
                  {item.date}
                </time>
                <p className="text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}