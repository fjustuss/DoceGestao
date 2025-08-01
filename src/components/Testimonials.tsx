import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula Silva',
    business: 'Doces da Ana',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'O DoceGestão revolucionou minha confeitaria! Agora consigo organizar todos os pedidos e o assistente de WhatsApp atende meus clientes mesmo quando estou ocupada na cozinha. Minhas vendas aumentaram 40% em 3 meses!'
  },
  {
    name: 'Carlos Mendonça',
    business: 'Confeitaria Real',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Antes eu perdia muito tempo com planilhas e anotações. Com o DoceGestão, tudo fica automático. O controle financeiro me mostrou onde estava perdendo dinheiro e agora tenho uma margem muito melhor. Recomendo demais!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de confeiteiros que transformaram seus negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pink-300" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-pink-600 font-medium">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}