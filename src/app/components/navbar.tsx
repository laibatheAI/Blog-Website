'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to toggle the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed bg-blue-500 flex lg:justify-around justify-between items-center w-full h-14 px-4 z-10">
      {/* Heading */}
      <div>
        <h1
          className="text-white font-bold text-3xl"
          style={{ textShadow: "3px 3px 3px black" }}
        >
          Inkspire
        </h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden">
        <button
          className="text-2xl text-white"
          onClick={toggleMenu} // Toggle menu on click
        >
          &#9776;
        </button>
      </div>

      {/* Navbar Links for Large Screens */}
      <nav
        className="hidden lg:flex gap-5 text-white text-lg font-semibold"
        style={{ textShadow: "3px 3px 3px black" }}
      >
        <Link href="/" className="hover:text-blue-800">
          Home
        </Link>

        <Link href="/blog" className="hover:text-blue-800">
          Blogs
        </Link>

        <Link href="/about" className="hover:text-blue-800">
          About
        </Link>

        <Link href="/contact" className="hover:text-blue-800">
          Contact Us
        </Link>
      </nav>

      {/* Dropdown/Slider for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-14 left-0 w-full bg-blue-500 text-white text-lg font-semibold transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center gap-5 py-4">
          <Link href="/" className="hover:text-blue-800">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-800">
            Blogs
          </Link>
          <Link href="/about" className="hover:text-blue-800">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-800">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

