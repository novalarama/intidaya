"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/intidaya.ico" 
              alt="Inti Daya Logo" 
              className="h-8 w-8 rounded-xl shadow"
            />
            <span className="font-semibold tracking-tight text-slate-900">Inti Daya</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a 
                key={n.href} 
                href={n.href} 
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#C3D641] to-[#E8F3A1] hover:brightness-95 shadow-sm"
            >
              Hubungi Kami
            </a>
          </nav>
          
          <button 
            className="md:hidden p-2" 
            aria-label="Toggle menu" 
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <a 
                key={n.href} 
                href={n.href} 
                className="py-2 text-sm font-medium" 
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-[#C3D641] to-[#E8F3A1] shadow-sm"
            >
              <Phone className="h-4 w-4" /> Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
