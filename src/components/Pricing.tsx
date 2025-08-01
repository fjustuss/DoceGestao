import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Básica',
    price: '19,90',
    description: 'Ideal para começar',
    features: [
      'Pedidos Ilimitados',
      'Controle de Estoque',
      'Relatório Simples',
      'Suporte por E-mail'
    ],
    popular: false
  },
  {
    name: 'Ideal',
    price: '39,90',
    description: 'Para confeitarias em crescimento',
    features: [
      'Tudo da Básica',
      'Financeiro Completo',
      'Gestão de Despesas',
      'Gestão de Receitas',
      'Relatórios Avançados'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '99,90',
    description: 'Para profissionais sérios',
    features: [
      'Tudo da Ideal',
      'Assistente IA WhatsApp',
      'Atendimento 24 horas',
      'API para Integrações',
      'Suporte Prioritário'
    ],
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho da sua confeitaria. 
            Todos com 14 dias grátis para testar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mais Vendido</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>R$</span>
                  <span className={`text-4xl font-bold mx-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                }`}
              >
                Assinar {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            💳 Todos os planos aceitam cartão, PIX e boleto • 🔒 Pagamento 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
}