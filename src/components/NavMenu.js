import React from 'react';

export const NavMenu=()=>{
    return (
        <nav>
        <ul className="md:flex md:w-full hidden">
            <li className="pr-4 md:pr-12 font-semibold text-gray-700 tracking-wide">Home</li>
            <li className="pr-4 md:pr-12 font-semibold text-gray-700 tracking-wide">Portfolio</li>
            <li className="pr-4 md:pr-12 font-semibold text-gray-700 tracking-wide">About</li>
            <li className="pr-4 md:pr-12 font-semibold text-gray-700 tracking-wide">Contact</li>
        </ul>
        </nav>
    )
}
