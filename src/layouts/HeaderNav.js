import React  from 'react';
import {NavMenu} from "../components/NavMenu";

export const HeaderNav=()=>{
    return(
        <header className="bg-transparent fixed top-0 w-full">
            <div className="h-20 p-4 flex justify-between items-center  md:mx-32">
            <div className="flex items-center">
                <div>
                    <img className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-400 flex-shrink-0" src={require('../assets/img/user_img.jpg')} />
                </div>
                <div className="pl-2 font-bold text-blue-500 md:tracking-wide">Youssef Hanchaoui</div>
            </div>
            <div >
                <NavMenu/>
            </div>
            </div>
        </header>
    )
}
