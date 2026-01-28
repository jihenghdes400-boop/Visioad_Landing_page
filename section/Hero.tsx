import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full ">
      <Image
        src="/hero.png"
        alt="Digital marketing hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 gap-6">

        <h1 className="text-white font-bold tracking-tight
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Notre marketing digital génère
          <br className="hidden sm:block" />
          des prospects pour votre entreprise
        </h1>

        <p className="max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg">
          Nous optimisons votre marketing digital pour de meilleurs résultats,
          en vous faisant gagner du temps et de l’argent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="">
            
           
          </button>
          <Link
             href="/visioad-video.mp4"
            className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-white hover:text-black transition"
            >
              Voir une vidéo rapide
          </Link>
        </div>
      </div>
    </section>
  );
}
