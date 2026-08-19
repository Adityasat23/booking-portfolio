import Link from 'next/link';

export default function PortfolioPage() {
  // Ini adalah link foto contoh. 
  // Nanti ganti URL 'src' ini dengan lokasi file Anda (misal: '/images/karya1.jpg')
  const portfolioImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1527011045974-44b9a6156619?q=80&w=800&auto=format&fit=crop', alt: 'Product Shoot' },
    { id: 2, src: 'https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=800&auto=format&fit=crop', alt: 'Studio Lighting' },
    { id: 3, src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop', alt: 'Product Detail' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop', alt: 'Laptop Setup' },
    { id: 5, src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop', alt: 'Commercial Video' },
    { id: 6, src: 'https://images.unsplash.com/photo-1626784215001-3827f3c4db52?q=80&w=800&auto=format&fit=crop', alt: 'Event Coverage' },
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