import type { Product, NavItem, BrandColors } from './types';

// WhatsApp number
export const WA_NUMBER = '6281359941169';

// Addresses
export const addresses = [
  "Dsn. Ringinanyar RT001/RW002, Ds. Ringinanyar, Kec. Ponggok, Kab. Blitar",
  "Dsn. Bendorejo RT001/RW003, Ds. Gembongan, Kec. Ponggok, Kab. Blitar"
];

// Brand colors
export const brand: BrandColors = {
  bg: "from-[#0E3F2D] via-[#145C3D] to-[#D0E36C]",
  primary: "#145C3D",
  primarySoft: "#1D7A52",
  accent: "#C3D641",
  accentSoft: "#E8F3A1",
  ink: "#0F172A",
  paper: "#F8FAF7",
};

// Products data
export const products: Product[] = [
  { name: "Gula NusaKita (Pabrik Ngadirejo)", tag: "Gula", image: "/assets/img-gulanusakita.png" },
  { name: "Garam Tjap Jempol", tag: "Garam", image: "/assets/img-garam-tjap-jempol.png" },
  { name: "Garam Tjap Kapal", tag: "Garam", image: "/assets/img-garam-tjap-kapal.png" },
  { name: "Minyak Kunci Mas", tag: "Minyak Goreng", image: "/assets/img-minyak-kuncimas.png" },
  { name: "Minyak Rosebrand 1L", tag: "Minyak Goreng", image: "/assets/img-minyak-rosebrand-1l.png" },
  { name: "Minyak Rosebrand 2L", tag: "Minyak Goreng", image: "/assets/img-minyak-rosebrand-2l.png" },
  { name: "Tepung Rosebrand", tag: "Tepung", image: "/assets/img-tepung-rosebrand.png" },
  { name: "Sun Kara", tag: "Santan", image: "/assets/img-sunkara.png" },
  { name: "Beras Selip Lokal (Premium)", tag: "Beras", image: "/assets/img-berassliplokal.png" },
  { name: "Beras Cap Batu Mulia", tag: "Beras", image: "/assets/img-beras-cap-batumulia.png" },
  { name: "Beras Cap Sushi", tag: "Beras", image: "/assets/img-beras-cap-sushi.png" },
  { name: "Beras Selip Lokal (Medium)", tag: "Beras", image: "/assets/img-berassliplokal.png" },
  { name: "Telur Asin", tag: "Telur Asin", image: "/assets/img-telurasin.png" },
];

// Navigation items
export const navItems: NavItem[] = [
  { href: "#produk", label: "Produk" },
  { href: "#agri", label: "Agri" },
  { href: "#tentang", label: "Tentang" },
  { href: "#visi-misi", label: "Visi & Misi" },
  { href: "#kemitraan", label: "Kemitraan" },
  { href: "#kontak", label: "Kontak" },
];

// Product filters
export const productFilters = [
  "Semua",
  "Beras",
  "Gula",
  "Minyak Goreng",
  "Garam",
  "Tepung",
  "Santan",
  "Telur Asin"
];

// About features
export const aboutFeatures = [
  { title: "Stok Stabil", desc: "Kapasitas gudang dan pergudangan mitra" },
  { title: "Distribusi Tepat Waktu", desc: "Rute efisien, armada terjadwal" },
  { title: "Berkelanjutan", desc: "Kemitraan adil dengan petani & UMKM" },
  { title: "Kualitas Terjamin", desc: "Pengawasan mutu konsisten" },
];

// Vision mission
export const missionItems = [
  "Menyediakan produk berkualitas, aman, dan terjangkau.",
  "Mendukung pemberdayaan petani/UMKM melalui kemitraan jangka panjang.",
  "Membangun sistem distribusi yang cepat, tepat, dan efisien.",
  "Menjaga kepercayaan pelanggan melalui layanan profesional.",
];

// Partnership benefits
export const partnershipBenefits = [
  "Harga bersaing",
  "Rute efisien",
  "Promo bersama",
  "Pelaporan transparan"
];

// Logistics features
export const logisticsFeatures = [
  { title: "Lead Time Cepat", desc: "Sesuaikan jadwal drop sesuai kebutuhan" },
  { title: "Gudang Mitra", desc: "Stok buffer untuk peak season" },
  { title: "Integritas Harga", desc: "Transparan & kompetitif" },
  { title: "Layanan Pelanggan", desc: "Respons < 1×24 jam" },
];
