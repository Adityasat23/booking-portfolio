'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-12 bg-[#faf9f6] border-b-4 border-black text-center">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight mb-6 text-black">
            Aditya Satria Pratama
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-12 text-gray-800">
            Product, Video & Commercial Photographer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link 
              href="/#booking-form" 
              className="px-10 py-5 bg-[#FFE800] border-4 border-black text-black font-black text-xl uppercase text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              Book a Session
            </Link>
            
            <Link 
              href="/portfolio" 
              className="px-10 py-5 bg-white border-4 border-black text-black font-black text-xl uppercase text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              View Work
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}