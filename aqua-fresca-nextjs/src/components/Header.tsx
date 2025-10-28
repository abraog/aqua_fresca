'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Image
              src="/image/logo.jpeg"
              alt="Aqua Fresca Logo"
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#products" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="#process" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <ul className="py-4 space-y-2">
              <li>
                <Link
                  href="#home"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
