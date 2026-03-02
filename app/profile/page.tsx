// =============================
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* PHOTO */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <Image
                src="/profile_houlam.png"  
                alt="Photo de profil Houlam"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* INFOS */}
          <div>
            <h3 className="text-4xl font-bold mb-4">Djouneid Mohamed</h3>
            <p className="text-cyan-400 text-lg font-semibold mb-6">
              Ingénieur Génie Logiciel • Cybersécurité • IA
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              Actuellement en Master en Génie Logiciel spécialisé en Systèmes d&apos;information et bases de données et en parallele je fais un Master
              en cybersécurité & Inteligence Artificiel. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
                Je conçois et sécurise des architectures SI robustes, évolutives et intelligentes.

            </p>

            <div className="space-y-3 text-slate-300">
              Mon expertise combine :
              <p><span className="text-cyan-400">Conception et optimisation des bases de données</span></p>
              <p><span className="text-cyan-400">Architectures des systèmes d&apos;information sécurisés</span></p>
              <p><span className="text-cyan-400">Sécurité offensive et défensive</span></p>
              <p><span className="text-cyan-400">Inteligence artificielle appliquée à la cybersécurité</span></p>
              <p><span className="text-cyan-400">Automatisation</span></p>
            </div>

            <div className="space-y-3 text-slate-300">
              <p></p>
              <p><span className="text-cyan-400">Localisation :</span> Comores / Madagascar</p>
              <p><span className="text-cyan-400">Spécialité :</span> Information Systems & AI-Driven Cyber</p>
              <p><span className="text-cyan-400">Certification :</span> Security+ • server+ •  CCNA123 • ADN • chez GSIMEL</p>
              <p><span className="text-cyan-400">Startup :</span> Fondateur de CyberKom et NovaKom</p>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
                Mon objectif est de dévélopper des infrastructures numériques sécurisées et inteligentes adaptées aux entreprises et administrations 

            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="/api/download-cv"
                className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Télécharger CV
              </a>
              <Link
                  href="/#contact"
                  className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold"
                >
                  Me contacter
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}