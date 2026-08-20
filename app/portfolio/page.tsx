import Link from 'next/link';

export default function PortfolioPage() {
  // Ini adalah link foto contoh. 
  // Nanti ganti URL 'src' ini dengan lokasi file Anda (misal: '/images/karya1.jpg')
  const portfolioImages = [
    { id: 1, src: '/images/1.webp', alt: 'Wisuda Session' },
    { id: 2, src: '/images/2.webp', alt: 'Wisuda Session' },
    { id: 3, src: '/images/3.webp', alt: 'Wisuda Session' },
    { id: 4, src: '/images/4.webp', alt: 'Wisuda Session' },
    { id: 5, src: '/images/5.webp', alt: 'Wisuda Session' },
    { id: 6, src: '/images/6.webp', alt: 'Wisuda Session' },
    { id: 7, src: '/images/7.webp', alt: 'Wisuda Session' },
    { id: 8, src: '/images/8.webp', alt: 'Wisuda Session' },
    { id: 9, src: '/images/9.webp', alt: 'Wisuda Session' },
    { id: 10, src: '/images/10.webp', alt: 'Wisuda Session' },
    { id: 11, src: '/images/11.webp', alt: 'Wisuda Session' },
    { id: 12, src: '/images/12.webp', alt: 'Wisuda Session' },
    { id: 13, src: '/images/13.webp', alt: 'Wisuda Session' },
    { id: 14, src: '/images/14.webp', alt: 'Wisuda Session' },
    { id: 15, src: '/images/15.webp', alt: 'Wisuda Session' },
    { id: 16, src: '/images/16.webp', alt: 'Wisuda Session' },
    { id: 17, src: '/images/17.webp', alt: 'Wisuda Session' },
    { id: 18, src: '/images/18.webp', alt: 'Wisuda Session' },
    { id: 19, src: '/images/19.webp', alt: 'Wisuda Session' },
    { id: 20, src: '/images/20.webp', alt: 'Wisuda Session' },
    { id: 21, src: '/images/21.webp', alt: 'Wisuda Session' },
    { id: 22, src: '/images/22.webp', alt: 'Wisuda Session' },
    { id: 23, src: '/images/23.webp', alt: 'Wisuda Session' },
    { id: 24, src: '/images/24.webp', alt: 'Wisuda Session' },
    { id: 25, src: '/images/25.webp', alt: 'Wisuda Session' },
    { id: 26, src: '/images/26.webp', alt: 'Wisuda Session' },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b-4 border-black pb-6 gap-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-black">My Work</h1>
          <Link href="/" className="font-bold text-xl hover:underline underline-offset-8 decoration-4 decoration-[#FFE800] text-black">
            &larr; Back Home
          </Link>
        </div>

        {/* Masonry Image Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioImages.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group">
              <div className="w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}