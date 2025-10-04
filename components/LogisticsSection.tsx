import { MapPin } from "lucide-react";
import { logisticsFeatures } from "@/lib/constants";

export default function LogisticsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Jangkauan & Logistik</h2>
            <p className="mt-3 text-slate-700">
              Pengiriman 24–72 jam (area tertentu), jadwal fleksibel untuk modern trade, grosir, dan HORECA. 
              Rute efisien, laporan jelas, tanpa ribet.
            </p>
            
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {logisticsFeatures.map((i) => (
                <div 
                  key={i.title} 
                  className="rounded-xl p-4 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200"
                >
                  <div className="font-semibold text-slate-900">{i.title}</div>
                  <div className="text-sm text-slate-600">{i.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-[#F0F7DE] to-white ring-1 ring-slate-200 p-6">
            <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 flex items-center justify-center text-slate-500">
              <MapPin className="h-5 w-5 mr-2"/> Peta cakupan/armada (placeholder)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
