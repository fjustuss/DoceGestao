import React from 'react';
import { ShoppingCart, Package, TrendingUp, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: ShoppingCart,
    title: 'Gestão de Pedidos Simplificada',
    description: 'Organize todos os seus pedidos em um só lugar. Acompanhe status, prazos de entrega e mantenha seus clientes sempre informados.',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: Package,
    title: 'Controle de Estoque Inteligente',
    description: 'Monitore ingredientes, receba alertas de estoque baixo e planeje suas compras com precisão para nunca faltar nada.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Relatórios Financeiros Avançados',
    description: 'Tenha visibilidade completa das suas finanças com relatórios detalhados de vendas, custos e lucratividade.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: MessageCircle,
    title: 'Atendimento Automatizado com IA',
    description: 'Assistente inteligente no WhatsApp que atende seus clientes 24h, faz pedidos e responde dúvidas automaticamente.',
    color: 'from-purple-400 to-indigo-500'
  }
];

export default function Benefits() {
  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tudo que sua confeitaria precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Funcionalidades pensadas especialmente para confeiteiros que querem crescer e 
            profissionalizar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}