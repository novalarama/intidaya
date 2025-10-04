import { ChevronRight } from "lucide-react";
import { partnershipBenefits } from "@/lib/constants";
import { handleKemitraan } from "@/lib/whatsapp";

export default function PartnershipSection() {
  return (
    <section id="kemitraan" className="py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-gradient-to-r from-[#1D7A52] to-[#9ED46B]">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Tumbuh Bersama, Menjangkau Lebih Jauh
              </h3>
              <p className="mt-3 text-white/90">
                Kami membuka kemitraan dengan produsen, petani, dan pemilik merek untuk memperluas 
                jangkauan ke pasar yang tepat. Nikmati dukungan perencanaan pasok, aktivasi penjualan, 
                dan distribusi end-to-end yang transparan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button 
                  onClick={handleKemitraan} 
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D7A52] px-5 py-3 font-semibold shadow hover:bg-slate-50"
                >
                  Ajukan Kemitraan <ChevronRight className="h-4 w-4"/>
                </button>
                <a 
                  href="#produk" 
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/40 px-5 py-3 font-semibold hover:bg-white/20"
                >
                  Lihat Katalog
                </a>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)]">
              <div className="grid sm:grid-cols-2 gap-4">
                {partnershipBenefits.map((b) => (
                  <div key={b} className="rounded-xl bg-white/15 ring-1 ring-white/30 text-white p-4">
                    <div className="font-semibold">{b}</div>
                    <div className="text-sm opacity-80">Amanah & akuntabel</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
