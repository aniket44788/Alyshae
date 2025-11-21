import React, { useState } from "react";
import alyshaenamelogo from "../assets/images/alyshaenamelogo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP
} from "react-icons/fa";


function Footer() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <footer className="w-full bg-white mt-2">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-8 sm:py-6">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {/* About Section */}
            <div className="text-left">
              <img
                src={alyshaenamelogo}
                alt="Alyshae"
                className="mb-4 w-[107px] h-[36px] object-contain"
              />
              <p className="text-sm text-gray-700 mb-2">Near Ibrahimpur Railway Station</p>
              <p className="text-sm text-gray-700 mb-2">Vijayapura - 586109</p>
              <p className="text-sm text-gray-700 mb-0">Karnataka - IN</p>
              <p className="mt-3 mb-2 text-sm text-gray-900 font-medium">
                Phone: <span className="font-normal">(0) 94808 90906</span>
              </p>
              <p className="text-sm text-gray-900 font-medium">
                Email:
                <a href="mailto:info@alyshaé.com" className="ml-1 hover:text-red-500">
                  info@alyshaé.com
                </a>
              </p>
            </div>

            {/* Empty Column */}
            <div className="hidden md:block"></div>

            {/* Information */}
            <div className="text-left md:text-left w-full sm:w-auto">
              {/* Header + Arrow */}
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className="w-full flex items-center justify-between border-b border-gray-200"
              >
                <h4 className="text-[15px] font-semibold uppercase mb-1">
                  Informations
                </h4>
                {/* Arrow visible only on mobile */}
                <span
                  className="md:hidden text-xl transition-transform duration-300"
                  style={{ transform: infoOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  {infoOpen ? "˄" : "˅"}
                </span>
              </button>

              {/* Dropdown list */}
              <ul
                className={`
              overflow-hidden 
              transition-all 
              duration-300
              ${infoOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"}
            `}
              >
                {[
                  ["About us", "/About_Us"],
                  ["Contact us", "/Contact_Us"],
                  ["Privacy policy", "/Privacy_Policy"],
                  ["Terms & condition", "/Terms_Condition"],
                  ["Return & refund", "/Return_Refund"],
                ].map(([text, link]) => (
                  <li key={text} className="py-1">
                    <a
                      href={link}
                      className="text-gray-800 hover:text-red-500 text-sm transition block"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="text-left">
              <h4 className="text-[15px] font-semibold uppercase mb-3">Stay Connected</h4>
              <ul className="space-y-2">
                <li>
                  <a className="flex items-center gap-2 text-sm text-gray-800 hover:text-red-500 transition">
                    <FaFacebookF size={18} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2 text-sm text-gray-800 hover:text-red-500 transition">
                    <FaTwitter size={18} />
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2 text-sm text-gray-800 hover:text-red-500 transition">
                    <FaPinterestP size={18} />
                    Pinterest
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2 text-sm text-gray-800 hover:text-red-500 transition">
                    <FaInstagram size={18} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2 text-sm text-gray-800 hover:text-red-500 transition">
                    <FaYoutube size={18} />
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 py-4 mt-3 text-center">
          <p className="text-sm text-gray-700">
            © 2025 Alyshaé. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer