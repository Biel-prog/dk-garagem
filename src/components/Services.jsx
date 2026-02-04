import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, Droplet, Settings2, ArrowDownUp, CircleStop } from 'lucide-react';

const services = [
  {
    title: "Mecânica Geral",
    desc: "Manutenção preventiva e corretiva completa para motores de todas as marcas.",
    image: "https://media.istockphoto.com/id/2216822682/pt/foto/close-up-of-internal-car-engine-components-including-camshaft-and-chains.jpg?s=612x612&w=0&k=20&c=CBc__1txvZWlpyDl5BmzH4WmTDeHqdmnn7kkesdYJPs=",
    icon: <Wrench size={24} />
  },
  {
    title: "Injeção Eletrônica",
    desc: "Diagnóstico computadorizado de falhas e otimização de consumo e performance.",
    image: "https://media.istockphoto.com/id/479272868/pt/foto/painel-de-instrumentos.jpg?s=612x612&w=0&k=20&c=zCRuPvZGg8AXYG2RNavLiwSh9FjlC3KensOJCWJU1P0=",
    icon: <Cpu size={24} />
  },
  {
    title: "Troca de Óleo",
    desc: "Substituição de filtros e lubrificantes seguindo as normas técnicas das montadoras.",
    image: "https://media.istockphoto.com/id/1200967807/pt/foto/pouring-oil-to-car-engine.jpg?s=612x612&w=0&k=20&c=Vo-cqJXu1xl99FXgzkM2IzYemx9tti-NSL3OVEoyxNo=",
    icon: <Droplet size={24} />
  },
  {
    title: "Embreagem",
    desc: "Substituição e ajuste de kits de embreagem para uma direção macia e segura.",
    image: "https://media.istockphoto.com/id/1625356599/pt/foto/car-transmission-clutch-kit-disc-and-clutch-basket.jpg?s=612x612&w=0&k=20&c=ac9DZT1HPcREy-1pBHXq22ZWFS5sq6o7NYWqbtVPRNw=",
    icon: <Settings2 size={24} />
  },
  {
    title: "Suspensão",
    desc: "Amortecedores, molas e pivôs. Garantia de conforto e estabilidade no asfalto.",
    image: "https://media.istockphoto.com/id/2228677089/pt/foto/car-lifted-on-a-hydraulic-lift-in-a-repair-shop-for-maintenance.jpg?s=612x612&w=0&k=20&c=_W3qLi2nFVhES_RDQlZQQQfQbeDB_vpRltdwO-n9Jhw=",
    icon: <ArrowDownUp size={24} />
  },
  {
    title: "Sistemas de Freios",
    desc: "Troca de pastilhas, discos e revisão do sistema ABS para frenagens precisas.",
    image: "https://media.istockphoto.com/id/2232348971/pt/foto/car-brake-disc-and-caliper-in-repair-shop-setting.jpg?s=612x612&w=0&k=20&c=Xs-A1sGjsOSePh6LFX1yxqKb3XUKdCbDkqMN2NxyDWw=",
    icon: <CircleStop size={24} />
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">
            Nossos <span className="text-dk-orange">Serviços</span>
          </h2>
        </div>

        {/* Grid de Cards Menores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group"
            >
              {/* Imagem de Fundo - Ajustada para preencher bem o card menor */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Overlay Escuro para o texto não sumir */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Texto e Ícone */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-dk-orange bg-black/50 p-2 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;