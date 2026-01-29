import Image from "next/image";
import ScrollReveal from "@/section/ScrollReveal";
const services = [
  {
    title: "degital marketing",
    description:
      "Boostez votre présence en ligne et engagez votre audience.",
  },
  {
    title: "Création de contenu et production multimédia",
    description:
      "Un contenu percutant pour raconter votre marque.",
  },
  {
    title: "Services de design",
    description:
      "Des designs innovants et fonctionnels pour sublimer votre marque.",
  },
  {
    title: "Développement web et application",
    description:
      "Des sites et applications responsives qui génèrent des résultats.",
  },
    {
    title: "Ventes et gestion de comptes",
    description:
      "Croissance grâce à des ventes expertes et une gestion client efficace.",
  },
    {
    title: "Surveillance CCTV",
    description:
      "Sécurité 24/7 avec CCTV et alertes en temps réel.",
  },
];

export default function Services() {
  return (
      <section id="Services" className="relative w-full bg-black py-24 text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 max-w-xl">
              <h2 className="text-sm uppercase tracking-widest text-gray-400">
                Partez à la découverte de
              </h2>
              <h3 className="mt-4 text-4xl font-bold leading-tight">
                Nos solutions
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
            <div className="relative order-1 h-[300px] overflow-hidden rounded-3xl lg:order-2 lg:h-[420px]">
              <Image
                src="/servimg.jpg"
                alt="Our services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-8 left-8 max-w-sm">
                <p className="mt-2 text-sm text-gray-200">
                  Chez VisioAd, nous offrons des services complets pour booster la portée de votre marque, de la stratégie marketing à la création de contenu et production média, pour stimuler croissance et engagement.
                </p>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 grid gap-7 sm:grid-cols-2 lg:order-1">
                {services.map((service, index) => (
                  <ScrollReveal>
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm transition hover:border-white/30"
                    >
                      <ScrollReveal>
                        <h4 className="text-sm font-semibold">
                          {service.title}
                        </h4>
                      </ScrollReveal>
                      <ScrollReveal>
                        <p className="mt-2 text-sm text-gray-400">
                          {service.description}
                        </p>
                      </ScrollReveal>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
  );
}
