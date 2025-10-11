import { Phone, MapPin } from "lucide-react";
import { navItems, WA_NUMBER, addresses } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/intidaya.ico" 
                alt="Inti Daya Logo" 
                className="h-7 w-7 rounded-lg shadow"
              />
              <div>
                <div className="font-semibold text-slate-900">Inti Daya</div>
                <div className="text-xs text-slate-500">Distribusi FMCG • Indonesia</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed">
              Distributor kebutuhan pokok berkualitas dengan layanan cepat dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-slate-900 mb-3">Quick Links</div>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-slate-900 text-xs">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-slate-900 mb-3">Kontak</div>
            <div className="space-y-2 text-xs">
              <a 
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900"
              >
                <Phone className="h-3 w-3" /> +62 813-5994-1169
              </a>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    {addresses.map((addr, idx) => (
                      <div key={idx} className="leading-relaxed">{addr}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Inti Daya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
