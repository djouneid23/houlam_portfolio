import { title } from "process";

// =============================
export default function Projects() {
  const projects = [
    "Plateforme sécurisée avec RBAC",
    "Mini SOC personnel",
    "Détection IA comportementale"
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Projets</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Creation d'une application mobile",
              desc: "Creation d'une application mobile et Web de vente des medicaments en ligne et localisation des pharmacies"
            },
            {
              title: "Création d'un HomeLab",
              desc: "Création d'un HomLab pour mes travaux en SOC, SIEM et Test d'Intrusion sous Proxmox avec un accées VPN en cas de deplacement"
            },
            {
              title: "Architecture de sécurité",
              desc: "Création d'un prototype de sécurité pour les entreprises"
            },
            {
              title: "Mini SOC Intelligente",
              desc : "Mise en place d'un mini SOC inteligente avec suricata comme IDS/IPS, wazuh et IA pour reduire les faux positifs"
            },
            {
              title: "Agent IA",
              desc: "Création d'un agent IA en react et nodejs et l'API openrouter qui permet de discuter avec et lui poser des questions il traite seulement les texts mais pas les fichiers"
            },
            {
              title : "Lab Réseau",
              desc: "Création d'un Lab réseau qui permet de relier plusieur site ou entreprise sous GNS3 en utilisant fortigate(VPN Hub-and-Spock) "
            }
          ].map((project, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
              <p className="text-slate-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
