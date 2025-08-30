// components/Navbar.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
   
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-10 py-4 
bg-[#0a0f24]/90 bg-clip-padding backdrop-filter backdrop-blur-md 
shadow-lg border-b border-gray-700 sticky top-0 z-50"
    >
      <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
        E Summit 2025
      </div>
      <ul className="flex space-x-8 text-gray-100 font-medium">
        {["about","events","speaker","team","sponsors"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href={`/${item}`} 
              className="relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}

        <motion.li whileHover={{ scale: 1.1 }}>
          <Link 
            href="/register"
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition shadow-md"
          >
            Register
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}
