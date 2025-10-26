
import React, { useState } from 'react';
import { Page } from '../App';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    navigate(page);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-extrabold text-teal-700 cursor-pointer" onClick={() => handleNavClick('Home')}>
          IYHEA
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }}
              className={`text-gray-700 hover:text-teal-600 transition-colors duration-300 pb-1 ${
                currentPage === link.name ? 'border-b-2 border-orange-500 font-semibold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
            <button onClick={() => handleNavClick('Contact')} className="bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                Apply Now
            </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }}
                className={`text-gray-700 hover:text-teal-600 ${currentPage === link.name ? 'font-bold text-teal-600' : ''}`}
              >
                {link.name}
              </a>
            ))}
             <button onClick={() => handleNavClick('Contact')} className="bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-all duration-300">
                Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;