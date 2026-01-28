import Image from "next/image";
import avatar1 from "@/public/lucas.png";
import avatar2 from "@/public/david.png";
import avatar3 from "@/public/sophia.svg";
import avatar4 from "@/public/sophie.png";
import avatar5 from "@/public/liam.svg";
import avatar6 from "@/public/ethan.svg";

const testimonials = [
  {
    name: "Lucas Martin",
    role: "Responsable de la marque",
    text: "VISIOAD a conçu notre site avec un design soigné et une expérience optimale, renforçant notre présence en ligne.",
    avatar: avatar1,
  },
  {
    name: "David Carter",
    role: "Responsable de la stratégie",
    text: "De la conception au marketing, l'expertise et la stratégie de VISIOAD ont renforcé notre succès numérique.",
    avatar: avatar2,
  },
  {
    name: "Sophie Lambert",
    role: "Directeur du marketing",
    text: "VISIOAD a conçu notre site avec un design soigné et une expérience optimale, renforçant notre présence en ligne.",
    avatar: avatar3,
  },
  {
    name: "Sophia Miller",
    role: "Responsable Marketing de Croissance",
    text: "L'équipe de VISIOAD a aidé à élever nos efforts marketing avec des idées innovantes.",
    avatar: avatar4,
  },
  {
    name: "Liam Matthews",
    role: "Stratège en Contenu",
    text: "Travailler avec VISIOAD a révolutionné notre stratégie de contenu.",
    avatar: avatar5,
  },
  {
    name: "Ethan Parker",
    role: "PDG",
    text: "Collaborer avec VISIOAD a été une décision clé pour notre entreprise.",
    avatar: avatar6,
  },
];

export default function Testimonials() {
  return (
    <section id="avis-client" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ce que disent nos <span className="text-[#E30613]">Clients</span>
          </h2>
        </div>

        {/* Wrapper */}
        <div className="relative h-[900px] overflow-hidden">

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10 animate-vertical-scroll">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className={`
                  relative rounded-2xl
                  ${index % 3 === 0 ? "rotate-1" : ""}
                  ${index % 3 === 1 ? "-rotate-2 md:mt-10" : ""}
                  ${index % 3 === 2 ? "rotate-2" : ""}
                `}
              >
                <div className="rounded-2xl bg-neutral-900 p-6 h-full flex flex-col justify-between">
                  <p className="text-gray-200 mb-6">
                    “{item.text}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Fade effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </div>
    </section>
  );
}
