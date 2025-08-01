import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experimente agora o DoceGestão e leve sua confeitaria para o próximo nível!
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Junte-se a centenas de confeiteiros que já transformaram seus negócios. 
            Comece seu teste grátis hoje mesmo!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
            <span>Testar Grátis por 14 Dias</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center space-x-4 text-purple-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-sm">Sem cartão</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-sm">Cancele quando quiser</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-purple-200">Confeitarias ativas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-purple-200">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-purple-200">Suporte</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">45%</div>
            <div className="text-purple-200">Aumento médio vendas</div>
          </div>
        </div>
      </div>
    </section>
  );
}