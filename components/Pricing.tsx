import { CheckCircle } from "lucide-react";
import { packages } from "@/data/content";

interface PricingProps {
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
}

export default function Pricing({ selectedPackage, setSelectedPackage }: PricingProps) {
  return (
    <section id="packages" className="py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-black uppercase border-b-4 border-black inline-block pb-2">Paket & Harga</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`p-6 bg-white border-2 cursor-pointer transition-all ${
              selectedPackage === pkg.title ? 'border-black bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-gray-300 hover:border-black'
            }`}
            onClick={() => setSelectedPackage(pkg.title)}
          >
            <h3 className="text-lg font-bold text-black">{pkg.title}</h3>
            <p className="text-3xl font-black my-4 text-black">{pkg.price}</p>
            <p className="text-sm mb-6 text-gray-700">{pkg.desc}</p>
            <ul className="space-y-3">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black font-medium">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}