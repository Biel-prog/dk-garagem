import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-dk-orange/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagem com composição */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe DK Garagem" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Moldura laranja decorativa */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border-b-8 border-r-8 border-dk-orange rounded-br-3xl -z-0 opacity-50"></div>
          </motion.div>

          {/* Texto Sobre Nós */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-dk-orange font-bold tracking-widest uppercase text-sm">Nossa História</span>
            <h2 className="font-display text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              TRADIÇÃO E <span className="text-dk-orange">TECNOLOGIA</span> EM MOGI DAS CRUZES
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A <strong>DK Garagem</strong> nasceu da união entre a experiência prática de oficina e o desejo de modernizar o atendimento automotivo na região da <strong>Vila Brasileira</strong>. Localizada estrategicamente em <strong>Mogi das Cruzes</strong>, nossa oficina é focada em oferecer mais do que apenas consertos: entregamos segurança e transparência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-dk-orange">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Missão</h4>
                  <p className="text-gray-500 text-sm">Garantir que cada cliente saia com a confiança de um carro revisado com precisão.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-dk-orange">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Valores</h4>
                  <p className="text-gray-500 text-sm">Honestidade no diagnóstico e excelência técnica em cada parafuso.</p>
                </div>
              </div>
            </div>

            <div className="bg-dk-orange/10 border-l-4 border-dk-orange p-6 rounded-r-2xl">
              <p className="text-white italic font-medium">
                "Aqui na DK, tratamos seu carro com a mesma dedicação que você. O Du e o Kaique cuidam de cada detalhe para você dirigir tranquilo."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;