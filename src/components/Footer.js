import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 xl:col-span-4 overflow:hidden">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-full xl:w-80 mx-auto"   >
                            <h3 className="font-bold text-4xl mb-4">ICE CONNECT</h3>
                            <div className='text-small font-medium text-gray-600'>
                                <h5>303, 3rd FLOOR TEMPLE TOWER, SIKARIA COMPOUND G.S.ROAD, DISPUR, GUWAHATI-781005</h5>     
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                  <div className="col-span-6 md:col-span-6 lg:col-span-1 text-center mx-auto">
                    <h6 className="text-[#013289] text-xl font-bold mb-4">QUICK LINKS</h6>
                    <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="/about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/hosting" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>
                        <li className="mb-2  whitespace-nowrap">
                            <HashLink to="/privacy" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Privacy Policy</HashLink>
                        </li> 
                        <li className="mb-2  whitespace-nowrap">
                            <HashLink to="/terms" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Terms & Conditions</HashLink>
                        </li>                            
                    </ul>
                </div>

                {/* 3rd block */}
                {/*<div className="col-span-6 md:col-span-6 lg:col-span-4 text-center mx-auto">*/}
                {/*    <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>*/}
                {/*    <ul className="text-md">*/}
                {/*        <li className="mb-2">*/}
                {/*            <Link to="/" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Broadband</Link>*/}
                {/*        </li>*/}
                {/*        <li className="mb-2">*/}
                {/*            <Link to="/" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">OTT Bundle Subscription</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* 4th block */}
                <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">

                    <div className="text-md font-medium mb-6">Follow us on</div>
                    
                    <div className="flex justify-center space-x-4 mt-2">
                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                            </svg>
                        </Link>

                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                            </svg>
                        </Link>
                    </div>
                </div>


                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        ICE CONNECT
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
