import React, { useState, useRef } from "react";

interface NavLink {
  name: string;
  href: string;
}

const aboutLinks: NavLink[] = [
  { name: "The Exchange Program", href: "#program" },
  { name: "Accommodation", href: "#accommodation" },
];

interface AboutDropdownProps {
  currentPage: string;
  handleNavClick: (page: string) => void;
}

export const AboutDropdown: React.FC<AboutDropdownProps> = ({
  currentPage,
  handleNavClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // delay closing so user can move mouse into dropdown
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms is a good sweet spot
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown button */}
      <button
        type="button"
        className={`inline-flex items-center text-gray-700 hover:text-teal-600 ${
          aboutLinks.some((l) => l.name === currentPage)
            ? "font-bold text-teal-600"
            : ""
        }`}
      >
        About
        <svg
          className={`ml-1 w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {aboutLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.name);
                setIsOpen(false);
              }}
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 ${
                currentPage === link.name ? "font-bold text-teal-600" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
