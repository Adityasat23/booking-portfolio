import Link from 'next/link';

export default function PortfolioPage() {
  // Ini adalah data simulasi (dummy). Nanti Anda bisa sesuaikan nama file dan ukurannya.
  const portfolioItems = [
    { id: 1, src: '/images/skintific-product.jpg', alt: 'Skintific Niacinamide Product Shoot', height: 'h-64', bg: 'bg-[#FF90E8]' },
    { id: 2, src: '/images/studio-lighting.jpg', alt: 'Studio Lighting Setup', height: 'h-96', bg: 'bg-[#FFE800]' },
    { id: 3, src: '/images/travel-semarang.jpg', alt: 'Semarang Architecture', height: 'h-72', bg: 'bg-[#43B581]' },
    { id: 4, src: '/images/green-screen.jpg', alt: 'Green Screen Video Tracking', height: 'h-80', bg: 'bg-[#FF5722]' },
    { id: 5, src: '/images/travel-jakarta.jpg', alt: 'Jakarta Urban Photography', height: 'h-64', bg: 'bg-[#00E5FF]' },
    { id: 6, src: '/images/commercial.jpg', alt: 'Commercial Studio Shoot', height: 'h-96', bg: 'bg-[#FF90E8]' },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b-4 border-black pb-6 gap-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-black">My Work</h1>
          <Link href="/" className="font-bold text-xl hover:underline underline-offset-8 decoration-4 decoration-[#FFE800]">
            &larr; Back Home
          </Link>
        </div>

        {/* Pinterest Masonry Layout */}
        {/* columns-1 (HP), columns-2 (Tablet), columns-3 (Desktop) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group cursor-pointer"
            >
              {/* Kotak Neobrutalism */}
              <div className={`w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden ${item.height} ${item.bg} relative`}>
                
                {/* 
                  Nanti hapus baris teks ini, lalu ganti dengan tag <img> asli Anda:
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" /> 
                */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-black text-2xl uppercase border-black">
                  {item.alt}
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}