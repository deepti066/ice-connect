import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button className="text-white text-3xl md:hidden absolute right-4 top-4 z-50" onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Sidebar for mobile */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}>
                <nav className="flex flex-col bg-gradient-to-br from-gray-800 via-blue-900 to-black space-y-4 text-lg">
                    <HashLink className="hover:text-gray-400" smooth to="/about" onClick={toggleMenu}>
                        About
                    </HashLink>
                    <HashLink className="hover:text-gray-400" to="/hosting" onClick={toggleMenu}>
                        Services
                    </HashLink>
                    <HashLink className="hover:text-gray-400" to="/contact" onClick={toggleMenu}>
                        Contact Us
                    </HashLink>
                </nav>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex font-roboto text-lg space-x-10">
                <HashLink className="px-4 text-white hover:text-black no-underline" smooth to="/about">
                    About
                </HashLink>
                <HashLink className="px-4 text-white hover:text-black no-underline" to="/hosting">
                    Services
                </HashLink>
                <HashLink
                    className="px-4 text-white bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded no-underline"
                    to="/contact">
                    Contact Us
                </HashLink>

            </div>
        </>
    );
};

export default NavLinks;
