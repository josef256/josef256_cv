import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const NavMenu=()=>{
    const [isMenuVisible, setIsMenuVisible]= useState(false);
    return (
        <nav>
        <ul className="md:flex md:w-full hidden">
            <li className="pr-12 font-semibold text-gray-700 hover:text-gray-700 md:tracking-wide ">
                <div className="py-6 border-b-2 border-gray-700">
                <Link  to="/">
                Home
                </Link>
                </div>
            </li>
            <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/portfolio">
                Portfolio
                </Link>
                </div>
            </li>
            <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/about">
                About
                </Link>
                </div>
            </li>
            <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/contact">
                    Contact
                </Link>
                </div>
            </li>
        </ul>
            <div className="md:hidden" onClick={()=>setIsMenuVisible(!isMenuVisible)}>
                <svg className="text-gray-600 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <div className={`${isMenuVisible? "block": "hidden"} md:hidden p-4 bg-gray-300 absolute mx-4 right-0 rounded-md`}>
                <ul className="grid grid-cols-2 gap-6 grid-rows-2">
                    <li className="font-semibold text-gray-700 hover:text-gray-700 flex items-center">
                        <svg className="text-gray-700 hover:text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link  to="/">
                            Home
                        </Link>
                    </li>
                    <li className="font-semibold text-gray-500 hover:text-gray-700 flex items-center">
                        <svg className="text-gray-500 hover:text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="font-semibold text-gray-500 hover:text-gray-700 flex items-center">
                        <svg className="text-gray-500 hover:text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className="font-semibold text-gray-500 hover:text-gray-700 flex items-center">
                        <svg className="text-gray-500 hover:text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
