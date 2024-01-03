import React from 'react'
import Image from "next/image";
import mary_hero from "@/public/assets/mary_hero_image.png";
import mail_icon from "@/public/assets/mail_icon.svg";

const Hero = () => {
    return (
        <section className="mt-[100px] flex flex-row items-center justify-center ">
            <div className="w-full lg:max-w-[1200px] flex flex-col lg:flex-row items-start justify-between">
               <div className="flex flex-col gap-[24px]">
                   <div className="text-[#DEDEDE] text-[64px] lg:max-w-[700px] font-bold leading-[70px] tracking-[-0.5px]">
                       Hi, I am Mary Oludayo
                       A Professional life coach
                       based in Lagos.
                   </div>

                   <div className="text-[#959595] text-[24px] lg:max-w-[700px] font-semibold leading-[36px] tracking-[-0.5px]">
                       A dedicated life and business coach committed to guiding individuals and
                       organizations towards transformative growth and success. As you explore this space,
                       you&apos;ll discover the unique blend of expertise, passion,
                       and personal commitment that sets Mary Oludayo apart.
                   </div>

                   <button className="mt-[60px] flex flex-row items-center rounded-[4px] text-white font-semibold text-[18px] gap-[16px] w-full lg:max-w-[400px] py-[16px] px-[43px] bg-[#9D9D9D] border-none  ">
                       <Image src={mail_icon} alt={"Mail icon"} width={20} height={20} />
                       <p>maryoludayo@gmail.com</p>
                   </button>
               </div>

                <div className="w-full lg:w-[400px] h-[400px] border-none rounded-full">
                    <Image src={mary_hero} alt={"Hero"} className="object-cover rounded-full w-full h-full object-top grayscale" />
                </div>
            </div>
        </section>
    )
}

export default Hero;