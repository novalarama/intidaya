import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inti Daya - Distributor FMCG Terpercaya Indonesia",
  description: "Inti Daya adalah distributor FMCG yang menyalurkan kebutuhan pokok berkualitas dari produsen lokal ke seluruh Indonesia. Beras, gula, minyak goreng, garam, dan produk FMCG lainnya dengan harga bersahabat.",
  keywords: ["distributor FMCG", "beras", "gula", "minyak goreng", "garam", "distributor Indonesia", "kebutuhan pokok", "produk lokal"],
  authors: [{ name: "Inti Daya" }],
  openGraph: {
    title: "Inti Daya - Distributor FMCG Terpercaya Indonesia",
    description: "Distributor kebutuhan pokok berkualitas dari produsen lokal ke seluruh Indonesia",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
