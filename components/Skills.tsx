import React from "react";
import {skillsData} from "@/utils/constant";
import arrow from "@/public/assets/Arrow_down.svg"
import Image from "next/image";


export default function Skills() {
    return(
        <section className="mt-[100px] flex flex-row items-center justify-center ">
            <div className="container">
                <div className="flex flex-row items-center gap-[32px] mb-[50px]">
                    <Image src={arrow} alt={"Arrow"} />
                    <p className="text-[#DEDEDE] text-[16px] leading-[16px] uppercase font-semibold">Skills</p>
                </div>

                <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-[14px] flex-wrap text-center text-clip">
                    {skillsData.map((item, index) => (
                        <div key={index} className="w-full lg:w-[500px] lg:h-[600px] my-[14px] relative overflow-hidden rounded-md">
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[#DEDEDE] text-[40px] font-bold tracking-[-0.5px] z-10">
                                {item.title}
                            </div>
                            <Image src={item.img} alt={item.title} className="object-cover w-full h-full filter blur-[4px] brightness-75"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}