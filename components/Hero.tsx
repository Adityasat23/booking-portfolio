import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center px-6 py-20 bg-[#F5F5F2] border-b-4 border-black">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Bagian Teks (Kiri) */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight mb-4 text-black">
            DIFOTOIN ADIT & KRISNA
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-black bg-[#FFE800] inline-block p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
            Foto wisuda santai, natural, dan gak bikin bingung pose.
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 text-gray-800 leading-relaxed max-w-xl">
            Mau foto sendiri, bareng pasangan, keluarga, atau satu geng? Tinggal dateng dan nikmati. Nanti pose, angle, sampai spot foto bakal dibantu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/#booking-form" 
              className="px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#FFE800] border-4 border-black text-black font-black text-lg md:text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              PILIH JADWAL FOTO
            </Link>
            <Link 
              href="/portfolio" 
              className="px-8 py-4 min-h-[48px] flex items-center justify-center bg-white border-4 border-black text-black font-black text-lg md:text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              LIHAT HASIL FOTO
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t-4 border-black font-bold text-base md:text-lg text-black">
            <span className="flex items-center gap-2">🎓 Fotografer Polines 3 Tahun</span>
            <span className="flex items-center gap-2">📸 Unlimited Shoot</span>
            <span className="flex items-center gap-2">⭐ File Original + Edit</span>
          </div>
        </div>

        {/* Bagian Grid 3 Foto (Kanan) */}
        <div className="grid grid-cols-2 gap-4 h-full relative">
          {/* Kolom Kiri Grid */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="bg-[#FF90E8] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-[4/5] overflow-hidden">
              <img src="/images/18.webp" alt="Wisuda 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="bg-[#43B581] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-square overflow-hidden">
              <img src="/images/16.webp" alt="Wisuda 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
          {/* Kolom Kanan Grid */}
          <div className="col-span-1 flex items-center">
            <div className="bg-[#00E5FF] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-[3/4] w-full overflow-hidden">
              <img src="/images/8.webp" alt="Wisuda 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}