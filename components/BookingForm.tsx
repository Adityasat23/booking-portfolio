'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Inisialisasi Supabase yang aman
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Form Data
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    packageType: 'Product Photoshoot (Studio/Location)',
    notes: ''
  });

  // Dapatkan tanggal hari ini untuk membatasi input kalender agar tidak bisa pilih masa lalu
  const today = new Date().toISOString().split("T")[0];

  // Generate Jam dari 05:00 sampai 23:00 (Sesuai kode Anda sebelumnya)
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 5; i <= 23; i++) {
      slots.push(`${i.toString().padStart(2, "0")}:00`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    if (!selectedDate || !selectedTime) {
      setStatusMsg('⚠️ Pilih tanggal dan jam terlebih dahulu!');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            date: selectedDate,
            time: selectedTime,
            name: formData.name,
            whatsapp: formData.whatsapp,
            package: formData.packageType,
            notes: formData.notes
          }
        ]);

      if (error) throw error;

      setStatusMsg('✅ Booking Berhasil! Saya akan segera menghubungi Anda via WhatsApp.');
      setFormData({ name: '', whatsapp: '', packageType: 'Product Photoshoot (Studio/Location)', notes: '' });
      setSelectedDate('');
      setSelectedTime('');
    } catch (error: any) {
      setStatusMsg('❌ Terjadi kesalahan: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-black">
      
      {/* Input Nama */}
      <div>
        <label className="block font-bold mb-2 uppercase">Nama Lengkap</label>
        <input 
          type="text" 
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          placeholder="Nama Klien atau Brand"
        />
      </div>

      {/* Input WhatsApp */}
      <div>
        <label className="block font-bold mb-2 uppercase">Nomor WhatsApp</label>
        <input 
          type="tel" 
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          placeholder="08123456789"
        />
      </div>

      {/* Pilihan Paket */}
      <div>
        <label className="block font-bold mb-2 uppercase">Pilih Layanan</label>
        <select 
          name="packageType"
          value={formData.packageType}
          onChange={handleChange}
          className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
        >
          <option value="Product Photoshoot (Studio/Location)">Product Photoshoot (Studio/Location)</option>
          <option value="Video Shooting & Tracking">Video Shooting & Tracking</option>
          <option value="Event Coverage (Semarang / Jakarta)">Event Coverage (Semarang / Jakarta)</option>
          <option value="Custom Project">Custom Project / Lainnya</option>
        </select>
      </div>

      {/* Tanggal & Waktu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-2 uppercase">Tanggal</label>
          <input 
            type="date" 
            min={today}
            required
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
          />
        </div>
        <div>
          <label className="block font-bold mb-2 uppercase">Waktu</label>
          <select 
            required
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
          >
            <option value="">-- Pilih Jam --</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time} WIB</option>
            ))}
          </select>
        </div>
      </div>

      {/* Catatan */}
      <div>
        <label className="block font-bold mb-2 uppercase">Detail / Catatan (Opsional)</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full border-4 border-black p-3 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          placeholder="Ceritakan sedikit tentang produk atau konsep yang diinginkan..."
        ></textarea>
      </div>

      {/* Status Pesan */}
      {statusMsg && (
        <div className={`p-4 border-4 border-black font-bold ${statusMsg.includes('Berhasil') ? 'bg-[#43B581] text-white' : 'bg-[#FF5722] text-black'}`}>
          {statusMsg}
        </div>
      )}

      {/* Tombol Submit */}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-4 mt-2 bg-[#FFE800] border-4 border-black text-black font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50"
      >
        {loading ? 'Mengirim...' : 'Kirim Booking'}
      </button>
    </form>
  );
}