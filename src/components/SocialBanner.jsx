import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const SocialBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-dk-orange to-orange-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm shadow-xl">
              <Instagram size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">
                Acompanhe a DK Garagem no Instagram
              </h3>
              <p className="text-orange-100 text-lg opacity-90 max-w-xl">
                Fique por dentro de dicas técnicas práticas, curiosidades e os bastidores da nossa oficina em Mogi das Cruzes.
              </p>
            </div>
          </div>
          
          <a 
            href="https://www.instagram.com/dk.garagem/" // Coloque o link real aqui
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-dk-orange font-black py-4 px-8 rounded-xl shadow-2xl hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            SEGUIR AGORA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;