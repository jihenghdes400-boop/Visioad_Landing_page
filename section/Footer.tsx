import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <Image src="/logo1.png" alt="Visioad Logo" width={150} height={100} />
          <p className="text-sm text-gray-400">
            Nous aidons les entreprises à grandir grâce
            au marketing digital et aux solutions web modernes.
          </p>
        </div>
        <div className="">
          <h4 className="text-white font-semibold mb-4">Entreprise</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#Services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#stat" className="hover:text-white transition">
                stat
              </Link>
            </li>
            <li>
              <Link href="#avis-client" className="hover:text-white transition">
                avis-client
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#Question" className="hover:text-white transition">
                Question
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Tunisie</li>
            <li>📞 +216 31 439 350</li>
            <li>✉️ contact@visioad.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Visioad. Tous droits réservés.
      </div>
    </footer>
  );
}
