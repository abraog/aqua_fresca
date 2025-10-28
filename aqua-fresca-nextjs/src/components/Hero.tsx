import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center pt-20"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 112, 192, 0.85), rgba(0, 112, 192, 0.85)), url('/image/fresca.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Pure Spring Water from Nature&apos;s Source
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Aqua Fresca brings you the purest spring water from the pristine
            mountains of Timor-Leste, bottled with care to preserve its natural
            minerals and refreshing taste.
          </p>
          <div className="pt-4">
            <Link
              href="#products"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
