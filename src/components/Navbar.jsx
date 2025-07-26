import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "PopularSection", path: "/popular" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact-us" },
  ];

  return (
    <nav className="flex px-6 md:px-12 pt-10 justify-between items-center mb-16">
      <div className="text-3xl font-extrabold tracking-wide text-yellow-400">
        <Link to="/">Raaga Sangeet Academy</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm md:text-base">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer transition duration-200 hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle button (logic can be extended later) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-300 text-2xl"
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
