"use client";

import { motion } from "framer-motion";
import { Leaf, CheckCircle2, Truck, ChevronRight } from "lucide-react";
import { handleTanyaKetersediaan } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#F8FCF5] via-white to-[#FAFDF7]">
      <div className="pointer-events-none absolute -top-20 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-10 bg-gradient-to-br from-[#1D7A52] to-[#E5F376]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-8 bg-gradient-to-tr from-[#E5F376] to-[#2FA36A]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              <Leaf className="h-3 w-3" /> Distributor FMCG • Pasok Berkelanjutan
            </span>
            
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Dari <span className="bg-gradient-to-r from-[#1D7A52] to-[#C3D641] bg-clip-text text-transparent">produsen lokal</span> ke rak nasional, lebih cepat, lebih mudah, lebih jujur.
            </h1>
            
            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-700">
              Kami menyalurkan kebutuhan pokok seperti beras, gula, minyak goreng, garam, dan lainnya langsung dari mitra produsen dan petani lokal. Fokus kami sederhana: kualitas terjaga, harga bersahabat, pelayanan sigap.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="#produk" 
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-[#1D7A52] hover:brightness-110 shadow-md"
              >
                Lihat Produk <ChevronRight className="h-4 w-4" />
              </a>
              <button 
                onClick={handleTanyaKetersediaan} 
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#C3D641] to-[#E8F3A1] hover:brightness-95 shadow"
              >
                Tanyakan Ketersediaan <Truck className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4"/> Harga bersahabat
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4"/> Kirim 24-72 jam
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4"/> Mitra tepercaya
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-white/70 ring-1 ring-slate-200 shadow-xl p-4 sm:p-6 grid grid-cols-2 gap-3">
              {["Beras","Gula","Minyak","Garam"].map((cat) => (
                <div key={cat} className="rounded-2xl p-4 bg-gradient-to-br from-white to-[#F3F8E8] ring-1 ring-slate-200">
                  <div className="h-24 sm:h-28 rounded-xl bg-gradient-to-tr from-[#E8F3A1] to-[#CDE97A]" />
                  <div className="mt-3 font-semibold">{cat}</div>
                  <div className="text-xs text-slate-600">Kualitas terjamin • Ready stock</div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl bg-white/90 ring-1 ring-slate-200 px-3 py-2 shadow-md text-xs flex items-center gap-2">
              <Truck className="h-3.5 w-3.5"/> Lead time 24-72 jam (wilayah tertentu)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
