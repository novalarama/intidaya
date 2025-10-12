"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products, productFilters } from "@/lib/constants";
import { handleTanyaStok, handlePriceList } from "@/lib/whatsapp";

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  // Filter products based on active filter
  const filteredProducts = activeFilter === "Semua" 
    ? products 
    : products.filter(p => p.tag === activeFilter);

  return (
    <section id="produk" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Produk Unggulan</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Stok siap kirim, varian lengkap, dan kualitas terkurasi. Harga transparan, cocok untuk grosir, retail, dan HORECA.
            </p>
          </div>
          <button 
            onClick={handlePriceList} 
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#C3D641] to-[#E8F3A1] hover:brightness-95 shadow"
          >
            Minta Price List <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {productFilters.map((f) => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-3 py-1.5 transition-colors ${
                activeFilter === f
                  ? "bg-[#1D7A52] text-white border-transparent" 
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((p, idx) => (
            <motion.div 
              key={p.name} 
              initial={{ opacity: 0, y: 18 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-64 bg-white flex items-center justify-center p-6 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent"></div>
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-slate-600">{p.tag}</div>
                <h3 className="mt-1 font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-3 flex items-center justify-end">
                  <button 
                    onClick={() => handleTanyaStok(p.name)} 
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#1D7A52] hover:text-[#145C3D]"
                  >
                    Tanya stok <ChevronRight className="h-4 w-4"/>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <button 
            onClick={handlePriceList} 
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#C3D641] to-[#E8F3A1] hover:brightness-95 shadow"
          >
            Minta Price List <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
