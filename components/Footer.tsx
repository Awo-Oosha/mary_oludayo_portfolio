import React from "react";
import Image from "next/image";
import whatsapp from "@/public/assets/whatsapp.svg"
import ball from "@/public/assets/ball.svg"
import linkedin from "@/public/assets/LinkedIn.svg"
import twitter from "@/public/assets/Twitter.svg"
import behence from "@/public/assets/behence.svg"

export default function Footer() {
    return(
        <footer className="mt-[100px] flex flex-row items-center justify-center py-[40px] border-t border-[#696969]">
            <div className="container flex flex-col lg:flex-row items-center justify-between">
                <h6 className="text-[#959595] text-[16px] leading-[36x] font-semibold">Mary Oludayo — Copyright 2023</h6>
                <div className="flex flex-row items-center gap-[43px]">
                    <Image src={whatsapp} alt={"Social Icon"} width={29} height={18} className="cursor-pointer"/>
                    <Image src={ball} alt={"Social Icon"} width={29} height={18} className="cursor-pointer"/>
                    <Image src={linkedin} alt={"Social Icon"} width={29} height={18} className="cursor-pointer"/>
                    <Image src={twitter} alt={"Social Icon"} width={29} height={18} className="cursor-pointer"/>
                    <Image src={behence} alt={"Social Icon"} width={29} height={18} className="cursor-pointer"/>
                </div>
            </div>
        </footer>
    )
}