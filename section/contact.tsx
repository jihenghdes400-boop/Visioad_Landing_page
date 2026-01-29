import Image from "next/image";
import ScrollReveal from "@/section/ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/contactimg.jpg"
        alt="contact background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6">
        {/* Title container */}
        <div className="max-w-5xl mx-auto mb-12">
          <ScrollReveal>
            <h2 className="text-center text-4xl uppercase tracking-widest mb-3 font-serif font-bold">
              Inscrivez-vous à notre newsletter
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-gray-400 text-center">
              Recevez les dernières informations, astuces et tendances en marketing
              digital directement dans votre boîte de réception.
            </p>
          </ScrollReveal>
        </div>

        {/* FORM — FULL WIDTH */}
        <form className="space-y-6 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <ScrollReveal className="w-full">
              <div>
                <label className="block text-sm mb-2">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="w-full">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <ScrollReveal className="w-full">
              <div>
                <label className="block text-sm mb-2">Téléphone</label>
                <input
                  type="tel"
                  maxLength={8}
                  placeholder="Téléphone"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="w-full">
              <div>
                <label className="block text-sm mb-2">Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                maxLength={300}
                placeholder="Votre message..."
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black/70 px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-white hover:text-black transition rounded-lg"
              >
                Demandez votre devis
              </button>
            </div>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}

