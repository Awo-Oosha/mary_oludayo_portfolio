import React from 'react'
import { Anton, Bangers } from 'next/font/google'


const anton = Anton({ weight: "400", subsets: ['latin'] })
export default function Navbar() {
    return(
        <header className="w-full flex flex-col items-center nav_properties">
            <div className="flex flex-row w-full lg:max-w-[1200px] justify-between py-[20px]">
                <div className={`${anton.className} text-[#DEDEDE] text-[20px] `}>Mary Oludayo</div>

                <nav className="flex flex-col">
                    <ul className="flex flex-row items-center gap-[40px]">
                        <li className="text-[#DEDEDE] text-[20px]"><a href="#home">Home</a></li>
                        <li className="text-[#DEDEDE] text-[20px]"><a href="#work">Work</a></li>
                        <li className="text-[#DEDEDE] text-[20px]"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
