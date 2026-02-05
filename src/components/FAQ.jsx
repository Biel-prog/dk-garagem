import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Onde a oficina está localizada?",    
    answer: (
      <span>
        Estamos localizados na{" "}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Avenida+Júlio+Simões+421+Vila+Brasileira+Mogi+das+Cruzes+SP" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dk-orange font-bold hover:underline hover:text-orange-400 transition-colors"
        >
          Avenida Júlio Simões, 421, na Vila Brasileira, em Mogi das Cruzes - SP
        </a>.
      </span>
    )
  },
  
  {
    question: "Quais são os horários de funcionamento?",
    answer: "Atendemos de segunda a sexta-feira, das 08:00 às 18:00, e aos sábados, das 08:00 às 13:00."
  },
  {
    question: "Vocês trabalham com todas as marcas de carros?",
    answer: "Sim, somos especialistas em mecânica preventiva e corretiva para as principais montadoras nacionais e importadas."
  },
  {
    question: "O orçamento é gratuito?",
    answer: "Sim, realizamos orçamentos detalhados sem compromisso para que você tenha total transparência sobre o que seu veículo precisa."
  },
  {
    question: "Os serviços possuem garantia?",
    answer: "Com certeza. Todos os nossos serviços e as peças utilizadas possuem garantia, assegurando a tranquilidade de Eduardo, Kaique e de todos os nossos clientes."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-white group-hover:text-dk-orange transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-dk-orange"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-dk-orange/10 rounded-2xl text-dk-orange">
              <HelpCircle size={32} />
            </div>
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            DÚVIDAS <span className="text-dk-orange">FREQUENTES</span>
          </h2>
          <p className="text-gray-500">
            Tudo o que você precisa saber sobre a DK Garagem em um só lugar.
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 shadow-2xl">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;