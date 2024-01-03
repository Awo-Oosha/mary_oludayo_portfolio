import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <main className="bg-[#202020]">
          <Navbar />
          <Hero />
          <Skills />
          <Contact />
          <Footer />
      </main>
  )
}
