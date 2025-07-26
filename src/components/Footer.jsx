import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0f0f1a] text-gray-300 py-10 mt-20 px-6 md:px-12 rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-2">
            Raaga Sangeet Academy
          </h2>
          <p className="text-sm">
            Where tradition meets modern sound. Unleash your voice, refine your
            rhythm, and master your music.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Home", path: "/" },
              { name: "Home", path: "/" },
              // "Courses",
              // "Plans",
              // "About",
              // "Contact",
            ].map((item) => (
              <li
                onClick={() => {
                  navigate(item.path);
                }}
                key={item}
                className="hover:text-yellow-300 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">📧 raagasangeet@gmail.com</p>
          <p className="text-sm">📞 +91-9876543210</p>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Raaga Sangeet Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
