"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment savoir quel service est adapté à mon entreprise ?",
    answer:
      "Nous offrons une consultation gratuite pour aider à identifier les meilleurs services pour votre entreprise. Lors de la consultation, nous évaluons vos besoins et recommandons une approche personnalisée qui correspond à vos objectifs.",
  },
  {
    question:
      "Comment vos services de création de contenu aident-ils à améliorer la visibilité de ma marque ?",
    answer:
      "Nos services de création de contenu améliorent la visibilité de votre marque en produisant des médias de haute qualité et engageants qui résonnent avec votre public et renforcent votre présence en ligne.",
  },
  {
    question: "Comment fonctionne votre service de surveillance CCTV ?",
    answer:
      "Notre service de surveillance CCTV offre une surveillance 24h/24 et 7j/7 avec des alertes en temps réel et un accès à distance, garantissant la sécurité de votre entreprise à tout moment et en tout lieu.",
  },
  {
    question:
      "Comment VISIOAD s'assure-t-il que mes campagnes marketing sont efficaces ?",
    answer:
      "VISIOAD garantit l'efficacité des campagnes marketing grâce à des stratégies basées sur les données, un suivi continu des performances et une optimisation régulière pour maximiser les résultats et atteindre les objectifs commerciaux.",
  },
  {
    question:
      "VISIOAD peut-il aider à améliorer la réputation en ligne de mon entreprise ?",
    answer:
      "Oui, VISIOAD peut aider à améliorer la réputation en ligne de votre entreprise grâce à la création de contenu stratégique, la gestion des avis, et l'optimisation de votre présence en ligne pour renforcer la crédibilité et la confiance des clients.",
  },
    {
    question:
      "Quels sont les tarifs des services de VISIOAD ?",
    answer:
        "Les tarifs des services de VISIOAD varient en fonction des besoins spécifiques de votre entreprise. Pour obtenir un devis personnalisé, veuillez nous contacter directement.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="Question" className="bg-black dark:bg-black py-24 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-16 text-center">
          <span className="block text-white dark:text-white">
            QUESTIONS FRÉQUEMMENT
          </span>
          <span className="block text-red-600">POSÉES</span>
        </h2>

        {/* FAQ items */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {faqs.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white">
                  {item.question}
                </h3>

                <span
                  className={`transform transition-transform duration-300 text-gray-500
                    ${openIndex === index ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out
                  ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <p className="overflow-hidden text-gray-400 dark:text-gray-500 max-w-3xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
