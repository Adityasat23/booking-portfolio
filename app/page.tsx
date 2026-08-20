import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black overflow-x-hidden">
      <Hero />

      {/* SEKSI 1: PACKAGES */}
      <section className="max-w-7xl mx-auto p-6 md:p-12 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase border-b-8 border-black inline-block pb-2 mb-6">
            Pilih Paket Yang Cocok Buatmu
          </h2>
          <div className="bg-white border-4 border-black inline-block p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-bold text-lg mb-2">Semua paket sudah termasuk:</p>
            <div className="flex flex-wrap justify-center gap-4 font-bold text-gray-800">
              <span>✓ Unlimited Shoot</span>
              <span>✓ Arahan Pose</span>
              <span>✓ File Original</span>
              <span>✓ Free Transport Area Semarang</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10">
          {/* Paket 1: Personal */}
          <div className="bg-[#FF90E8] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
            <span className="bg-black text-white font-bold px-3 py-1 self-start mb-6 uppercase text-sm border-2 border-transparent">
              ⭐ Paling Pas Buat Solo
            </span>
            <h3 className="text-3xl font-black uppercase mb-2">Personal Grad</h3>
            <p className="text-2xl font-black mb-6 bg-white border-4 border-black inline-block px-3 py-1 self-start">Rp 350.000</p>
            <p className="font-bold text-lg leading-relaxed flex-grow">Buat yang pengen fokus foto sendiri dan bareng keluarga tanpa ribet. Jangan lupa ajak keluarga dan sahabat</p>
          </div>
          
          {/* Paket 2: Couple (Lebih Menonjol) */}
          <div className="bg-[#FFE800] border-[6px] border-black p-6 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:scale-105 z-10 h-full relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-max">
               <span className="bg-[#FF5722] text-white border-4 border-black font-black px-6 py-2 uppercase text-lg">
                 🔥 Paling Favorit
               </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 mt-4">Couple / Bestie</h3>
            <p className="text-2xl md:text-3xl font-black mb-6 bg-white border-4 border-black inline-block px-3 py-1 self-start">Rp 500.000</p>
            <p className="font-bold text-lg leading-relaxed flex-grow">Datang berdua biar lebih hemat. Bisa foto bareng, bisa foto masing-masing juga. Atau mau ajak kedua keluarga juga GAS</p>
          </div>

          {/* Paket 3: Squad */}
          <div className="bg-[#00E5FF] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
            <span className="bg-black text-white font-bold px-3 py-1 self-start mb-6 uppercase text-sm border-2 border-transparent">
              🎓 Buat Satu Geng
            </span>
            <h3 className="text-3xl font-black uppercase mb-2">Squad Circle</h3>
            <p className="text-2xl font-black mb-6 bg-white border-4 border-black inline-block px-3 py-1 self-start">Rp 700.000</p>
            <p className="font-bold text-lg leading-relaxed flex-grow">Cocok buat foto bareng sahabat wisuda tanpa rebutan waktu dan spot.</p>
          </div>
        </div>
      </section>

      {/* SEKSI 2: WHY US */}
      <section className="bg-white border-y-4 border-black py-24">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 border-b-4 border-black pb-4 text-center mx-auto w-fit">
            Dapet apa aja si?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F2] border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black uppercase mb-4">📍 Boleh Pindah Spot Sepuasnya</h4>
              <p className="font-bold text-lg text-gray-800 leading-relaxed">Mau depan gedung, taman kampus, lapangan, atau spot favoritmu? Gas aja. Satu sesi cukup santai buat eksplor beberapa lokasi.</p>
            </div>
            <div className="bg-[#F5F5F2] border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black uppercase mb-4">🕺 Santai, Nanti Diarahin</h4>
              <p className="font-bold text-lg text-gray-800 leading-relaxed">Kalau bingung pose gimana, tenang. Tinggal datang dan nikmati momennya. Pose, angle, sampai ekspresi bakal dibantu dari awal sampai akhir.</p>
            </div>
            <div className="bg-[#F5F5F2] border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black uppercase mb-4">✨ Hasil Fotonya Jelas Oke</h4>
              <p className="font-bold text-lg text-gray-800 leading-relaxed">Pakai kamera dan lensa profesional dengan editing yang natural. Hasil tetap tajam, warna enak dilihat, dan siap upload ke Instagram.</p>
            </div>
            <div className="bg-[#F5F5F2] border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black uppercase mb-4">🧹 Ramai Orang? Aman</h4>
              <p className="font-bold text-lg text-gray-800 leading-relaxed">Wisuda pasti rame. Kalau ada orang lewat atau ganggu frame, nanti dibersihin saat proses editing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI 3: REFERENSI (SECTION BARU) */}
      <section className="max-w-5xl mx-auto p-6 md:p-12 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 bg-[#FFE800] border-4 border-black inline-block p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          Punya Referensi Foto?
        </h2>
        <p className="text-xl font-bold mb-10 leading-relaxed max-w-3xl mx-auto text-gray-800">
          Mau foto ala Pinterest? TikTok? Atau punya referensi foto wisuda yang disimpan dari Instagram? <br/><br/>
          Kirim aja sebelum sesi. Semakin jelas referensinya, semakin gampang menyesuaikan pose, angle, dan hasil yang kamu inginkan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white border-4 border-black font-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">✓ Pinterest Welcome</span>
          <span className="bg-white border-4 border-black font-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">✓ TikTok Reference</span>
          <span className="bg-white border-4 border-black font-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">✓ Custom Shot List</span>
        </div>
      </section>

      {/* SEKSI 4: BOOKING FORM */}
      <section id="booking-form" className="max-w-5xl mx-auto p-6 md:p-12 py-16 scroll-mt-10">
        <div className="bg-[#43B581] border-4 border-black p-6 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center mb-12 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Yuk Amankan Slotmu
            </h2>
            <p className="font-bold text-lg text-gray-800">
              Isi form singkat di bawah ini. Nanti diarahkan lewat WhatsApp untuk konfirmasi jadwal dan lokasi sesi.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* SEKSI 5: CARA BOOKING */}
      <section className="bg-black text-white py-24 mt-12 border-y-4 border-black">
        <div className="max-w-6xl mx-auto p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 border-b-4 border-white pb-4 text-center text-[#FFE800] mx-auto w-fit">
            Gimana Cara Bookingnya?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-[#FF90E8]">📍 Titik Temu</h4>
              <p className="font-bold text-lg leading-relaxed text-gray-300">Lokasi dan detail sesi akan dikirim lewat WhatsApp sebelum hari pemotretan.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-[#43B581]">💳 Pembayaran</h4>
              <p className="font-bold text-lg leading-relaxed text-gray-300">Booking slot dengan DP 50%. Sisanya bisa dibayar setelah sesi foto selesai.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-[#00E5FF]">📁 File Foto</h4>
              <p className="font-bold text-lg leading-relaxed text-gray-300">Semua file original dikirim maksimal H+1 melalui Google Drive.</p>
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-[#FFE800]">🎨 Proses Edit</h4>
              <p className="font-bold text-lg leading-relaxed text-gray-300">Pilih foto favoritmu untuk diedit. Hasil final biasanya selesai dalam 4–7 hari kerja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI 6: FINAL CTA */}
      <section className="max-w-4xl mx-auto p-6 md:p-12 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">Udah Tau Mau Foto Di Mana?</h2>
        <p className="text-xl font-bold mb-12 max-w-2xl mx-auto text-gray-800 leading-relaxed">
          Kalau tanggal wisudamu sudah pasti, langsung chat aja. Nanti kita atur jadwal dan spot yang paling cocok.
        </p>
        <a 
          href="https://wa.me/6282225500898" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-12 py-5 min-h-[48px] bg-[#FF5722] border-4 border-black text-white font-black text-2xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all"
        >
          CHAT MAS ADIT
        </a>
      </section>

    </main>
  );
}