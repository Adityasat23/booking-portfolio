'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BookingForm() {
  // Secara otomatis terpilih tanggal 12
  const [selectedDate, setSelectedDate] = useState('2026-09-12'); 
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [bookedTimes, setBookedTimes] = useState<string[]>([]); 

  const [formData, setFormData] = useState({
    name: '', whatsapp: '', packageType: 'Personal Grad', notes: ''
  });

  // Slot jam ala bioskop (Dari jam 07:00 sampai 17:00)
  const timeSlots = [
    "07:00", "08:00", "09:00", "10:00", "11:00", 
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  // Mengecek jadwal yang sudah dibooking setiap klien mengganti hari
  useEffect(() => {
    const fetchBookedTimes = async () => {
      if (!supabaseUrl) {
        setStatusMsg('⚠️ Sistem belum terhubung ke database. Cek pengaturan Cloudflare Anda.');
        return;
      }
      
      const { data, error } = await supabase
        .from('bookings')
        .select('time')
        .eq('date', selectedDate);

      if (data) {
        setBookedTimes(data.map((b) => b.time.substring(0, 5))); // Ambil format HH:MM
      }
    };
    fetchBookedTimes();
  }, [selectedDate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    if (!supabaseUrl) {
      setStatusMsg('❌ Error: Supabase URL tidak ditemukan. (TypeError: Failed to fetch)');
      setLoading(false); return;
    }

    if (!selectedTime) {
      setStatusMsg('⚠️ Pilih jam tayang terlebih dahulu!');
      setLoading(false); return;
    }

    try {
      const { error } = await supabase.from('bookings').insert([{
        date: selectedDate, time: selectedTime, name: formData.name,
        whatsapp: formData.whatsapp, package: formData.packageType, notes: formData.notes
      }]);

      if (error) throw error;

      setStatusMsg('✅ Tiket Slot Berhasil Dipesan! Saya akan chat Anda via WA untuk DP.');
      setFormData({ name: '', whatsapp: '', packageType: 'Personal Grad', notes: '' });
      setSelectedTime('');
      setBookedTimes([...bookedTimes, selectedTime]);
    } catch (error: any) {
      setStatusMsg('❌ Terjadi kesalahan: ' + error.message);
    } finally {
      setLoading(false);
    }
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
            {timeSlots.map((time) => {
              const isBooked = bookedTimes.includes(time) || bookedTimes.includes(`${time}:00`);
              return (
                <option key={time} value={time} disabled={isBooked}>
                  {time} WIB {isBooked ? '❌ (SOLD OUT)' : '✅ (TERSEDIA)'}
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

      {statusMsg && (
        <div className={`p-4 border-4 border-black font-black text-lg text-center ${statusMsg.includes('Berhasil') ? 'bg-[#43B581] text-white' : 'bg-[#FF5722] text-black'}`}>
          {statusMsg}
        </div>
      )}

      <button type="submit" disabled={loading} className="w-full py-5 mt-4 bg-black text-white border-4 border-black font-black text-2xl uppercase shadow-[8px_8px_0px_0px_#43B581] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50">
        {loading ? 'MENGUNCI SLOT...' : 'AMANKAN SLOT SEKARANG'}
      </button>
    </form>
  );
}