import React from 'react';

const brands = [
  { name: "Volkswagen", url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
  { name: "Chevrolet", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Chevrolet-logo.svg/1280px-Chevrolet-logo.svg.png?20251208163300" },
  { name: "Fiat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/960px-Fiat_Automobiles_logo.svg.png" },
  { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
  { name: "Honda", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/960px-Honda.svg.png" },
  { name: "Renault", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Renault_2009_logo.svg" },
  { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
  { name: "Nissan", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/960px-Nissan_2020_logo.svg.png"},
];

const BrandMarquee = () => {
  return (
   
    <div className="relative bg-[#252525] py-10">
      
          
      {/* Sombra Superior (Funde com a seção de cima) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#121212] to-transparent z-10 pointer-events-none"></div>

      {/* Sombra Inferior (Funde com a seção de baixo) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#171717] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center relative z-20">
        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
          Especialistas nas principais montadoras
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        
        {/* Degradês laterais (para fundir com o centro cinza) */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#252525] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#252525] to-transparent z-10"></div>

        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap py-2">
          
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="w-24 h-24 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="max-h-16 w-auto object-contain drop-shadow-md hover:brightness-125 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;