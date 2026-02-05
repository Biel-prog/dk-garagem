import React from 'react';
import { ShieldCheck, Clock, Wrench, Coins } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Garantia de Serviço",
    desc: "Transparência total e garantia em todas as peças e mão de obra."
  },
  {
    icon: <Clock size={32} />,
    title: "Agilidade e Prazo",
    desc: "Sabemos que você depende do carro. Trabalhamos com prazos reais."
  },
  {
    icon: <Wrench size={32} />, 
    title: "Equipamentos de Ponta",
    desc: "Diagnóstico via scanner e ferramentas específicas para cada montadora."
  },
  {
    icon: <Coins size={32} />,
    title: "Preço Justo",
    desc: "Orçamentos detalhados e sem surpresas no final do serviço."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-[#1a1a1a] rounded-2xl border border-white/5 shadow-xl hover:border-dk-orange/20 transition-all">
              <div className="mb-6 p-4 bg-gradient-to-br from-dk-orange to-orange-700 rounded-2xl text-white shadow-[0_0_20px_rgba(255,102,0,0.2)]">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight font-display">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;