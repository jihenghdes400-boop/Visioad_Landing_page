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
    rating: 5,
  },
  {
    name: "David Carter",
    role: "Responsable de la stratégie",
    text: "De la conception au marketing, l'expertise et la stratégie de VISIOAD ont renforcé notre succès numérique.",
    avatar: avatar2,
    rating: 4,
  },
  {
    name: "Sophie Lambert",
    role: "Directeur du marketing",
    text: "VISIOAD a conçu notre site avec un design soigné et une expérience optimale, renforçant notre présence en ligne.",
    avatar: avatar3,
    rating: 5,
  },
  {
    name: "Sophia Miller",
    role: "Responsable Marketing de Croissance",
    text: "L'équipe de VISIOAD a aidé à élever nos efforts marketing avec des idées innovantes.",
    avatar: avatar4,
    rating: 5,
  },
  {
    name: "Liam Matthews",
    role: "Stratège en Contenu",
    text: "Travailler avec VISIOAD a révolutionné notre stratégie de contenu.",
    avatar: avatar5,
    rating: 4,
  },
  {
    name: "Ethan Parker",
    role: "PDG",
    text: "Collaborer avec VISIOAD a été une décision clé pour notre entreprise.",
    avatar: avatar6,
    rating: 5,
  },
];
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < count ? "#FACC15" : "none"}
          stroke="#FACC15"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.11
               5.518.442c.499.04.701.663.321.988l-4.204 3.602
               1.285 5.385a.562.562 0 0 1-.84.61L12 18.354
               7.275 21.636a.562.562 0 0 1-.84-.61l1.285-5.385
               -4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442
               2.125-5.11Z"
          />
        </svg>
      ))}
    </div>
  );
}
export default function Testimonials() {
  return (
    <section id="avis-client" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ce que disent nos <span className="text-[#E30613]">Clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {testimonials.map((item, index) => (
            <div key={index} className="h-full">
              <div className="
                h-full min-h-[240px]
                rounded-2xl bg-neutral-900 p-6
                flex flex-col justify-between
                transition-transform duration-300
                hover:scale-[1.02]
              ">


                <Stars count={item.rating ?? 5} />

                <p className="text-gray-200 mb-6">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
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
      </div>
    </section>
  );
}
