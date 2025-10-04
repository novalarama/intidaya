import { CheckCircle2 } from "lucide-react";
import { missionItems } from "@/lib/constants";

export default function VisionMissionSection() {
  return (
    <section id="visi-misi" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Visi & Misi</h2>
        
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200">
            <h3 className="font-semibold text-slate-900">Visi</h3>
            <p className="mt-2 text-slate-700 text-sm">
              Menjadi distributor FMCG terdepan yang menghubungkan produsen lokal 
              dengan pasar nasional secara efisien, transparan, dan berkelanjutan.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {missionItems.map((m, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#1D7A52] flex-shrink-0" />
                  <p className="text-sm text-slate-700">{m}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
