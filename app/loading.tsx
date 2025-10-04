export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="text-center">
        {/* Logo/Brand Name with gradient */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
            Inti Daya
          </h1>
          <p className="text-slate-600 mt-2 text-sm">Mitra Terpercaya Distribusi FMCG</p>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="text-slate-600 animate-pulse">Memuat halaman...</p>
      </div>
    </div>
  );
}
