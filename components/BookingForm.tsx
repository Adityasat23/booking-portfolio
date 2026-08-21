'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('2026-09-12'); 
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '', whatsapp: '', packageType: 'Personal Grad', notes: ''
  });

  // ==========================================
  // 🗓️ DATABASE MINI: DAFTAR JAM SOLD OUT
  // ==========================================
  // Cara Update: Tinggal tambahkan jam yang laku di dalam kurung siku.
  // Contoh penulisan: ['07:00', '09:00', '13:00']
  const soldOutSlots: { [key: string]: string[] } = {
    '2026-09-12': ['07:00','17:00','19.00'], // Jam yang laku di hari SABTU, 12 Sept
    '2026-09-13': [],        // Jam yang laku di hari MINGGU, 13 Sept
  };

  // Daftar Semua Jam Tayang
  const allTimeSlots = [
    "06.00","07:00", "08:00", "09:00", "10:00", "11:00", 
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTime) {
      alert('⚠️ Pilih jam Foto terlebih dahulu!');
      return;
    }

    const tanggalRapi = selectedDate === '2026-09-12' 
      ? 'Sabtu, 12 September 2026' 
      : 'Minggu, 13 September 2026';

    const message = `Halo Mas Aditya, saya ingin booking slot sesi wisuda! 🎓%0A%0A` +
      `*Detail Pemesan:*%0A` +
      `👤 Nama: ${formData.name}%0A` +
      `📞 No. WA: ${formData.whatsapp}%0A` +
      `📸 Paket: ${formData.packageType}%0A` +
      `📅 Hari: ${tanggalRapi}%0A` +
      `⏰ Jam: ${selectedTime} WIB%0A` +
      `📍 Lokasi / Catatan: ${formData.notes || '-'}`;

    const waUrl = `https://wa.me/6282225500898?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-black">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-black mb-2 uppercase text-lg">Pilih Hari Foto</label>
          <select 
            required 
            value={selectedDate} 
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedTime(''); // Reset jam kalau ganti hari
            }} 
            className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-black text-lg cursor-pointer"
          >
            <option value="2026-09-12">Sabtu, 12 September 2026</option>
            <option value="2026-09-13"> Minggu, 13 September 2026</option>
          </select>
        </div>
        
        <div>
          <label className="block font-black mb-2 uppercase text-lg">Pilih Jam Foto</label>
          <select 
            required 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)} 
            className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-black text-lg cursor-pointer disabled:bg-gray-300"
          >
            <option value="">-- Cek Slot Tersedia --</option>
            
            {/* Logic memunculkan jam otomatis */}
            {allTimeSlots.map((time) => {
              // Mengecek apakah jam ini ada di daftar soldOutSlots untuk hari yang dipilih
              const isSoldOut = soldOutSlots[selectedDate]?.includes(time);
              
              return (
                <option key={time} value={time} disabled={isSoldOut}>
                  {time} WIB {isSoldOut ? '❌ (SOLD OUT)' : '✅'}
                </option>
              );
            })}

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
          <label className="block font-black mb-2 uppercase">Nama</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="Nama Anda" />
        </div>
        <div>
          <label className="block font-black mb-2 uppercase">Nomor WhatsApp </label>
          <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="082225500898" />
        </div>
      </div>

      <div>
        <label className="block font-black mb-2 uppercase">Lokasi Kampus & Catatan Khusus</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} className="w-full border-4 border-black p-4 bg-white focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" placeholder="Contoh: Undip Tembalang, titik kumpul di depan gedung..."></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full py-5 min-h-[48px] mt-6 bg-[#FFE800] text-black border-4 border-black font-black text-2xl md:text-3xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
      >
        LET'S GO FOTO BARENG
      </button>
    </form>
  );
}