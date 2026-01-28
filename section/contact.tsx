import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
    >
      <Image
        src="/contactimg.jpg"
        alt="contact background"
        fill
        priority
        className="object-cover"
        />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div>
          <h2 className="text-center text-4xl uppercase tracking-widest mb-3 font-serif font-bold">
            Inscrivez-vous à notre newsletter
          </h2>

          <p className="text-gray-400 mb-8 text-center">
            Recevez les dernières informations, astuces et tendances en marketing
            digital directement dans votre boîte de réception.
          </p>
        </div>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">Téléphone</label>
              <input
                type="tel"
                maxLength={8}
                placeholder="Téléphone"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm mb-2">Sujet</label>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={4}
              maxLength={300}
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black/70 px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-white hover:text-black transition rounded-lg"
            >
              Demandez votre devis
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
