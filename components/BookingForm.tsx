'use client';

import { useState, useEffect } from 'react'; // Tambahan useEffect
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [bookedTimes, setBookedTimes] = useState<string[]>([]); // Menyimpan jam yang sudah laku

  const [formData, setFormData] = useState({
    name: '', whatsapp: '', packageType: 'Product Photoshoot', notes: ''
  });

  const today = new Date().toISOString().split("T")[0];

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 5; i <= 23; i++) {
      slots.push(`${i.toString().padStart(2, "0")}:00`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  // FITUR BARU: Mengecek jadwal yang sudah dibooking setiap tanggal berubah
  useEffect(() => {
    const fetchBookedTimes = async () => {
      if (!selectedDate) {
        setBookedTimes([]);
        return;
      }
      const { data, error } = await supabase
        .from('bookings')
        .select('time')
        .eq('date', selectedDate);

      if (data) {
        // Supabase biasanya menyimpan jam format HH:MM:SS, kita ambil depannya saja
        setBookedTimes(data.map((b) => b.time));
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

    if (!selectedDate || !selectedTime) {
      setStatusMsg('⚠️ Pilih tanggal dan jam terlebih dahulu!');
      setLoading(false); return;
    }

    try {
      const { error } = await supabase.from('bookings').insert([{
        date: selectedDate, time: selectedTime, name: formData.name,
        whatsapp: formData.whatsapp, package: formData.packageType, notes: formData.notes
      }]);

      if (error) throw error;

      setStatusMsg('✅ Booking Berhasil! Saya akan segera menghubungi Anda.');
      setFormData({ name: '', whatsapp: '', packageType: 'Product Photoshoot', notes: '' });
      setSelectedDate(''); setSelectedTime('');
      
      // Update jam yang di-disable secara langsung
      setBookedTimes([...bookedTimes, selectedTime]);
    } catch (error: any) {
      setStatusMsg('❌ Terjadi kesalahan: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-black">
      <div>
        <label className="block font-bold mb-2 uppercase">Nama Lengkap</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none" />
      </div>

      <div>
        <label className="block font-bold mb-2 uppercase">Nomor WhatsApp</label>
        <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none" />
      </div>

      <div>
        <label className="block font-bold mb-2 uppercase">Pilih Layanan</label>
        <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none font-bold">
          <option value="Product Photoshoot">Product Photoshoot</option>
          <option value="Video Shooting & Tracking">Video Shooting & Tracking</option>
          <option value="Event Coverage">Event Coverage</option>
          <option value="Custom Project">Custom Project / Lainnya</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-2 uppercase">Tanggal</label>
          <input type="date" min={today} required value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none font-bold" />
        </div>
        <div>
          <label className="block font-bold mb-2 uppercase">Waktu</label>
          <select required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none font-bold disabled:bg-gray-200">
            <option value="">-- Pilih Jam --</option>
            {timeSlots.map((time) => {
              // Cek apakah jam ini ada di dalam database
              const isBooked = bookedTimes.some(booked => booked.startsWith(time));
              return (
                <option key={time} value={time} disabled={isBooked}>
                  {time} WIB {isBooked ? '(Telah Dibooking)' : ''}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-bold mb-2 uppercase">Detail Tambahan</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full border-4 border-black p-3 bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none"></textarea>
      </div>

      {statusMsg && (
        <div className={`p-4 border-4 border-black font-bold ${statusMsg.includes('Berhasil') ? 'bg-[#43B581] text-white' : 'bg-[#FF5722] text-black'}`}>
          {statusMsg}
        </div>
      )}

      <button type="submit" disabled={loading} className="w-full py-4 mt-2 bg-white border-4 border-black text-black font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50">
        {loading ? 'Mengirim...' : 'Kirim Booking'}
      </button>
    </form>
  );
}