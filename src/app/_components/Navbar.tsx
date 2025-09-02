"use client";
<<<<<<< Updated upstream

export default function Navbar ()
{
    return (
        <header>
            Navbar
            {/* we Define a Custom Navbar for Every Page if we feel the need for a different 
            root layout we change it later */}
        </header>
    )
}
=======

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.804 8.207 11.387 0.599 0.111 0.793-0.261 0.793-0.577v-2.234c-3.338 0.726-4.033-1.416-4.033-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.087-0.731 0.084-0.716 0.084-0.716 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.493 0.998 0.108-0.776 0.418-1.305 0.762-1.604-2.665-0.305-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.989-0.399 3.029-0.399 1.042 0 2.073 0.133 3.029 0.399 2.295-1.552 3.302-1.23 3.302-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.823 1.102 0.823 2.222v3.293c0 0.319 0.192 0.694 0.801 0.576 4.765-1.589 8.199-6.091 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-8.418c0-7.886-8.922-7.593-10.04-3.712v-1.87z" />
  </svg>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [{ name: "Interview", href: "/interview" }];

  return (
    <>
      <header className="relative z-30 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            TutorAI
          </Link>
        </h1>

        <nav className="hidden lg:flex flex-1 items-center justify-between text-white text-lg">
          <ul className="flex-1 flex justify-center gap-8 text-xl md:text-2xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative group text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
                </Link>
              </li>
            ))}

            <li>
              <Link href="/login">
                <button className="relative group text-white hover:text-gray-300 transition-colors duration-300 text-xl md:text-2xl">
                  Login
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <button className="relative group text-white hover:text-gray-300 transition-colors duration-300 text-xl md:text-2xl">
                  Signup
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 group-hover:w-full w-0"></span>
                </button>
              </Link>
            </li>
          </ul>

          {/* Social Icons for Desktop */}
          <div className="flex items-center gap-6 pl-8">
            <a
              href="https://github.com/Harsh-DevOps117?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-kharwar-093919282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 w-64 md:w-80 h-full bg-gray-900 text-white p-8 transform transition-transform duration-300 ease-in-out lg:hidden shadow-xl z-50 rounded-l-xl
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
          </button>
        </div>
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block text-2xl font-semibold hover:text-gray-400 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/login">
              <button
                className="group flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 text-lg font-medium shadow-md w-full"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <button
                className="group flex items-center justify-center bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300 text-lg font-medium shadow-md w-full"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
>>>>>>> Stashed changes
