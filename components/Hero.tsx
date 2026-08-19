import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center space-y-6 flex flex-col items-center pt-32 pb-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
        className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1]"
      >
        OUTDOOR GRADUATION <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          PORTRAIT SEMARANG
        </span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-neutral-500 max-w-2xl"
      >
        Capture Your Best Campus Memories. Sesi foto wisuda outdoor premium langsung di spot ikonik kampusmu. Santai, dan pasti aesthetic.
      </motion.p>
      <div className="pt-4">
         <a href="#booking" className="px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform shadow-lg">
            Booking Sekarang
         </a>
      </div>
    </section>
  );
}