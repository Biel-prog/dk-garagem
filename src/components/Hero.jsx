import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Fundo */}
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop" 
          alt="Oficina Mecânica DK Garagem" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Gradiente para Escurecer (Fade nas bordas) */}
        <div className="absolute inset-0 bg-gradient-to-t from-dk-dark via-dk-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dk-dark via-transparent to-dk-dark opacity-80"></div>

        {/* TEXTURA (Grid de Pontinhos) - Visual Industrial */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#FF6600 1.5px, transparent 1.5px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      {/* === CONTEÚDO === */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 border border-dk-orange/30 bg-dk-orange/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-dk-orange animate-pulse"></span>
            <span className="text-dk-orange font-bold tracking-widest text-xs md:text-sm uppercase">
              Oficina Especializada em Mogi das Cruzes
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none drop-shadow-2xl">
            SEU CARRO EM <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              BOAS MÃOS
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-400 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Mecânica Geral, Injeção Eletrônica e Suspensão. <br className="hidden md:block"/>
            Tecnologia de ponta com o atendimento que você merece.
          </p>
          
          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5511915297152?text=Ol%C3%A1%2C+vi+o+site+e+gostaria+de+um+or%C3%A7amento%21" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto bg-dk-orange text-white font-bold py-4 px-10 rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,102,0,0.3)] flex items-center justify-center gap-2"
            >
              SOLICITAR ORÇAMENTO
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <a 
              href="#servicos" 
              className="w-full md:w-auto border border-white/20 text-white font-bold py-4 px-10 rounded-lg hover:bg-white/5 hover:border-dk-orange/50 transition-all backdrop-blur-sm"
            >
              NOSSOS SERVIÇOS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;