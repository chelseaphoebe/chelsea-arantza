import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const linkClass = (path, extra = "") =>
    pathname === path
      ? `text-black font-semibold ${extra}`
      : `text-gray-400 hover:text-gray-600 ${extra}`;

  // Path baru untuk resume (tanpa folder public)
  const resumePath = "/CV Chelsea Arantza Phoebe [August 2025].pdf";

  return (
    <nav className="max-w-4xl w-full mx-auto px-8 py-12 flex items-center justify-between relative">
      {/* Logo */}
      <Link to="/" className="text-md font-medium tracking-wider">
        CHELSEA ARANTZA
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/" className={linkClass("/e")}>
          HOME
        </Link>
        <Link to="/about" className={linkClass("/about")}>
          ABOUT
        </Link>
        <Link to="/contact" className={linkClass("/contact")}>
          CONTACT
        </Link>
        <a
          href={resumePath}
          download="ChelseaCV-202508.pdf"
          className="text-gray-400 hover:text-gray-600"
        >
          Resumé
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t flex flex-col items-start px-6 py-4 space-y-4 text-sm font-medium md:hidden">
          <Link
            to="/"
            className={linkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={linkClass("/about")}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={linkClass("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
          <a
            href={resumePath}
            download="ChelseaCV-202508.pdf"
            className="text-gray-400 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Resumé
          </a>
        </div>
      )}
    </nav>
  );
}
