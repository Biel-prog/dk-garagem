import React from 'react';

// Links estáveis da Wikimedia Commons (não quebram)
const brands = [
  { name: "Volkswagen", url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
  { name: "Chevrolet", url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet_logo.svg" },
  { name: "Fiat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fiat_logo_2006.svg/200px-Fiat_logo_2006.svg.png" }, // Versão Redonda Clássica
  { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
  { name: "Honda", url: "https://www.citypng.com/public/uploads/preview/honda-car-emblem-logo-png-701751694772075os3qi4x57u.png" }, // O "H" de Carros
  { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
  { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  { name: "Renault", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Renault_2009_logo.svg" }, // O Losango prateado
];

const BrandMarquee = () => {
  return (
    // Fundo escuro (#181818) para manter a harmonia, sem o "blocão branco"
    <div className="bg-[#181818] py-10 border-y border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
          Especialistas nas principais montadoras
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Máscara de degradê nas laterais para suavizar */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#181818] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#181818] to-transparent z-10"></div>

        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap py-2">
          {/* Repetimos 3x para garantir o loop infinito perfeito */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="w-24 h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="max-h-16 w-auto object-contain drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;