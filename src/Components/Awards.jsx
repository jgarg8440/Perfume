import React from "react";

const awards = [
  { 
    title: "Fragrance Innovation Award", 
    year: 2022, 
    desc: "Recognized for diamond-capped bottle design excellence.",
    icon: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&w=100&h=100&fit=crop"
  },
  { 
    title: "Best Luxury Perfume Brand", 
    year: 2023, 
    desc: "Awarded by Prestige Fragrance Magazine.",
    icon: "https://images.unsplash.com/photo-1587014611676-7f54b4f3d4c7?ixlib=rb-4.0.3&w=100&h=100&fit=crop"
  },
  { 
    title: "Olfactory Masterpiece", 
    year: 2024, 
    desc: "Diamond Noir named Best Men's Fragrance.",
    icon: "https://images.unsplash.com/photo-1611152697129-b7ca3f5a4a54?ixlib=rb-4.0.3&w=100&h=100&fit=crop"
  },
  { 
    title: "Artisan Craftsmanship", 
    year: 2025, 
    desc: "Honored for rare essence blending techniques.",
    icon: "https://images.unsplash.com/photo-1592656087195-9ce95f4db0a5?ixlib=rb-4.0.3&w=100&h=100&fit=crop"
  },
];

const Awards = () => (
  <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#DCCA87] text-center">Awards & Recognition</h2>
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
      {awards.map((award, idx) => (
        <div key={idx} className="bg-white/90 rounded-xl shadow-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-xl transition-shadow">
          <img 
            src={award.icon}
            alt={award.title}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0 shadow-md"
            loading="lazy"
          />
          <div className="flex-1">
            <h3 className="text-base sm:text-xl font-bold text-[#DCCA87] mb-1 sm:mb-2">{award.title} ({award.year})</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{award.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Awards;