import React from 'react';
import {Link} from "react-router-dom";

export const NavMenu=()=>{
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
                <Link to="/">
                Portfolio
                </Link>
                </div>
            </li>
            <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/">
                About
                </Link>
                </div>
            </li>
            <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/">
                    Contact
                </Link>
                </div>
            </li>
        </ul>
            <div className="md:hidden">
                <svg className="text-gray-600 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <div className="md:hidden w-32 p-4 bg-gray-300 absolute mx-4 right-0 rounded-md">
                <ul className="grid grid-cols-1 gap-6 grid-rows-4">
                    <li className="font-semibold text-gray-700 flex items-center">
                        <svg className="text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        Home
                    </li>
                    <li className="font-semibold text-gray-700 flex items-center">
                        <svg className="text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        Portfolio
                    </li>
                    <li className="font-semibold text-gray-700 flex items-center">
                        <svg className="text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        About
                    </li>
                    <li className="font-semibold text-gray-700 flex items-center">
                        <svg className="text-gray-700 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}
