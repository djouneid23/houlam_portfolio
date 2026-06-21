import Image from "next/image";
import Link from "next/link";

const expertise = [
  "Conception et optimisation des bases de données",
  "Architecture de systèmes d’information sécurisés",
  "Sécurité offensive et défensive",
  "Intelligence artificielle appliquée à la cybersécurité",
  "Automatisation des tâches techniques",
];

export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <Link href="/#about" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
          Retour au portfolio
        </Link>

        <section className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/profile_houlam.png"
                alt="Photo de profil de Djouneid Mohamed"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Profil
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-black">
              Djouneid Mohamed
            </h1>
            <p className="mt-4 text-xl font-semibold text-sky-200">
              Security Engineer | Pentester | AI-Driven Cybersecurity
            </p>

            <div className="mt-7 space-y-5 text-slate-300 leading-relaxed">
              <p>
                Actuellement en master de génie logiciel spécialisé en systèmes
                d’information et bases de données, je poursuis aussi un parcours en
                cybersécurité et intelligence artificielle.
              </p>
              <p>
                Je conçois et sécurise des architectures SI robustes, évolutives et
                intelligentes, avec un intérêt fort pour les environnements SOC, les
                labs réseau, l’audit applicatif et l’automatisation.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Localisation</p>
                <p className="mt-1 font-semibold">Comores / Madagascar</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Spécialité</p>
                <p className="mt-1 font-semibold">Information Systems & AI-Driven Cyber</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Certifications</p>
                <p className="mt-1 font-semibold">Security+, Server+, CCNA 1/2/3</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Initiatives</p>
                <p className="mt-1 font-semibold">CyberKom et NovaKom</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Expertise</h2>
              <ul className="mt-4 grid gap-3 text-slate-300 sm:grid-cols-2">
                {expertise.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/api/download-cv"
                className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Télécharger le CV
              </a>
              <Link
                href="/#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-amber-300 hover:text-amber-200"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
