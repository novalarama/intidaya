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
                Divisi agribisnis kami berfokus pada jual-beli komoditas
                pertanian dari hulu ke hilir dengan kemitraan petani yang adil
                dan proses yang transparan.
              </p>
            </div>

            {/* Highlight Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200 space-y-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#1D7A52] font-bold text-lg">•</span>
                  <span>Komoditas utama: Tebu & Jagung Pipil</span>
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
            {/* Supply Chain Diagram */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 text-center">Rantai Pasok Agri</h4>
              
              <div className="flex flex-col gap-4">
                {/* Petani */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#1D7A52] to-[#2FA36A] flex items-center justify-center text-white shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-xl bg-white ring-1 ring-slate-200 p-3">
                    <div className="font-semibold text-slate-900">Petani</div>
                    <div className="text-xs text-slate-600">Sumber komoditas berkualitas</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-[#1D7A52]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>

                {/* Inti Daya */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#C3D641] to-[#E8F3A1] flex items-center justify-center shadow-md">
                    <img src="/intidaya.ico" alt="Inti Daya" className="w-10 h-10 rounded-lg" />
                  </div>
                  <div className="flex-1 rounded-xl bg-white ring-1 ring-slate-200 p-3">
                    <div className="font-semibold text-slate-900">Inti Daya Agri</div>
                    <div className="text-xs text-slate-600">Pengadaan & distribusi</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-[#1D7A52]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)"/>
                  </svg>
                </div>

                {/* Pabrik/Industri */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#2FA36A] to-[#1D7A52] flex items-center justify-center text-white shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-xl bg-white ring-1 ring-slate-200 p-3">
                    <div className="font-semibold text-slate-900">Pabrik/Industri</div>
                    <div className="text-xs text-slate-600">Pengolahan & produksi</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Komoditas Kami Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Komoditas Kami
            </h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Adapun komoditas yang kami sediakan meliputi:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Kacang-kacangan Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D7A52] to-[#C3D641] flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Kacang-kacangan
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Kacang tanah, kacang merah, kacang hijau, kacang kupas,
                    kacang almond, jagung biji, kacang tolo (otok), biji wijen,
                    dan berbagai jenis kacang-kacangan lainnya.
                  </p>
                </div>
              </div>
            </div>

            {/* Rempah-rempah Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D7A52] to-[#C3D641] flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Rempah-rempah
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Kemiri, lada, ketumbar, cengkeh tersedia dalam bentuk biji
                    maupun bubuk.
                  </p>
                </div>
              </div>
            </div>

            {/* Beras Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D7A52] to-[#C3D641] flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Beras
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Berbagai jenis beras berkualitas untuk memenuhi kebutuhan pasar lokal dan regional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
