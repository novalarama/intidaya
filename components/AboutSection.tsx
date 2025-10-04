import { Package, Truck, Leaf, CheckCircle2 } from "lucide-react";
import { aboutFeatures } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Tentang Inti Daya</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Inti Daya adalah perusahaan distribusi FMCG yang berfokus pada kebutuhan pokok. 
            Kami bermitra langsung dengan petani dan produsen tepercaya agar pasok selalu tersedia, 
            mutu konsisten, dan harga tetap ramah di kantong.
          </p>
          
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {aboutFeatures.map((f, idx) => {
              const icons = [
                <Package key="package" className="h-5 w-5" />,
                <Truck key="truck" className="h-5 w-5" />,
                <Leaf key="leaf" className="h-5 w-5" />,
                <CheckCircle2 key="check" className="h-5 w-5" />
              ];
              
              return (
                <div 
                  key={f.title} 
                  className="rounded-xl p-4 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200"
                >
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    {icons[idx]}
                    {f.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="rounded-3xl bg-gradient-to-br from-[#F0F7DE] to-white ring-1 ring-slate-200 p-6">
          <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200" />
        </div>
      </div>
    </section>
  );
}
