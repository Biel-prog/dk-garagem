import React, { useState } from 'react';
import { Menu, X, Wrench, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dk-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Principal */}
          <div className="flex items-center gap-3">
            <div className="bg-dk-orange/10 p-2 rounded-lg border border-dk-orange/20">
              <Wrench className="h-6 w-6 text-dk-orange" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wider text-white leading-none">
                DK <span className="text-dk-orange">GARAGEM</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Oficina Especializada</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              <a href="#home" className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all">Início</a>
              <a href="#servicos" className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all">Serviços</a>
              <a href="#contato" className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all">Contato</a>
            </div>

            {/* SELO DE QUALIDADE (Destaque visual) */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 rounded-full border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
              <ShieldCheck size={18} className="text-yellow-500" />
              <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide">Garantia & Confiança</span>
            </div>

            <a href="#contato" className="bg-dk-orange text-white px-6 py-2.5 rounded font-bold hover:bg-orange-600 transition-all hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] transform hover:-translate-y-0.5">
              Agendar
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-dk-orange transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-dk-orange/20 animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-lg">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-lg">Serviços</a>
            
            {/* Selo no Mobile */}
            <div className="flex items-center gap-2 px-3 py-3">
               <ShieldCheck size={18} className="text-yellow-500" />
               <span className="text-sm font-bold text-yellow-500 uppercase">Qualidade Garantida</span>
            </div>

            <a href="#contato" onClick={() => setIsOpen(false)} className="block text-center mt-4 bg-dk-orange text-white py-3 rounded-lg font-bold uppercase tracking-wider">
              Agendar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;