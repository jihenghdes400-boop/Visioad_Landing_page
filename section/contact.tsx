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
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <h2 className="text-center text-4xl uppercase tracking-widest mb-3 font-serif font-bold">
            Devis gratuit
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-gray-400 mb-12 text-center">
            Nous sommes impatients de vous rencontrer ! Remplissez le formulaire
            ci-dessous et transformons votre vision en réalité.
          </p>
        </ScrollReveal>

        {/* Form */}
        <form className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div>
                <label className="block text-sm mb-2">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div>
                <label className="block text-sm mb-2">Téléphone</label>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <label className="block text-sm mb-2">Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Message */}
          <ScrollReveal>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Votre message"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
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
