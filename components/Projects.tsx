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
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-4">{project}</h4>
              <p className="text-slate-400">
                Description technique détaillée, architecture sécurisée et stack utilisée.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
