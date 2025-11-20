// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import alyshaenamelogo from "../assets/images/alyshaenamelogo.svg";
import democollectionbnr1 from "../assets/images/collection-banner/demo10-collection-bnr1.png";
import ring from "../assets/images/product-images/the_vow_ring.jpg"
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="header relative flex flex-col items-center px-6 py-2 bg-transparent backdrop-blur-sm z-50">

            {/* Top Row */}
            <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4">

                {/* Hamburger (Mobile Only) */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-black focus:outline-none"
                >
                    <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                </button>

                {/* Logo → ALWAYS CENTERED */}
                <div className="logo mx-auto">
                    <Link to="/">
                        <img
                            src={alyshaenamelogo}
                            alt="Alyshae"
                            className="h-11 w-auto max-w-[100px] mx-auto block"
                        />
                    </Link>
                </div>

                {/* Fake spacer for alignment */}
                <div className="w-6 h-6 md:hidden"></div>
            </div>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex flex-wrap justify-center items-center gap-x-8 mt-2">
                    <li>
                        <Link className="text-black text-[13px] uppercase tracking-wide px-[15px] hover:text-[#f77575]" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-black text-[13px] uppercase tracking-wide px-[15px] hover:text-[#f77575]" to="/Creation">
                            The Creation
                        </Link>
                    </li>
                    <li>
                        <Link className="text-black text-[13px] uppercase tracking-wide px-[15px] hover:text-[#f77575]" to="/Origin">
                            The Origin
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Slide-Down Menu */}
            {isMobileMenuOpen && (
                <nav className="w-full md:hidden mt-3 bg-white shadow-md border-t">
                    <ul className="flex flex-col text-left px-4 py-3 space-y-3">
                        <li>
                            <Link
                                className="block text-black text-[14px] uppercase tracking-wide py-2 hover:text-[#f77575]"
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-black text-[14px] uppercase tracking-wide py-2 hover:text-[#f77575]"
                                to="/Creation"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                The Creation
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-black text-[14px] uppercase tracking-wide py-2 hover:text-[#f77575]"
                                to="/Origin"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                The Origin
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Banner Section */}
            <div className="mt-2 py-0 w-full">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="relative overflow-hidden group">

                        {/* Image */}
                        <img
                            src={democollectionbnr1}
                            alt=""
                            className="w-full max-w-[1160px] h-auto mx-auto"
                        />

                        {/* Text box — bottom overlay on desktop, below image on mobile */}
                        <div
                            className="
                                bg-white p-5 text-left shadow-sm transition-all
                                static mt-3
                                lg:absolute lg:bottom-5 lg:left-5 lg:mt-0
                            "
                        >
                            <h3 className="text-[20px] font-semibold mb-2 text-black leading-snug">
                                The Creation Awaits.
                            </h3>

                            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                                Forged in purity. Defined by truth.<br />
                                A symbol of integrity — yours to behold.
                            </p>

                            <Link
                                to="/Creation"
                                className="
                                    inline-block px-4 py-2 
                                    bg-black text-white text-[13px] uppercase tracking-wide 
                                    border border-black 
                                    transition-all duration-300 
                                    hover:bg-transparent hover:text-black
                                "
                            >
                                Reveal It
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="max-w-[1200px] mx-auto ">
                    <div className="text-center mb-8">
                        <h2
                            className="
  text-black leading-snug tracking-[0.2px]
  text-[16px]        /* mobile */
  sm:text-[18px]     /* small screens */
  md:text-[20px]     /* medium screens */
  lg:text-[22px]     /* large screens */
"
                        >
                            The Creation. Inspired by Emotion.
                        </h2>
                    </div>
                </div>
            </div>


            <div className="py-1">
                <div className="max-w-[1200px] mx-auto px-2">
                    <div className="flex flex-wrap -mx-2">

                        {/* Banner Item */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">

                                {/* Image */}
                                <div className="w-full overflow-hidden rounded">
                                    <img
                                        src={ring}
                                        alt="The Vow Ring"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="w-full text-center bg-white py-6 px-4 mt-4">

                                    {/* Title */}
                                    <h3 className="
                            text-[18px]
                            sm:text-[20px]
                            md:text-[22px]
                            lg:text-[24px]
                            font-semibold 
                            text-black 
                            tracking-[0.2px]
                            mb-2
                        ">
                                        The Vow Ring
                                    </h3>

                                    {/* Subtitle */}
                                    <span className="block text-[12px] sm:text-[13px] text-gray-700 mb-2">
                                        Limited Edition 999 Only
                                    </span>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed mb-4">
                                        A promise sealed in tungsten, bound by NFT.
                                    </p>

                                    {/* Button */}
                                    <a
                                        href="/TheEdition"
                                        className="
                                inline-block
                                px-4 py-2
                                bg-black text-white
                                uppercase text-[12px] tracking-wide
                                border border-black
                                transition-all duration-300
                                hover:bg-transparent hover:text-black
                            "
                                    >
                                        Own this creation
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <footer className="bg-white mt-2">
                <div className="w-full max-w-[1200px] mx-auto px-4">

                    {/* Top Section */}
                    <div className="border-t border-gray-200 py-1">

                        {/* Grid Layout */}
                        <div
                            className="
                    grid 
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-8
                    text-left   /* 👈 IMPORTANT */
                "
                        >

                            {/* About Section */}
                            <div className="text-left">
                                <img
                                    src={alyshaenamelogo}
                                    alt="Alyshae"
                                    className="mb-4 w-[140px]"
                                />

                                <p className="text-sm text-gray-700">Near Ibrahimpur Railway Station</p>
                                <p className="text-sm text-gray-700">Vijayapura - 586109</p>
                                <p className="text-sm text-gray-700">Karnataka - IN</p>

                                <p className="mt-3 text-sm text-gray-900 font-medium">
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
                            <div className="text-left">
                                <h4 className="text-[15px] font-semibold uppercase mb-3">Informations</h4>

                                <ul className="space-y-2">
                                    {[
                                        ["About us", "/About_Us"],
                                        ["Contact us", "/Contact_Us"],
                                        ["Privacy policy", "/Privacy_Policy"],
                                        ["Terms & condition", "/Terms_Condition"],
                                        ["Return & refund", "/Return_Refund"],
                                    ].map(([text, link]) => (
                                        <li key={text}>
                                            <a
                                                href={link}
                                                className="text-gray-800 hover:text-red-500 text-sm transition"
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
                                    {["Facebook", "Twitter", "Pinterest", "Instagram", "Youtube"].map(
                                        (platform) => (
                                            <li key={platform}>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-2 text-sm hover:text-red-500"
                                                >
                                                    <i className={`icon icon-${platform.toLowerCase()}`}></i>
                                                    {platform}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-300 py-4 text-center">
                        <p className="text-sm text-gray-700">
                            © 2025 Alyshaé. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </footer>




        </header>
    );
}
