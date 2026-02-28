// =============================
export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Compétences</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cybersécurité",
              items: ["SIEM (Wazuh)", "IDS/IPS", "Pentest", "Hardening Linux"]
            },
            {
              title: "Génie Logiciel",
              items: ["Next.js", "Node.js", "REST API", "RBAC"]
            },
            {
              title: "IA & Automatisation",
              items: ["Python", "Anomaly Detection", "Automation", "Data Analysis"]
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