import { WA_NUMBER } from './constants';

// Handle tanya stok produk
export const handleTanyaStok = (productName: string) => {
  const message = `Halo, saya ingin menanyakan ketersediaan stok untuk produk:\n\n*${productName}*\n\nMohon informasi harga dan minimum order. Terima kasih.`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
};

// Handle minta price list
export const handlePriceList = () => {
  const message = `Halo, saya tertarik untuk mendapatkan *Price List* produk Inti Daya. Mohon informasinya. Terima kasih.`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
};

// Handle kemitraan
export const handleKemitraan = () => {
  const message = `Halo, saya tertarik untuk *bermitra* dengan Inti Daya. Mohon informasi lebih lanjut mengenai program kemitraan. Terima kasih.`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
};

// Handle tanya ketersediaan umum
export const handleTanyaKetersediaan = () => {
  const message = `Halo, saya ingin menanyakan ketersediaan produk Inti Daya. Terima kasih.`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
};

// Format dan kirim form kontak ke WhatsApp
export const sendContactForm = (formData: {
  nama: string;
  perusahaan: string;
  kontak: string;
  pesan: string;
}) => {
  const message = `*Permintaan Informasi - Inti Daya*

*Nama:* ${formData.nama}
*Perusahaan:* ${formData.perusahaan}
*Kontak:* ${formData.kontak}

*Pesan:*
${formData.pesan}`;

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waLink, '_blank');
};
