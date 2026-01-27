"use client"
const stats = [
  {
    value: "15k",
    label: "Portée mensuelle des réseaux",
    color: "text-blue-500",
  },
  {
    value: "+900",
    label: "Projets photo professionnels",
    color: "text-gray-400",
  },
  {
    value: "80%",
    label: "Taux de satisfaction des clients",
    color: "text-red-500",
  },
  {
    value: "+500",
    label: "Portée et impact de la campagne",
    color: "text-amber-500",
  },
  {
    value: "+100",
    label: "Stagiaires développés et formés",
    color: "text-purple-500",
  },
  {
    value: "2022",
    label: "Dans l’industrie depuis",
    color: "text-gray-300",
  },
];

export default function StatsSection() {
  return (
    <section id="stat" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Prouvé par les <span className="text-red-500">stats</span>
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-white">
                {stat.value}
              </span>
              <p className="text-sm text-gray-400 mt-2 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
