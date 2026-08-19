"use client";

import { useState } from "react";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  // Hanya sisakan selectedPackage, karena Date dan Time sekarang diurus otomatis oleh BookingForm
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-yellow-300">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-24">
        
        {/* HERO SECTION */}
        <section className="text-left py-20 md:py-32 border-b-2 border-black">
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase leading-[1.1] tracking-tighter">
            Outdoor Graduation <br/>
            <span className="bg-black text-white px-2 mt-2 inline-block">Portrait Semarang</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black max-w-2xl font-medium">
            Capture Your Best Campus Memories. Sesi foto wisuda outdoor premium langsung di spot ikonik kampusmu. Santai, tanpa batasan jepretan, dan pasti aesthetic.
          </p>
          <div className="mt-8">
             <a href="#packages" className="px-8 py-4 bg-black text-white font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors inline-block">
                Lihat Paket & Jadwal
             </a>
          </div>
        </section>

        <Pricing 
          selectedPackage={selectedPackage} 
          setSelectedPackage={setSelectedPackage} 
        />
        
        {/* Hapus selectedDate & selectedTime dari sini */}
        <BookingForm selectedPackage={selectedPackage} />

      </main>
    </div>
  );
}