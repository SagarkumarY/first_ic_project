import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import hamburger (Menu) and close (X) icons from Lucide

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl">Keeper</h1>

        {/* Hamburger Icon for mobile */}
        <button
          className="text-white text-3xl lg:hidden" // Show only on small screens
          onClick={toggleMenu}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex flex-grow justify-end space-x-6 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <a href="#" className="text-white font-medium hover:underline">
            Home
          </a>
          <a href="#" className="text-white font-medium hover:underline">
            About
          </a>
          <a href="#" className="text-white font-medium hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
