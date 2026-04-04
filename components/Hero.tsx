"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6  pt-24 pb-16 md:pt-0">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/photo_pro.png"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-3xl shadow-2xl border border-cyan-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Security Engineer | Pentester | AI-Driven Cybersecurity 
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-xl">
            Spécialisé dans les tests d’intrusion, l’audit de sécurité applicatif et 
            réseau, ainsi que l’automatisation de la détection des vulnérabilités
             via l’analyse de données et l’intelligence artificielle, afin d’identifier proactivement les failles
              et renforcer la sécurité des systèmes d’information
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-2xl hover:bg-cyan-500 hover:text-black transition"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}