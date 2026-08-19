'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 py-12 bg-[#faf9f6] border-b-4 border-black">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Bagian Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-4 text-black">
            Aditya Satria Pratama
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-8 text-gray-800">
            Product, Video & Commercial Photographer.
          </p>
          
          {/* DI SINI LETAK TOMBOLNYA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Tombol scroll ke form */}
            <Link 
              href="/#booking-form" 
              className="px-8 py-4 bg-[#FFE800] border-4 border-black text-black font-black text-lg uppercase text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              Book a Session
            </Link>
            
            {/* Tombol pindah ke halaman galeri portfolio */}
            <Link 
              href="/portfolio" 
              className="px-8 py-4 bg-white border-4 border-black text-black font-black text-lg uppercase text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              View Work
            </Link>
          </div>
          
        </motion.div>
        
        {/* Bagian Foto Profil / Highlight */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="aspect-[4/5] md:aspect-square bg-[#FF90E8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
            {/* Nanti ganti 'src' dengan foto profil atau karya terbaik Anda yang sudah dimasukkan ke folder public/images/ */}
            <img 
              src="/images/hero-profile.jpg" 
              alt="Aditya Satria Pratama" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}