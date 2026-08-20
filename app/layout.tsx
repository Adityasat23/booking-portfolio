import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foto Bareng Mas Adit | Graduation Photographer",
  description: "Booking jasa foto wisuda Semarang. Santai, natural, dan bebas eksplor spot. Amankan slotmu sekarang!",
  openGraph: {
    title: "Foto Bareng Mas Adit | Graduation Photographer",
    description: "Booking jasa foto wisuda Semarang. Santai, natural, dan bebas eksplor spot. Amankan slotmu sekarang!",
    // URL di bawah ini wajib link lengkap agar foto muncul di WA
    images: ["https://booking-portfolio.adityasatriapratama29.workers.dev/images/10.webp"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}