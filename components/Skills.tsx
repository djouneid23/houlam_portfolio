// =============================
export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Compétences</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Architecture & SI",
              items: ["Conception UML/MERISE", "Architectures multi-tiers", "Microservices", "Urbanisation du SI", "Analyse des besoins métier", "Audit & gouvernance du SI"]
            },
            {
              title: "Bases de données",
              items: ["Conception des bases de données", "SQL avancé", "Optimisation et indexation", "Sécurisation BDO", "Backup & Disaster Recovery", "Bases NoSQL", "Administration de bases de données"]
            },
            {
              title: "Cybersécurtié",
              items: ["Analyse de vulnérabilité", "Tests d'intrusion (Web & réseau)", "Surveillance et détéction d'intrusion", "Journalisation & audit", "Sécurité de base de données", "Gestion des incidents", "Sécurité Web", "Sécurité Réseau", " Hardening serveurs Linux"]
            },
            {
              title: "IA & Data",
              items: ["Machine Learning", "Détection d'anomalies", "Classification d'attaques", "Analyse comportementale", "Python"]
            },
            {
              title: "Système & virtualisation",
              items: ["Linux server", "Windows server", "Proxmox", "Docker", "Git"]
            },
            {
              title: "Automatisation & Langage",
              items: ["Script bash", "Python", "Langage C", "Ansible", "Javascrit (NodeJS ExpressJS, ReactJS, NextJS)", "PHP Laravel", "Dart Flutter"]
            }
          ].map((category, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">{category.title}</h4>
              <ul className="space-y-2 text-slate-400">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}