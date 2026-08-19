import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Hero />

      {/* SEKSI BARU: PRICELIST */}
      <section className="max-w-6xl mx-auto p-6 md:p-12 mt-12">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-4 border-black pb-4 text-black">
          Packages & Pricelist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Paket 1 */}
          <div className="bg-[#43B581] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4 text-black">Product Photoshoot</h3>
            <p className="text-xl font-bold mb-4 text-black">Mulai Rp 500k</p>
            <ul className="list-disc list-inside font-medium text-black">
              <li>Studio atau On-Location</li>
              <li>High-Res Retouched Photos</li>
              <li>Properti Dasar</li>
            </ul>
          </div>
          {/* Paket 2 */}
          <div className="bg-[#FF90E8] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4 text-black">Video & Tracking</h3>
            <p className="text-xl font-bold mb-4 text-black">Mulai Rp 1.2M</p>
            <ul className="list-disc list-inside font-medium text-black">
              <li>Green Screen Setup</li>
              <li>Editing & Color Grading</li>
              <li>Commercial Rights</li>
            </ul>
          </div>
          {/* Paket 3 */}
          <div className="bg-[#00E5FF] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4 text-black">Event Coverage</h3>
            <p className="text-xl font-bold mb-4 text-black">Custom Price</p>
            <ul className="list-disc list-inside font-medium text-black">
              <li>Dokumentasi Seharian</li>
              <li>Foto & Highlight Video</li>
              <li>Pengiriman File Cepat</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BAGIAN FORMULIR */}
      <section id="booking-form" className="max-w-4xl mx-auto p-6 md:p-12 mt-4 scroll-mt-10">
        <div className="bg-[#FFE800] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-4 border-black pb-4 text-black text-center">
            Lock Your Slot
          </h2>
          <BookingForm />
        </div>
      </section>

      {/* KONTAK WHATSAPP (NOMOR SUDAH DIUPDATE) */}
      <section className="max-w-4xl mx-auto p-6 md:p-12 mt-8 mb-20 text-center">
        <h3 className="text-2xl font-bold mb-6 text-black uppercase">Butuh Custom Paket atau Diskusi Cepat?</h3>
        <a 
          href="https://wa.me/6282225500898" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-[#FF5722] border-4 border-black text-black font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
        > 
          Chat via WhatsApp
        </a>
      </section>
    </main>
  );
}