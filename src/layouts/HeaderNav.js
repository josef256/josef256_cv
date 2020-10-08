import React  from 'react';
import {NavMenu} from "../components/NavMenu";

export const HeaderNav=()=>{
    return(
        <header className="bg-gray-200 h-20 flex justify-around items-center p-4">
            <div className="md:ml-32 flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-400"></div>
                <div className="pl-2 font-bold text-gray-700 tracking-wide">Youssef Hanchaoui</div>
            </div>

            <div className="md:mr-32">
                <NavMenu/>
            </div>
        </header>
    )
}
