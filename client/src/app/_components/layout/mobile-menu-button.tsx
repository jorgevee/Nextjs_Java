"use client";

import React, { useState } from "react";

const links = [
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "About Us",
    href: "about",
  },
];

const HamburgerSVG = () => (
  <svg
    width="24" // Adjusted size for better visibility
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MobileMenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="p-2 rounded-md focus:outline-none" // Added focus styles
      >
        <HamburgerSVG />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 rounded-b-md">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-gray-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenuButton;
