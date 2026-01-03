export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-12 py-4 flex items-center justify-between">
        
        {/* Left */}
        <h1 className="text-2xl font-extrabold text-pink-500">
          For You ❤️
        </h1>

        {/* Center */}
        <p className="text-gray-300 text-4xl italic hidden md:block">
          Every moment with you is my favorite
        </p>

        {/* Right */}
        <div className="flex items-center gap-1 text-pink-500 font-bold animate-pulse">
          <span>Love</span>
          <span className="text-xl">💖</span>
        </div>
      </div>
    </nav>
  );
}
