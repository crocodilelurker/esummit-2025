// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.png" alt="E-Summit Logo" width={32} height={32} />
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              E-SUMMIT 2025
            </h1>
          </div>
          <p className="text-sm leading-relaxed">
            India's premier entrepreneurship summit bringing together 
            innovators, investors, and industry leaders.
          </p>
        </div>
        <div>
          <h2 className="text-cyan-400 font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="about" className="hover:text-white">About</Link></li>
            <li><Link href="events" className="hover:text-white">Events</Link></li>
            <li><Link href="speaker" className="hover:text-white">Speakers</Link></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h2 className="text-cyan-400 font-semibold mb-4">Contact</h2>
          <p className="text-sm">IIIT Bhagalpur</p>
          <p className="text-sm">Sabour, Bhagalpur - 813210</p>
          <p className="text-sm mb-2">Bihar, India</p>
          <Link 
            href="mailto:contact@esummit2025.com" 
            className="text-cyan-400 hover:underline"
          >
            contact@esummit2025.com
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 E-Summit IIIT Bhagalpur. All rights reserved.
      </div>
    </footer>
  );
}
