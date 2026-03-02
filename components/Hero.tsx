export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold">
        Ingenieur Système d&apos;information & Cybersécurité avec IA
      </h2>
      <p className="mt-6 max-w-2xl text-slate-400 text-lg">
        Conception d’architectures sécurisées et intégration IA appliquée à la cybersécurité.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold">
          Voir mes projets
        </a>
        <a href="#contact" className="border border-cyan-500 px-6 py-3 rounded-2xl hover:bg-cyan-500 hover:text-black">
          Me contacter
        </a>
      </div>
    </section>
  );
}