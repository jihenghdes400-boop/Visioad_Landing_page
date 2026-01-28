"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full bg-black/100 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        <div className="text-white text-xl font-bold">
          <Image src="/logo1.png" alt="logo" width={150} height={80} />
        </div>
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li>
            <Link href="#Services" className="hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="#stat" className="hover:text-white transition">
              Statistiques
            </Link>
          </li>
          <li>
            <Link href="#avis-client" className="hover:text-white transition">
              Avis
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
        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            commencer
          </button>
        </div>
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-white" >
          <img src="/menu.svg" alt="iCon" className="h-5 w-5 md:hidden" />   {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )
            : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 text-center">
          <ul className="flex flex-col gap-6 text-gray-300">
            <li>
              <Link href="#Services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#stat" className="hover:text-white transition">
                Statistiques
              </Link>
            </li>
            <li>
              <Link href="#avis-client" className="hover:text-white transition">
                Avis
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
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
              commencer
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
