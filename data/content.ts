export const packages = [
  {
    id: "personal",
    title: "🎓 PERSONAL GRAD",
    price: "Rp 350.000",
    desc: "Durasi 1 Jam | Bebas ganti spot kampus. 1 Wisudawan.",
    features: ["25 Foto Edit Profesional", "Retouching wajah", "Hapus objek bocor"],
  },
  {
    id: "couple",
    title: "🎓 COUPLE / BESTIE",
    price: "Rp 500.000",
    desc: "Durasi 1 Jam | 2 Wisudawan (+ Keluarga). Sesi berdua & solo.",
    features: ["Patungan cuma 250k/orang", "35 Foto Edit Profesional", "Termasuk hapus objek"],
  },
  {
    id: "squad",
    title: "🎓 SQUAD CIRCLE",
    price: "Rp 700.000",
    desc: "Durasi 1,5 Jam | 3 - 5 Wisudawan (+ Keluarga).",
    features: ["Sesi grup & masing-masing solo", "50 Foto Edit Profesional", "Termasuk hapus objek"],
  },
];

// Jadwal diperinci dari jam 07:00 sampai 17:00
export const availableSlots = [
  { 
    date: "Rabu, 11 Sept 2026", 
    times: [
      { time: "07:00", isBooked: false },
      { time: "08:30", isBooked: true }, // Contoh sudah dibooking
      { time: "10:00", isBooked: false },
      { time: "13:00", isBooked: false },
      { time: "14:30", isBooked: false },
      { time: "16:00", isBooked: false },
    ] 
  },
  { 
    date: "Kamis, 12 Sept 2026", 
    times: [
      { time: "07:00", isBooked: false },
      { time: "08:30", isBooked: false },
      { time: "10:00", isBooked: false },
      { time: "13:00", isBooked: true },
      { time: "14:30", isBooked: false },
      { time: "16:00", isBooked: true },
    ] 
  },
];

// Data untuk Portfolio
export const portfolioImages = [
  { id: 1, src: "/portfolio/hasil-1.jpg", alt: "Wisuda Undip" },
  { id: 2, src: "/portfolio/hasil-2.jpg", alt: "Wisuda Unnes" },
  { id: 3, src: "/portfolio/hasil-3.jpg", alt: "Wisuda Udinus" },
  { id: 4, src: "/portfolio/hasil-4.jpg", alt: "Couple Grad" },
];