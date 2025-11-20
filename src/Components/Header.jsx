// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterestP
} from "react-icons/fa";



import alyshaenamelogo from "../assets/images/alyshaenamelogo.svg";
import democollectionbnr1 from "../assets/images/collection-banner/demo10-collection-bnr1.png";
import ring from "../assets/images/product-images/the_vow_ring.jpg"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <>
            {/* Sliding Content Wrapper */}
            <div
                className={`
                    transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-[250px]" : "translate-x-0"}
                `}
            >
                <header className="header relative flex flex-col items-center py-2 bg-transparent backdrop-blur-sm z-50">

                    {/* Top Row */}
                    <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4">

                        {/* Hamburger (Mobile Only) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-black focus:outline-none z-50"
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

                    {/* Banner Section */}
                    <div className="mt-2 w-full">
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
                                        bg-white text-left shadow-sm transition-all
                                        static mt-3
                                        lg:absolute lg:bottom-5 lg:left-5 lg:mt-0
                                        lg:pb-4 lg:pl-4
                                    "
                                >
                                    <h3 className="text-[20px] font-semibold mb-1 text-black leading-snug">
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

                    <div className="py-3">
                        <div className="max-w-[1200px] mx-auto ">
                            <div className="text-center ">
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
                        <div className="max-w-[1200px] mx-auto px-4">
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
                                        <div className="w-full text-center bg-white py-4 px-4 mt-4">

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

                    <footer className="w-full bg-white mt-2">
                        <div className="w-full max-w-[1200px] mx-auto px-4">

                            {/* Top Section */}
                            <div className=" py-1">

                                {/* Grid Layout */}
                                <div
                                    className="
                                        grid 
                                        grid-cols-1
                                        sm:grid-cols-2
                                        md:grid-cols-3
                                        lg:grid-cols-4
                                        gap-6
                                        text-left 
                                    "
                                >

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
                                    <div className="text-left md:text-left w-[204.8px] h-[213.5px]">

                                        {/* Header + Arrow */}
                                        <button
                                            onClick={() => setInfoOpen(!infoOpen)}
                                            className="w-full flex items-center justify-between md:cursor-auto md:pointer-events-none border-b border-gray-200"
                                        >
                                            <h4 className="text-[15px] font-semibold uppercase mb-3">
                                                Informations
                                            </h4>

                                            {/* Arrow visible only on mobile */}
                                            <span className="md:hidden text-xl transition-transform duration-300"
                                                style={{ transform: infoOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                                                {infoOpen ? "˄" : "˅"}
                                            </span>
                                        </button>

                                        {/* Dropdown list */}
                                        <ul
                                            className={`
    space-y-2 
    overflow-hidden 
    transition-all 
    duration-300
    w-[174.8px] 
    h-[117.5px]
    ${infoOpen ? "opacity-100" : "opacity-0 md:opacity-100"}
  `}
                                        >
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
                                    <div className="text-left ">
                                        <h4 className="text-[15px] font-semibold uppercase mb-3">Stay Connected</h4>

                                        <ul className=" p-1 w-[174.8px] h-[117.5px]">
                                            <li>
                                                <a className="flex items-center gap-2 text-sm text-gray-800">
                                                    <FaFacebookF size={18} />
                                                    Facebook
                                                </a>
                                            </li>

                                            <li>
                                                <a className="flex items-center gap-2 text-sm text-gray-800">

                                                    <FaTwitter size={18} />
                                                    Twitter
                                                </a>
                                            </li>

                                            <li>
                                                <a className="flex items-center gap-2 text-sm text-gray-800">

                                                    <FaPinterestP size={18} />
                                                    Pinterest
                                                </a>
                                            </li>

                                            <li>
                                                <a className="flex items-center gap-2 text-sm text-gray-800">

                                                    <FaInstagram size={18} />
                                                    Instagram
                                                </a>
                                            </li>

                                            <li>
                                                <a className="flex items-center gap-2 text-sm text-gray-800">

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

                </header>
            </div>

            {/* Mobile Slide-In Menu (Overlay) */}
            {/* Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sliding Drawer Menu */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-[270px] bg-white shadow-lg z-50 md:hidden
                    transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-1 bg-gray-200">

                    <h3 className="font-semibold ">Close Menu</h3>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* agar yhaan par mai width full karunga ? to shayad mobile device menu line full show ho jaye ? */}
                <ul className="flex flex-col text-left px-3   ">

                    <li className="border-b border-gray-300 ">
                        <Link
                            to="/"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="border-b border-gray-300">
                        <Link
                            to="/Creation"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            The Creation
                        </Link>
                    </li>

                    <li className="border-b border-gray-300">
                        <Link
                            to="/Origin"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            The Origin
                        </Link>
                    </li>

                    <li className="border-b border-gray-300">
                        <Link
                            to="/Contact_Us"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </li>

                    <li className="border-b border-gray-300">
                        <Link
                            to="/Privacy_Policy"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Privacy Policy
                        </Link>
                    </li>

                    <li className="border-b border-gray-300">
                        <Link
                            to="/Terms_Condition"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Terms & Conditions
                        </Link>
                    </li>

                    <li >
                        <Link
                            to="/Return_Refund"
                            className="block text-black text-[14px] uppercase tracking-wide py-2.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Return & Refund Policy
                        </Link>
                    </li>

                </ul>

            </div>
        </>
    );
}