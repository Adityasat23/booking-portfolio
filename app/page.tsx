import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Hero />

      {/* SEKSI 1: PRICELIST WISUDA */}
      <section className="max-w-6xl mx-auto p-6 md:p-12 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black inline-block pb-2 text-black">
            Graduation Packages
          </h2>
          <p className="text-xl font-bold mt-4 text-black bg-[#FFE800] border-4 border-black inline-block px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Semua paket sudah termasuk: Free Transport area Semarang, Unlimited Shoot, All Original Files (JPG) & Full Directed Posing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paket 1 */}
          <div className="bg-[#FF90E8] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black">🎓 Personal Grad</h3>
            <p className="text-2xl font-black mb-6 text-black bg-white border-4 border-black inline-block px-3 py-1">Rp 350.000</p>
            <ul className="list-disc list-inside font-bold text-lg text-black space-y-2">
              <li>Durasi 1 Jam (Bebas ganti spot)</li>
              <li>1 Wisudawan (Bebas ajak keluarga)</li>
              <li>25 Foto Edit Profesional</li>
              <li>Termasuk retouch & hapus objek "bocor"</li>
            </ul>
          </div>
          
          {/* Paket 2 */}
          <div className="bg-[#43B581] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black">🎓 Couple / Bestie</h3>
            <p className="text-2xl font-black mb-2 text-black bg-white border-4 border-black inline-block px-3 py-1">Rp 500.000</p>
            <p className="font-bold text-black mb-4">(Patungan cuma 250k/orang!)</p>
            <ul className="list-disc list-inside font-bold text-lg text-black space-y-2">
              <li>Durasi 1 Jam (Bebas ganti spot)</li>
              <li>2 Wisudawan + Keluarga masing-masing</li>
              <li>Sesi berdua & masing-masing solo</li>
              <li>35 Foto Edit Profesional</li>
            </ul>
          </div>

          {/* Paket 3 */}
          <div className="bg-[#00E5FF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black">🎓 Squad Circle</h3>
            <p className="text-2xl font-black mb-6 text-black bg-white border-4 border-black inline-block px-3 py-1">Rp 700.000</p>
            <ul className="list-disc list-inside font-bold text-lg text-black space-y-2">
              <li>Durasi 1,5 Jam (90 Menit)</li>
              <li>3 - 5 Wisudawan + Keluarga</li>
              <li>Sesi grup & masing-masing solo</li>
              <li>50 Foto Edit Profesional</li>
            </ul>
            <p className="mt-4 font-bold text-black bg-[#FFE800] p-2 border-2 border-black">Lebih dari 5 orang? Chat kami untuk harga khusus!</p>
          </div>
        </div>
      </section>

      {/* SEKSI 2: MENGAPA MEMILIH KAMI */}
      <section className="max-w-6xl mx-auto p-6 md:p-12 mt-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-4 border-black pb-4 text-black text-center bg-[#FFE800] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Mengapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl font-black uppercase mb-2 text-black">Bebas Eksplorasi</h4>
            <p className="font-bold text-lg text-gray-800">Tidak ada drama diusir dalam 10 menit seperti di studio. Waktu 1 jam penuh sangat leluasa untuk pindah spot, ganti toga, dan ngobrol santai.</p>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl font-black uppercase mb-2 text-black">Anti Mati Gaya & Kaku</h4>
            <p className="font-bold text-lg text-gray-800">Bingung pose? Tenang, fotografer kami akan mengarahkan semua gaya dari ujung kepala sampai kaki agar hasilnya natural.</p>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl font-black uppercase mb-2 text-black">Bebas "Bocor"</h4>
            <p className="font-bold text-lg text-gray-800">Kampus pasti ramai saat wisuda. Jangan khawatir ada orang lewat, tim editing kami akan membersihkannya (Object Removal).</p>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl font-black uppercase mb-2 text-black">Kualitas Alat Premium</h4>
            <p className="font-bold text-lg text-gray-800">Menggunakan kamera Full-Frame Sony A7 Series & lensa Sigma 24-70mm F2.8. Hasil tajam, bokeh maksimal, wajah tetap cerah (dengan flash eksternal).</p>
          </div>
        </div>
      </section>

      {/* SEKSI 3: FORM BOOKING EKSKLUSIF */}
      <section id="booking-form" className="max-w-4xl mx-auto p-6 md:p-12 mt-8 scroll-mt-10">
        <div className="bg-[#FFE800] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 text-black text-center">
            Pesan Slot Bioskopmu!
          </h2>
          <p className="text-center font-bold text-xl mb-8 border-b-4 border-black pb-4">Eksklusif hanya untuk 12 & 13 September 2026</p>
          <BookingForm />
        </div>
      </section>

      {/* SEKSI 4: SYARAT & KETENTUAN (TERMS) */}
      <section className="max-w-4xl mx-auto p-6 md:p-12 mb-20 bg-black text-white shadow-[8px_8px_0px_0px_#FFE800]">
        <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-white pb-2">Cara Booking & Syarat Ketentuan</h3>
        <ul className="list-disc list-inside font-bold text-lg space-y-4">
          <li><span className="text-[#FF90E8]">Meeting Point:</span> Lokasi kumpul disepakati via WhatsApp. Harap hadir 10 menit sebelum jadwal.</li>
          <li><span className="text-[#43B581]">Pembayaran:</span> Amankan slot dengan DP 50%. Sisa pembayaran setelah sesi foto selesai.</li>
          <li><span className="text-[#00E5FF]">Pengiriman Hasil:</span> All Original Files dikirim H+1 via Google Drive.</li>
          <li>Klien memilih foto untuk diedit. Hasil edit final selesai dalam 4-7 hari kerja.</li>
        </ul>
        
        <div className="mt-10 text-center">
          <a href="https://wa.me/6282225500898" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#FF5722] border-4 border-white text-white font-black text-xl uppercase hover:bg-white hover:text-black transition-all">
            Tanya Jadwal via WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}