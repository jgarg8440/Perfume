import React from "react";

const About = () => (
  <section className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* Mobile-First Image - Full width, proper aspect ratio */}
        <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-square relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&w=600&h=450&fit=crop"
            alt="Perfume Craftsmanship"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content - Perfect mobile typography */}
        <div className="p-6 lg:p-10 w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#DCCA87] leading-tight">
            About Diamond Fragrance
          </h2>
          
          <div className="space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p className="font-light">
              Diamond Fragrance brings 20+ years of olfactory expertise, blending rare essences with diamond craftsmanship.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-2 hover:bg-[#DCCA87]/10 rounded-lg transition-all cursor-default">
                <div className="w-2 h-2 bg-[#DCCA87] rounded-full mt-2 flex-shrink-0"></div>
                <span>Master perfumer trained</span>
              </div>
              <div className="flex items-start gap-3 p-2 hover:bg-[#DCCA87]/10 rounded-lg transition-all cursor-default">
                <div className="w-2 h-2 bg-[#DCCA87] rounded-full mt-2 flex-shrink-0"></div>
                <span>Rare ingredients philosophy</span>
              </div>
              <div className="flex items-start gap-3 p-2 hover:bg-[#DCCA87]/10 rounded-lg transition-all cursor-default">
                <div className="w-2 h-2 bg-[#DCCA87] rounded-full mt-2 flex-shrink-0"></div>
                <span>Layered scent profiles</span>
              </div>
            </div>
            
            <p className="font-light italic text-sm sm:text-base lg:text-lg">
              Our atelier crafts unforgettable fragrance experiences through passion and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
