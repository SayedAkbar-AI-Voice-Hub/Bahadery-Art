
import React, { useState } from 'react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Collection', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Biography', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded overflow-hidden shadow-sm bg-white border border-stone-100 flex items-center justify-center transition-transform group-hover:scale-105">
             <img
               src={LOGO_URL}
               alt="Bahadery Art Gallery Logo"
               className="w-full h-full object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight serif uppercase text-stone-900 leading-none">Bahadery</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold">Art Gallery</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest text-stone-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-stone-900 transition-colors py-2 border-b-2 border-transparent hover:border-stone-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-stone-900 text-white rounded-none hover:bg-stone-800 transition-all shadow-md"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-stone-200 shadow-xl py-8 px-4 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-stone-800 border-b border-stone-50 pb-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
