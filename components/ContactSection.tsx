"use client";

import { useState } from "react";
import { Phone, ChevronRight, MapPin } from "lucide-react";
import { WA_NUMBER, addresses } from "@/lib/constants";
import { sendContactForm } from "@/lib/whatsapp";
import type { FormData } from "@/lib/types";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    perusahaan: '',
    kontak: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactForm(formData);
    
    // Reset form
    setFormData({
      nama: '',
      perusahaan: '',
      kontak: '',
      pesan: ''
    });
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Butuh pasok cepat? Hubungi kami
            </h2>
            <p className="mt-2 text-slate-700">
              Minta price list, cek ketersediaan, atau ajukan kemitraan distribusi, semua bisa dari sini.
            </p>
            
            <div className="mt-6 space-y-4">
              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${WA_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 w-fit rounded-full px-5 py-3 font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-lg"
              >
                <Phone className="h-5 w-5"/> +62 813-5994-1169
              </a>

              {/* Addresses */}
              <div className="space-y-3">
                <div className="font-semibold text-slate-900 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Alamat Kami:
                </div>
                {addresses.map((addr, idx) => (
                  <div key={idx} className="pl-6 text-sm text-slate-700 leading-relaxed">
                    {idx + 1}. {addr}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-xs text-slate-500">
              Respons cepat pada hari kerja 09.00-17.00 WIB.
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input 
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C3D641]" 
                  placeholder="Nama Anda" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-700">Perusahaan</label>
                <input 
                  name="perusahaan"
                  value={formData.perusahaan}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C3D641]" 
                  placeholder="Nama Perusahaan" 
                />
              </div>
              
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Email / No. WhatsApp <span className="text-red-500">*</span>
                </label>
                <input 
                  name="kontak"
                  value={formData.kontak}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C3D641]" 
                  placeholder="email@domain.com / 08xx" 
                />
              </div>
              
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  required
                  rows={4} 
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C3D641]" 
                  placeholder="Tulis kebutuhan Anda (produk, kuantitas, lokasi, dll)" 
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-lg"
            >
              <Phone className="h-4 w-4" /> Kirim via WhatsApp <ChevronRight className="h-4 w-4" />
            </button>
            
            <p className="mt-2 text-xs text-slate-500">
              Dengan mengirimkan formulir ini Anda menyetujui dihubungi oleh tim kami via WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
