import { useState, useEffect } from "react";
import { Calendar, Clock, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

interface BookingProps {
  selectedPackage: string;
}

export default function BookingForm({ selectedPackage }: BookingProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState<{ time: string; status: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Dapatkan tanggal hari ini untuk membatasi input kalender agar tidak bisa pilih masa lalu
  const today = new Date().toISOString().split("T")[0]; 

  // Generate Jam dari 05:00 sampai 23:00
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 5; i <= 23; i++) {
      slots.push(`${i.toString().padStart(2, "0")}:00`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  // Fetch data dari database setiap kali user mengubah tanggal
  useEffect(() => {
    if (!selectedDate) return;
    
    const fetchSlots = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select("booking_time, status, created_at")
        .eq("booking_date", selectedDate);

      if (data) {
        // Logika expired: Jika pending dan sudah lewat 1 jam (60 menit), anggap "Free" kembali
        const activeBookings = data.filter((b: any) => {
          if (b.status === "booked") return true;
          const bookingTime = new Date(b.created_at).getTime();
          const now = new Date().getTime();
          const diffInMinutes = Math.floor((now - bookingTime) / 60000);
          return diffInMinutes < 60; // Hanya amankan slot selama 60 menit
        });

        const mappedSlots = activeBookings.map((b: any) => ({
          time: b.booking_time,
          status: b.status,
        }));
        setBookedSlots(mappedSlots);
      }
      setLoading(false);
    };

    fetchSlots();
  }, [selectedDate]);

  const handleBookNow = async () => {
    if (!selectedPackage || !selectedDate || !selectedTime) {
      alert("Harap pilih Paket, Tanggal, dan Jam!");
      return;
    }

    // 1. Simpan ke database dengan status "pending" (Lock Slot)
    const { error } = await supabase.from("bookings").insert([
      {
        booking_date: selectedDate,
        booking_time: selectedTime,
        package_name: selectedPackage,
        status: "pending",
      },
    ]);

    if (error) {
      alert("Gagal mem-booking slot. Silakan coba lagi.");
      return;
    }

    // 2. Arahkan ke WhatsApp
    const phoneNumber = "628XXXXXXXXXX"; // Nomor Anda
    const message = `Halo, saya ingin booking:\n\nPaket: ${selectedPackage}\nTanggal: ${selectedDate}\nJam: ${selectedTime}\n\nSaya akan segera transfer DP.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    
    // Refresh slot agar terkunci di tampilan user
    setSelectedTime("");
    setSelectedDate(selectedDate); // Trigger useEffect ulang
  };

  return (
    <section id="booking" className="bg-white p-6 md:p-10 border-2 border-black my-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black pb-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight">Pilih Jadwal Booking</h2>
        <p className="text-black font-bold mt-2 bg-yellow-300 inline-block px-3 py-1 border border-black text-sm">
          Slot dikunci selama 1 Jam untuk pembayaran DP.
        </p>
      </div>
      
      <div className="space-y-8">
        {/* INPUT TANGGAL (Bisa pilih kapanpun ke depan) */}
        <div className="space-y-2">
          <label className="font-bold text-lg text-black flex items-center gap-2">
            <Calendar className="w-5 h-5"/> Pilih Tanggal
          </label>
          <input 
            type="date" 
            min={today}
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedTime(""); // Reset jam jika ganti tanggal
            }}
            className="w-full md:w-1/2 p-4 border-2 border-black bg-gray-50 text-black font-bold outline-none focus:bg-white transition-colors cursor-pointer"
          />
        </div>

        {/* INPUT JAM (05:00 - 23:00) */}
        {selectedDate && (
          <div className="space-y-4 pt-4 border-t-2 border-dashed border-gray-300">
            <h3 className="font-bold text-lg text-black flex items-center gap-2">
              <Clock className="w-5 h-5"/> Pilih Jam
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {timeSlots.map((time, i) => {
                const dbSlot = bookedSlots.find((b: any) => b.time === time);
                const isSelected = selectedTime === time;
                
                // Tentukan status UI
                let btnStyle = "bg-white border-black text-black hover:bg-gray-100";
                let statusText = "Free";
                let isDisabled = false;

                if (dbSlot?.status === "booked") {
                  btnStyle = "bg-gray-200 border-gray-400 text-gray-500";
                  statusText = "Booked";
                  isDisabled = true;
                } else if (dbSlot?.status === "pending") {
                  btnStyle = "bg-yellow-100 border-yellow-500 text-yellow-700";
                  statusText = "Pending";
                  isDisabled = true;
                } else if (isSelected) {
                  btnStyle = "bg-black border-black text-white";
                }

                return (
                  <button
                    key={i}
                    disabled={isDisabled}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm font-bold border-2 transition-colors flex flex-col items-center justify-center gap-1 ${btnStyle}`}
                  >
                    <span className="text-lg">{time}</span>
                    <span className="text-[10px] uppercase">{statusText}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <button 
        onClick={handleBookNow} 
        disabled={!selectedDate || !selectedTime || !selectedPackage}
        className="mt-10 w-full py-5 bg-[#25D366] hover:bg-[#1DA851] disabled:bg-gray-300 disabled:cursor-not-allowed border-2 border-black text-black font-black text-lg uppercase transition-transform hover:-translate-y-1 active:translate-y-0"
      >
        Lock Slot & Pesan via WA
      </button>
    </section>
  );
}