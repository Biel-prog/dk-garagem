import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Ricardo Silva", car: "Chevrolet Onix", text: "O Eduardo resolveu um barulho na suspensão que ninguém achava. Preço justo e honestidade." },
  { name: "Fernanda Costa", car: "Ford Ka", text: "Atendimento top do Kaique! Explicou tudo que precisava fazer no carro sem inventar moda." },
  { name: "Paulo Mendes", car: "Honda Civic", text: "A melhor oficina da Vila Brasileira. Fiz a revisão completa e o carro ficou zero." },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#151515] relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 text-white/5 -mt-10 -mr-10">
        <Quote size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white">O QUE DIZEM NOSSOS <span className="text-dk-orange">CLIENTES</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-dk-dark p-8 rounded-2xl border border-white/5 relative hover:border-dk-orange/30 transition-colors">
              <div className="flex gap-1 text-dk-orange mb-4">
                <Star fill="#FF6600" size={20} />
                <Star fill="#FF6600" size={20} />
                <Star fill="#FF6600" size={20} />
                <Star fill="#FF6600" size={20} />
                <Star fill="#FF6600" size={20} />
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{review.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;