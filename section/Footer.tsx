import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/section/ScrollReveal";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <ScrollReveal>
        <div className="space-y-4">
          <Image src="/logo1.png" alt="Visioad Logo" width={150} height={100} />
          <p className="text-sm text-gray-400">
            Nous aidons les entreprises à grandir grâce
            au marketing  <br />digital et aux solutions web modernes.
          </p>
        </div>
        </ScrollReveal>
        <div className="">
          <ScrollReveal>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
          </ScrollReveal>
          <ul className="space-y-2 text-sm">
            <ScrollReveal>
              <li>
                <Link href="#Services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li>
                <Link href="#stat" className="hover:text-white transition">
                  stat
                </Link>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li>
                <Link href="#avis-client" className="hover:text-white transition">
                  avis-client
                </Link>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li>
                <Link href="#Question" className="hover:text-white transition">
                  Question
                </Link>
              </li>
            </ScrollReveal>
          </ul>
        </div>
        <div>
          <ScrollReveal>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
          </ScrollReveal>
          <ul className="space-y-2 text-sm">
            <ScrollReveal>
              <li>🌍 Ibrahim Center Building,<br />
              Habib Bourguiba Avenue,<br />
              Sousse 4000</li>
            </ScrollReveal>
            <ScrollReveal>
              <li>📞 +216 31 439 350</li>
            </ScrollReveal>
            <ScrollReveal>
            <li>💬 Info@visioad.com </li>
            </ScrollReveal>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Visioad. Tous droits réservés.
      </div>
    </footer>
  );
}
