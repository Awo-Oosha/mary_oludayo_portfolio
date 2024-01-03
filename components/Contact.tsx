import React from "react";
import Image from "next/image";
import mail_icon from "@/public/assets/mail_icon.svg";

export default function Contact() {
    return(
        <section className="mt-[100px] flex flex-row items-center justify-center ">
            <div className="container flex flex-col items-center gap-[24px]">
                <h2 className="text-[#DEDEDE] text-[36px]  tracking-[-0.5px] font-bold">Contact Me</h2>
                <p className="text-[#959595] text-[24px] leading-[38px] tracking-[-0.5px] font-semibold">If you are looking to hire a Life Coach or Business Coach,
                    I’m currently available.
                </p>

                <button className="mt-[30px] flex flex-row items-center rounded-[4px] text-white font-semibold text-[18px] gap-[16px] w-full lg:max-w-[400px] py-[16px] px-[43px] bg-[#9D9D9D] border-none  ">
                    <Image src={mail_icon} alt={"Mail icon"} width={20} height={20} />
                    <p>maryoludayo@gmail.com</p>
                </button>
            </div>
        </section>
    )
}