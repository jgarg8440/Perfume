import React, { useState } from "react";
import { useCart } from "../Components/CartContext";

const dishImages = {
  "Diamond Noir": "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Oud Royale": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Amber Legend": "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Midnight Musk": "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Cedar Storm": "https://images.unsplash.com/photo-1605380076474-55d4a554d915?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Bergamot King": "https://images.unsplash.com/photo-1628258334165-793ba2d2e8ee?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Crystal Bloom": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Rose Eternal": "https://images.unsplash.com/photo-1601379653818-2387b29d6f17?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Jasmine Dream": "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Vanilla Silk": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Orchid Whisper": "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Violet Majesty": "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Eternal Spark": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Citrus Fusion": "https://images.unsplash.com/photo-1628258334165-793ba2d2e8ee?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Lavender Mist": "https://images.unsplash.com/photo-1605380076474-55d4a554d915?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Vetiver Woods": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Patchouli Dawn": "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Sandalwood Pure": "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Diamond Reserve": "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Midnight Diamond": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Crystal Noir": "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Golden Spark": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Bergamot Supreme": "https://images.unsplash.com/photo-1628258334165-793ba2d2e8ee?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Oud Essence": "https://images.unsplash.com/photo-1605380076474-55d4a554d915?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Amber Heart": "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Musk Base": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Rose Absolute": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Diamond Noir 10ml": "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Crystal Bloom 10ml": "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Eternal Spark 10ml": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&w=400&h=400&fit=crop",
  "Discovery Set": "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=400&h=400&fit=crop"
};

const productPrices = {
  "Diamond Noir": 4999,
  "Oud Royale": 5999,
  "Amber Legend": 4499,
  "Midnight Musk": 3999,
  "Cedar Storm": 4299,
  "Bergamot King": 4799,
  "Crystal Bloom": 4999,
  "Rose Eternal": 5499,
  "Jasmine Dream": 4799,
  "Vanilla Silk": 4299,
  "Orchid Whisper": 5299,
  "Violet Majesty": 4999,
  "Eternal Spark": 5299,
  "Citrus Fusion": 3999,
  "Lavender Mist": 4499,
  "Vetiver Woods": 4799,
  "Patchouli Dawn": 4599,
  "Sandalwood Pure": 5799,
  "Diamond Reserve": 8999,
  "Midnight Diamond": 7999,
  "Crystal Noir": 7499,
  "Golden Spark": 6999,
  "Bergamot Supreme": 3499,
  "Oud Essence": 3999,
  "Amber Heart": 3299,
  "Musk Base": 2999,
  "Rose Absolute": 3799,
  "Diamond Noir 10ml": 999,
  "Crystal Bloom 10ml": 999,
  "Eternal Spark 10ml": 1099,
  "Discovery Set": 2999
};

const productDescriptions = {
  "Diamond Noir": "Top: Bergamot, Cardamom | Heart: Oud, Rose | Base: Amber, Musk. Bold sophistication for the modern gentleman.",
  "Oud Royale": "Top: Saffron, Nutmeg | Heart: Royal Oud, Leather | Base: Sandalwood, Patchouli. Regal and commanding presence.",
  "Amber Legend": "Top: Mandarin, Lavender | Heart: Amber, Tonka | Base: Vanilla, Cedar. Warm and legendary masculine scent.",
  "Midnight Musk": "Top: Black Pepper, Grapefruit | Heart: Musk, Iris | Base: Vetiver, Cedarwood. Mysterious evening allure.",
  "Cedar Storm": "Top: Pine, Cypress | Heart: Cedar, Tobacco | Base: Leather, Moss. Raw masculine power.",
  "Bergamot King": "Top: Bergamot, Lemon | Heart: Geranium, Lavender | Base: Oakmoss, Amber. Fresh royal sophistication.",
  "Crystal Bloom": "Top: Pear, Jasmine | Heart: Orchid, Violet | Base: Vanilla, Sandalwood. Feminine elegance that captivates.",
  "Rose Eternal": "Top: Rose Petals, Peony | Heart: Damask Rose, Lily | Base: White Musk, Amber. Timeless romantic grace.",
  "Jasmine Dream": "Top: Jasmine, Orange Blossom | Heart: Tuberose, Ylang-Ylang | Base: Sandalwood, Musk. Dreamy floral elegance.",
  "Vanilla Silk": "Top: Bergamot, Mandarin | Heart: Vanilla Orchid, Jasmine | Base: Vanilla, Cashmere. Soft luxurious comfort.",
  "Orchid Whisper": "Top: Freesia, Lychee | Heart: Wild Orchid, Lotus | Base: Amber, Vanilla. Delicate exotic femininity.",
  "Violet Majesty": "Top: Violet Leaf, Bergamot | Heart: Iris, Heliotrope | Base: Musk, Tonka. Majestic powdery elegance.",
  "Eternal Spark": "Top: Citrus, Ginger | Heart: Lavender, Vetiver | Base: Patchouli, Cedar. Unisex versatility for every occasion.",
  "Citrus Fusion": "Top: Lemon, Orange, Lime | Heart: Neroli, Petitgrain | Base: White Musk, Amber. Fresh energizing spark.",
  "Lavender Mist": "Top: Lavender, Bergamot | Heart: Lavender Absolute, Sage | Base: Tonka, Vanilla. Calming sophisticated aura.",
  "Vetiver Woods": "Top: Grapefruit, Pink Pepper | Heart: Vetiver, Oakmoss | Base: Cedar, Patchouli. Earthy refined character.",
  "Patchouli Dawn": "Top: Cardamom, Orange | Heart: Patchouli, Rose | Base: Amber, Musk. Bohemian morning mystique.",
  "Sandalwood Pure": "Top: Bergamot, Cardamom | Heart: Sandalwood, Jasmine | Base: Cedarwood, Musk. Pure meditative luxury.",
  "Diamond Reserve": "Top: Rare Bergamot, Black Currant | Heart: Diamond Iris, Bulgarian Rose | Base: Pure Oud, Amber Crystals. Limited masterpiece.",
  "Midnight Diamond": "Top: Star Anise, Midnight Citrus | Heart: Diamond Jasmine, Black Orchid | Base: Oud Noir, Velvet Musk. Dark luxurious mystery.",
  "Crystal Noir": "Top: Black Pepper, Ginger | Heart: Crystal Gardenia, Peony | Base: Black Amber, Sandalwood. Elegant dark sophistication.",
  "Golden Spark": "Top: Golden Mandarin, Champagne | Heart: Golden Jasmine, Magnolia | Base: Liquid Gold Amber, Vanilla. Radiant celebration.",
  "Bergamot Supreme": "Pure bergamot essence with hints of citrus and green tea. Perfect for layering.",
  "Oud Essence": "Concentrated oud extract with smoky leather undertones. Signature masculine note.",
  "Amber Heart": "Warm amber resin with vanilla and tonka bean. Universal heart note.",
  "Musk Base": "Clean white musk with subtle powder. Essential base for any blend.",
  "Rose Absolute": "Pure rose otto with damask and Bulgarian varieties. Romantic floral essence.",
  "Diamond Noir 10ml": "Travel-size version of our bestselling Diamond Noir. Perfect for on-the-go luxury.",
  "Crystal Bloom 10ml": "Portable elegance. Crystal Bloom in a convenient travel format.",
  "Eternal Spark 10ml": "Unisex versatility in a compact 10ml spray. Ideal for discovery.",
  "Discovery Set": "4 x 5ml samples of our bestsellers: Diamond Noir, Crystal Bloom, Eternal Spark, Oud Royale."
};

const menuData = [
  {
    category: "Men's Collection",
    items: ["Diamond Noir", "Oud Royale", "Amber Legend", "Midnight Musk", "Cedar Storm", "Bergamot King"]
  },
  {
    category: "Women's Collection",
    items: ["Crystal Bloom", "Rose Eternal", "Jasmine Dream", "Vanilla Silk", "Orchid Whisper", "Violet Majesty"]
  },
  {
    category: "Unisex Collection",
    items: ["Eternal Spark", "Citrus Fusion", "Lavender Mist", "Vetiver Woods", "Patchouli Dawn", "Sandalwood Pure"]
  },
  {
    category: "Limited Editions",
    items: ["Diamond Reserve", "Midnight Diamond", "Crystal Noir", "Golden Spark"]
  },
  {
    category: "Signature Notes",
    items: ["Bergamot Supreme", "Oud Essence", "Amber Heart", "Musk Base", "Rose Absolute"]
  },
  {
    category: "Travel Sizes",
    items: ["Diamond Noir 10ml", "Crystal Bloom 10ml", "Eternal Spark 10ml", "Discovery Set"]
  }
];

const colors = [
  "from-green-100 via-yellow-50 to-green-50",
  "from-yellow-50 via-orange-100 to-yellow-200",
  "from-pink-100 via-rose-50 to-yellow-100",
  "from-blue-100 via-cyan-50 to-blue-50",
  "from-orange-100 via-yellow-50 to-orange-50",
  "from-lime-100 via-green-50 to-lime-200",
];

const getCardColor = (idx) => colors[idx % colors.length];

const Menu = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleAddToCart = (dish) => {
    addToCart({
      name: dish,
      price: productPrices[dish],
      image: dishImages[dish] || "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=400&h=400&fit=crop"
    });
  };

  const handleMouseEnter = (dish, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    
    // Decide if preview should appear on left or right
    let x = rect.right + 20;
    let shouldFlip = false;
    
    if (x + 400 > windowWidth) {
      x = rect.left - 420; // Show on left
      shouldFlip = true;
    }
    
    setHoverPosition({
      x: x,
y: Math.max(20, rect.top - 420),
      shouldFlip
    });
    setHoveredProduct(dish);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-[#DCCA87] text-center drop-shadow-lg">
        Fragrance Collections
      </h2>
      
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {menuData.map((cat, idx) => (
          <div
            key={cat.category}
            className={`
              bg-gradient-to-br ${getCardColor(idx)}
              rounded-3xl shadow-2xl p-8 flex flex-col gap-4
              transition-transform duration-300 hover:scale-105 hover:shadow-4xl
              border-4 border-[#DCCA87]
            `}
          >
            <h3 className="text-2xl font-extrabold text-[#DCCA87] mb-4 text-center uppercase tracking-wide sticky top-0 bg-opacity-80 z-10">
              {cat.category}
            </h3>
            <div className="flex flex-col gap-3">
              {cat.items.map((dish) => (
                <div
                  key={dish}
                  className="flex items-center gap-4 bg-white/70 rounded-xl p-3 shadow hover:bg-[#DCCA87]/60 transition group relative"
                  onMouseEnter={(e) => handleMouseEnter(dish, e)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden bg-[#F5F5DC] border-2 border-[#DCCA87] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {dishImages[dish] ? (
                      <img
                        src={dishImages[dish]}
                        alt={dish}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span role="img" aria-label="fragrance" className="text-2xl">💎</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-gray-700 group-hover:text-[#bfa760] transition block">
                      {dish}
                    </span>
                    <span className="text-sm font-bold text-[#DCCA87]">
                      ₹{productPrices[dish]}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(dish);
                    }}
                    className="bg-[#DCCA87] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#bfa760] transition-colors text-sm whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side Hover Preview */}
      {hoveredProduct && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${hoverPosition.x}px`,
            top: `${hoverPosition.y}px`,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border-4 border-[#DCCA87] p-6 w-96">
            {/* Product Image */}
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={dishImages[hoveredProduct]}
                alt={hoveredProduct}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#DCCA87] text-black px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                ₹{productPrices[hoveredProduct]}
              </div>
            </div>

            {/* Product Info */}
            <h3 className="text-2xl font-bold text-[#DCCA87] mb-2">
              {hoveredProduct}
            </h3>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {productDescriptions[hoveredProduct]}
            </p>

            {/* Features */}
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-3 flex-wrap">
              <span className="bg-[#DCCA87]/20 px-3 py-1 rounded-full">50ml EDT</span>
              <span className="bg-[#DCCA87]/20 px-3 py-1 rounded-full">Premium</span>
              <span className="bg-[#DCCA87]/20 px-3 py-1 rounded-full">Long Lasting</span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200">
              <div className="text-center">
                <div className="text-[#DCCA87] font-bold">8-10h</div>
                <div className="text-xs text-gray-600">Longevity</div>
              </div>
              <div className="text-center">
                <div className="text-[#DCCA87] font-bold">Strong</div>
                <div className="text-xs text-gray-600">Sillage</div>
              </div>
              <div className="text-center">
                <div className="text-[#DCCA87] font-bold">Premium</div>
                <div className="text-xs text-gray-600">Quality</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 bg-black/80 py-8 text-center rounded-t-3xl">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="text-[#DCCA87] font-serif text-2xl tracking-widest mb-2 md:mb-0">
            💎 DIAMOND FRAGRANCE
          </div>
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} Diamond Fragrance. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="/about" className="text-[#DCCA87] hover:text-white transition">About</a>
            <a href="/contact" className="text-[#DCCA87] hover:text-white transition">Contact</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#DCCA87] hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;