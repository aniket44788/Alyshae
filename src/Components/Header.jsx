// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";


import alyshaenamelogo from "../assets/images/alyshaenamelogo.svg";
// import HomeContent from "../Pages/HomeContent";
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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