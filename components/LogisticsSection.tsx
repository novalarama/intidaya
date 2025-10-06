import { MapPin } from "lucide-react";
import { logisticsFeatures } from "@/lib/constants";

export default function LogisticsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Jangkauan & Logistik</h2>
              <p className="mt-3 text-slate-700">
                Pengiriman 24-72 jam (area tertentu), jadwal fleksibel untuk modern trade, grosir, dan HORECA. 
                Rute efisien, laporan jelas, tanpa ribet.
              </p>            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {logisticsFeatures.map((i) => (
                <div 
                  key={i.title} 
                  className="rounded-xl p-4 bg-gradient-to-br from-white to-[#F6FAEA] ring-1 ring-slate-200"
                >
                  <div className="font-semibold text-slate-900">{i.title}</div>
                  <div className="text-sm text-slate-600">{i.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.827084017258!2d112.10681026832864!3d-7.997872344049703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78f1acbfdebef7%3A0x1e089739ad688773!2sUD.%20Ana%20Barokah!5e0!3m2!1sid!2sid!4v1759715449313!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
