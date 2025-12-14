import React from "react";
import { useCart } from "../Components/CartContext";
import heroImg from "../assets/hero.jpg";
import chefImg from "../assets/chef.jpg";
import idliImg from "../assets/idli.jpg";
import jamun from "../assets/jamun.jpg";
import thali from "../assets/thali.jpg";

const signatureDishes = [
  {
    name: "Diamond Noir",
    img: idliImg,
    desc: "Top: Bergamot, Cardamom | Heart: Oud, Rose | Base: Amber, Musk. Bold sophistication for the modern gentleman.",
    price: 4999
  },
  {
    name: "Crystal Bloom",
    img: jamun,
    desc: "Top: Pear, Jasmine | Heart: Orchid, Violet | Base: Vanilla, Sandalwood. Feminine elegance that captivates.",
    price: 4999
  },
  {
    name: "Eternal Spark",
    img: thali,
    desc: "Top: Citrus, Ginger | Heart: Lavender, Vetiver | Base: Patchouli, Cedar. Unisex versatility for every occasion.",
    price: 5299
  },
];

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (dish) => {
    addToCart({
      name: dish.name,
      price: dish.price,
      image: dish.img
    });
  };

  return (
    <section className="bg-[#0C0C0C] pt-8 sm:pt-12 lg:pt-16 pb-0 px-4 min-h-screen flex flex-col">
      {/* Hero and Founder */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mx-auto gap-8 lg:gap-12">
        {/* Left: Hero Text and Founder */}
        <div className="md:w-1/2 text-left w-full">
          <p className="text-xs sm:text-sm tracking-widest text-[#DCCA87] mb-2">DIAMOND FRAGRANCE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#DCCA87] mb-4 sm:mb-6 leading-tight">
            Discover Your<br />Signature Scent
          </h1>
          <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base">
            Diamond Fragrance blends rare essences with diamond craftsmanship, creating signature scents that capture timeless luxury. Each fragrance tells a story through layered notes and precision artistry.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 mt-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 sm:border-4 border-[#DCCA87] shadow-lg cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-xl flex-shrink-0">
              <img
                src={chefImg}
                alt="Founder Portrait"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#DCCA87]">Founder</p>
              <p className="text-gray-400 text-xs sm:text-sm">Visionary Perfumer</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative flex justify-center items-center group mt-8 md:mt-12 w-full md:w-1/2">
          <div className="absolute top-6 sm:top-8 lg:top-12 left-6 sm:left-8 lg:left-12 w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] bg-[#DCCA87] rounded-2xl sm:rounded-3xl -z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
          <img
            src={heroImg}
            alt="Diamond Fragrance Collection"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-6 lg:border-8 border-[#DCCA87] cursor-pointer transition-transform transition-shadow duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_8px_60px_0_rgba(220,202,135,0.4)]"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      {/* Signature Fragrances */}
      <div className="max-w-6xl w-full mx-auto mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-[#DCCA87] text-center">Signature Fragrances</h2>
        <div className="grid gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white/90 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:shadow-4xl"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full mb-4 sm:mb-6 shadow-lg transition-shadow duration-500 hover:shadow-2xl"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#DCCA87] mb-2 text-center">{dish.name}</h3>
              <p className="text-[#DCCA87] font-bold text-lg mb-3">₹{dish.price}</p>
              <p className="text-gray-700 text-center text-sm sm:text-base lg:text-lg mb-4">{dish.desc}</p>
              <button
                onClick={() => handleAddToCart(dish)}
                className="bg-gradient-to-r from-[#DCCA87] to-[#bfa760] text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

    <footer className="mt-12 sm:mt-16 lg:mt-20 bg-black/80 py-6 sm:py-8 text-center rounded-t-2xl sm:rounded-t-3xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="text-[#DCCA87] font-serif text-lg sm:text-xl lg:text-2xl tracking-widest mb-2 md:mb-0">
          💎 DIAMOND FRAGRANCE
        </div>
        <div className="text-gray-400 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Diamond Fragrance. All rights reserved.
        </div>
        <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
          <a href="/about" className="text-[#DCCA87] hover:text-white transition">About</a>
          <a href="/contact" className="text-[#DCCA87] hover:text-white transition">Contact</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#DCCA87] hover:text-white transition">Instagram</a>
        </div>
      </div>
    </footer>
  </section>
);
}
export default HeroSection;