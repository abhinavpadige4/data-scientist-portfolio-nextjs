import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-xl font-bold text-primary-600">DataPortfolio</span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                About
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600">
                  About
                </Link>
                <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600">
                  Projects
                </Link>
                <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600">
                  Blog
                </Link>
                <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-primary-600">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Data Scientist Portfolio. All rights reserved.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14l3-3 3 3M3 20h18" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 8l-3 3m4 0-3-3M3 20h18a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}