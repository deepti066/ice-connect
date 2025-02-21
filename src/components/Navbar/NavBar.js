import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        setTop(window.scrollY === 0);
        
        const scrollHandler = () => {
            setTop(window.scrollY <= 10);
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    const handleClick = () => {
        setisOpen((prev) => !prev);
    };

    return (
        <nav className={`fixed top-0 h-16 w-full z-30 flex transition-colors duration-500 ease-in-out ${top ? 'bg-gradient-to-br from-gray-800 via-blue-400 to-black' : 'bg-gradient-to-br from-gray-800 via-blue-200 to-black shadow-lg'}`}>
            <div className="flex justify-between items-center w-full px-6 py-2 no-underline">
                <div className="flex flex-row justify-end md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/"  className="no-underline">
                        <h1 className="font-bold text-2xl md:text-4xl text-white no-underline">ICE CONNECT</h1>
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button
                        aria-expanded={isOpen}
                        className="p-2 rounded-lg lg:hidden bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white"
                        onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className="hidden space-x-6 lg:inline-block p-5">
                        <NavLinks />
                    </div>
                    <div role="menu" className={`fixed transition-transform duration-300 ease-in-out transform flex justify-center left-0 w-full h-auto rounded-md p-6 bg-gradient-to-br from-gray-800 via-blue-900 to-black lg:hidden shadow-xl top-14 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                        <div className="flex flex-col space-y-6">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
