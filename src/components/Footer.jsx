import React from 'react';
import { MapPin, Phone, Instagram, Navigation } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        
        <div>
          <h3 className="font-display text-3xl font-bold text-white mb-8 border-l-4 border-dk-orange pl-4">
            CONTATO
          </h3>
          
          <div className="space-y-6">
            {/* Telefones */}
            <div className="flex items-start gap-4 text-gray-300">
              <div className="p-3 bg-dk-card border border-white/10 rounded-lg text-dk-orange">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">WhatsApp</p>
                <a href="https://wa.me/5511915297152" className="block hover:text-dk-orange transition-colors">(11) 91529-7152</a>
                <a href="https://wa.me/5511940013480" className="block hover:text-dk-orange transition-colors">(11) 94001-3480</a>                
              </div>
            </div>

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/dk.garagem/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="p-3 bg-dk-card border border-white/10 rounded-xl text-dk-orange group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-purple-600 group-hover:text-white transition-all shadow-lg shadow-orange-500/5">
                <Instagram size={24} />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Siga a DK Garagem</p>
                <p className="text-dk-orange font-bold text-xl">@dk.garagem</p>
                <p className="text-xs text-gray-500">Dicas e bastidores diários</p>
              </div>
            </a>
            
            {/* Endereço */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Av.+Júlio+Simões,+421+-+Vila+Brasileira,+Mogi+das+Cruzes+-+SP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="p-3 bg-dk-card border border-white/10 rounded-lg text-dk-orange group-hover:bg-dk-orange group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-lg mb-1 flex items-center gap-2">
                  Localização <Navigation size={14} className="opacity-50" />
                </p>
                <p>Av. Júlio Simões, 421 - Vila Brasileira</p>
                <p>Mogi das Cruzes - SP</p>
              </div>
            </a>
          </div>
        </div>

        <div className="h-80 w-full bg-gray-800 rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.580455088235!2d-46.2163884!3d-23.5511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8446908593d%3A0xc6c4f9f4c6e9a7e8!2sAv.%20J%C3%BAlio%20Sim%C3%B5es%2C%20421%20-%20Vila%20Brasileira%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008738-150!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen="" 
             loading="lazy" 
             className="grayscale hover:grayscale-0 transition-all duration-500"
           ></iframe>
        </div>
      </div>
      
      <div className="text-center text-gray-600 text-sm pt-8 border-t border-white/5">
        © 2026 DK Garagem. Desenvolvimento: Gabriel Rodrigues.
      </div>
    </footer>
  );
};

export default Footer;