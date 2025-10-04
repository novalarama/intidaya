"use client";

import { motion } from "framer-motion";

export default function AgriSection() {
  return (
    <section id="agri" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Inti Daya Agri
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Divisi agribisnis kami berfokus pada jual-beli komoditas pertanian dari hulu ke hilir dengan kemitraan petani yang adil dan proses yang transparan.
              </p>
            </div>

            {/* Highlight Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200 space-y-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D7A52] font-bold text-lg">•</span>
                  <span>Komoditas utama: Tebu & Jagung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D7A52] font-bold text-lg">•</span>
                  <span>Kemitraan petani</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D7A52] font-bold text-lg">•</span>
                  <span>Transparansi timbang & kualitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1D7A52] font-bold text-lg">•</span>
                  <span>Pengiriman curah/karung</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#1D7A52] hover:brightness-110 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Ajukan Kerja Sama
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-br from-[#F0F7DE] to-white ring-1 ring-slate-200 p-8"
          >
            <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 flex items-center justify-center text-slate-500 text-center p-6">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#1D7A52] to-[#C3D641] opacity-20"></div>
                <p className="text-sm font-medium">
                  Ilustrasi/diagram rantai pasok Agri (placeholder)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Komoditas Kami Subsection */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-900">Komoditas Kami</h3>
          <p className="mt-2 text-slate-700">Adapun komoditas yang kami sediakan meliputi:</p>
          <div className="mt-4 space-y-4 text-slate-700 text-sm leading-relaxed">
            <div>
              <p className="font-semibold">1. Kacang-kacangan</p>
              <p>
                Kacang tanah, kacang merah, kacang hijau, kacang kupas, kacang almond, jagung biji, 
                kacang tolo (otok), biji wijen, dan berbagai jenis kacang-kacangan lainnya.
              </p>
            </div>
            <div>
              <p className="font-semibold">2. Rempah-rempah</p>
              <p>
                Kemiri, lada, ketumbar, cengkeh — tersedia dalam bentuk biji maupun bubuk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
