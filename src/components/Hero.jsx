const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
          alt="Stylish red running shoe"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Find Your Perfect Pair
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Step up your game with our latest collection of high-performance and stylish footwear.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="inline-block bg-gray-700 text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;