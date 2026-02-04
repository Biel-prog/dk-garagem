import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ChevronRight } from 'lucide-react';

const photos = [
  { 
    url: "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=800", 
    title: "Motor & Performance",
    tag: "Motores"
  },
  { 
    url: "https://media.istockphoto.com/id/2206667178/pt/foto/computerized-car-diagnosis-in-progress.jpg?s=612x612&w=0&k=20&c=ZS5huj2CsGXK5sU9qsjvWlqLDxX9BBp07tupeZkCePM=", 
    title: "Diagnóstico Eletrônico",
    tag: "Scanner"
  },
  { 
    url: "https://media.istockphoto.com/id/1062565370/pt/foto/mechanic-suspension-fix.jpg?s=612x612&w=0&k=20&c=RavvW3fJcSOgsVZ07QfiBwbVXczkVMx7FUB7uJHicDk=", 
    title: "Suspensão & Rodas",
    tag: "Chassis"
  },
  { 
    url: "https://media.istockphoto.com/id/2232348971/pt/foto/car-brake-disc-and-caliper-in-repair-shop-setting.jpg?s=612x612&w=0&k=20&c=Xs-A1sGjsOSePh6LFX1yxqKb3XUKdCbDkqMN2NxyDWw=", 
    title: "Sistemas de Freios",
    tag: "Segurança"
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-wrap items-end justify-between mb-16 gap-4">
            <div className="border-l-4 border-dk-orange pl-6">
                <span className="text-dk-orange font-bold tracking-widest uppercase text-xs">Portfólio de Serviços</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
                  DIA A DIA NA <span className="text-dk-orange">OFICINA</span>
                </h2>
            </div>
            <div className="flex gap-2 text-gray-400 items-center bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                <Camera size={20} className="text-dk-orange" />
                <span className="text-sm font-semibold">DK Garagem</span>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer border-2 border-white/5"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute top-4 right-4 bg-dk-orange text-white text-[10px] font-black px-3 py-1 rounded-full shadow-xl">
                {photo.tag}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white font-display text-2xl tracking-tight mb-2">{photo.title}</h3>
                <div className="flex items-center gap-2 text-dk-orange font-bold text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Detalhes <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;