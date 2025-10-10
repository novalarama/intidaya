import { navItems } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900">
                {n.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Inti Daya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
