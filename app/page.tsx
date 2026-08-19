import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      
      {/* 1. Bagian Header / Hero */}
      <Hero />

      {/* 2. Bagian Formulir Booking */}
      <section id="booking-form" className="max-w-4xl mx-auto p-6 md:p-12 mt-12 scroll-mt-10">
        <div className="bg-[#FF90E8] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-4 border-black pb-4 text-black text-center">
            Lock Your Slot
          </h2>
          
          <BookingForm />
          
        </div>
      </section>

      {/* 3. Bagian Kontak Darurat / WhatsApp */}
      <section className="max-w-4xl mx-auto p-6 md:p-12 mt-8 mb-20 text-center">
        <h3 className="text-2xl font-bold mb-6 text-black uppercase">Butuh Custom Paket atau Diskusi Cepat?</h3>
        <p className="text-gray-700 mb-8 font-medium">Klik tombol di bawah untuk langsung terhubung dengan saya.</p>
        
        {/* Pastikan mengganti nomor 628... dengan nomor WA asli Anda */}
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-[#43B581] border-4 border-black text-black font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
        >
          Chat via WhatsApp
        </a>
      </section>

    </main>
  );
}