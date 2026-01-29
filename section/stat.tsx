"use client";
import ScrollReveal from "@/section/ScrollReveal";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "15k", label: "Portée mensuelle des réseaux" },
  { value: "+900", label: "Projets photo professionnels" },
  { value: "80%", label: "Taux de satisfaction des clients" },
  { value: "+500", label: "Portée et impact de la campagne" },
  { value: "+100", label: "Stagiaires développés et formés" },
  { value: "2022", label: "Dans l’industrie depuis" },
];

// 👉 helper to extract number + suffix
const parseValue = (value: string) => {
  const number = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  return { number, suffix };
};

function Counter({ value }: { value: string }) {
  const { number, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1500;
        const stepTime = 20;
        const increment = number / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <span ref={ref} className="text-2xl font-semibold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
      <section id="stat" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              Prouvé par les <span className="text-red-500">stats</span>
            </h2>
          </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
              {stats.map((stat, index) => (
                <ScrollReveal>
                  <div key={index} className="flex flex-col items-center">
                    <Counter value={stat.value} />
                    <p className="text-sm text-gray-400 mt-2 text-center">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

        </div>
      </section>

  );
}
