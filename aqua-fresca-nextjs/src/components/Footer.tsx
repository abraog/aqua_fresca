'use client';

import Link from 'next/link';
import { FormEvent } from 'react';

export default function Footer() {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-blue-400">Aqua Fresca</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Providing the purest spring water from the mountains of
              Timor-Leste since 2018.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-gray-800 rounded-full flex justify-center items-center hover:bg-blue-600 hover:scale-110 transition-all text-sm font-semibold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-800 rounded-full flex justify-center items-center hover:bg-blue-600 hover:scale-110 transition-all text-sm font-semibold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-800 rounded-full flex justify-center items-center hover:bg-blue-600 hover:scale-110 transition-all text-sm font-semibold"
                aria-label="Twitter"
              >
                TW
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-800 rounded-full flex justify-center items-center hover:bg-blue-600 hover:scale-110 transition-all text-sm font-semibold"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Products
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Our Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-blue-400">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#products" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → 500ml Bottle
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → 1.5L Bottle
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → 5L Container
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Business Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-blue-400">Newsletter</h3>
            <p className="mb-5 text-gray-300 text-sm leading-relaxed">
              Subscribe to receive updates and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold uppercase text-sm hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center space-y-2">
          <p className="text-gray-400">&copy; 2025 Aqua Fresca. All Rights Reserved.</p>
          <p className="text-sm text-gray-500">
            Developed by Abrao Glorito |{' '}
            <a
              href="https://github.com/abraog/aqua_fresca.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
