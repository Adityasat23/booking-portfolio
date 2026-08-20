'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('2026-09-12'); 
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '', whatsapp: '', packageType: 'Personal Grad', notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTime) {
      alert('⚠️ Pilih jam tayang terlebih dahulu!');
      return;
    }

    // 1. Merangkai format tanggal agar rapi di WA
    const tanggalRapi = selectedDate === '2026-09-12' 
      ? 'Sabtu, 12 September 2026' 
      : 'Minggu, 13 September 2026';

    // 2. Membuat template pesan WhatsApp otomatis
    const message = `Halo Mas Aditya, saya ingin booking slot sesi wisuda! 🎓%0A%0A` +
      `*Detail Pemesan:*%0A` +
      `👤 Nama: ${formData.name}%0A` +
      `📞 No. WA: ${formData.whatsapp}%0A` +
      `📸 Paket: ${formData.packageType}%0A` +
      `📅 Hari: ${tanggalRapi}%0A` +
      `⏰ Jam: ${selectedTime} WIB%0A` +
      `📍 Lokasi / Catatan: ${formData.notes || '-'}`;

    // 3. Mengarahkan ke nomor WA Anda (082225500898)
    const waUrl = `https://wa.me/6282225500898?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-black">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-black mb-2 uppercase text-lg">Pilih Hari Tayang</label>
          <select 
            required 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
            className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-black text-lg cursor-pointer"
          >
            <option value="2026-09-12">🎬 Sabtu, 12 September 2026</option>
            <option value="2026-09-13">🎬 Minggu, 13 September 2026</option>
          </select>
        </div>
        
        <div>
          <label className="block font-black mb-2 uppercase text-lg">Pilih Jam Tayang</label>
          <select 
            required 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)} 
            className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-black text-lg cursor-pointer disabled:bg-gray-300"
          >
            <option value="">-- Cek Kursi Tersedia --</option>
            {/* 
              CARA UPDATE MANUAL: 
              Jika jam 08:00 sudah dibooking, cukup tambahkan kata "disabled" di dalam tag option-nya, 
              dan ubah teksnya jadi SOLD OUT. Contohnya ada di jam 09:00 bawah ini.
            */}
            <option value="07:00">07:00 WIB ✅</option>
            <option value="08:00">08:00 WIB ✅</option>
            <option value="09:00" disabled>09:00 WIB ❌ (SOLD OUT)</option>
            <option value="10:00">10:00 WIB ✅</option>
            <option value="11:00">11:00 WIB ✅</option>
            <option value="12:00">12:00 WIB ✅</option>
            <option value="13:00">13:00 WIB ✅</option>
            <option value="14:00">14:00 WIB ✅</option>
            <option value="15:00">15:00 WIB ✅</option>
            <option value="16:00">16:00 WIB ✅</option>
            <option value="17:00">17:00 WIB ✅</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-black mb-2 uppercase text-lg">Paket Wisuda</label>
        <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full border-4 border-black p-4 bg-[#FF90E8] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-black text-lg cursor-pointer">
          <option value="Personal Grad">Personal Grad (Rp 350.000)</option>
          <option value="Couple / Bestie">Couple / Bestie (Rp 500.000)</option>
          <option value="Squad Circle">Squad Circle (Rp 700.000)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-black mb-2 uppercase">Nama Representatif</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="Nama Anda" />
        </div>
        <div>
          <label className="block font-black mb-2 uppercase">Nomor WhatsApp Aktif</label>
          <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="082225500898" />
        </div>
      </div>

      <div>
        <label className="block font-black mb-2 uppercase">Lokasi Kampus & Catatan Khusus</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="Contoh: Undip Tembalang, titik kumpul di depan gedung..."></textarea>
      </div>

      <button type="submit" className="w-full py-5 mt-4 bg-black text-white border-4 border-black font-black text-2xl uppercase shadow-[8px_8px_0px_0px_#43B581] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
        AMANKAN SLOT (VIA WHATSAPP)
      </button>
    </form>
  );
}