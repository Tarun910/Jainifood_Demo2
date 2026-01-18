
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { name: 'Menu', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-beige/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">eco</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-primary uppercase">Jaini Food</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-neutral-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Book a Table
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex p-2 text-neutral-charcoal"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${isActive(link.path) ? 'text-primary' : 'text-neutral-charcoal'}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
