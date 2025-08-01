import React from 'react';
import { ArrowRight, Smartphone, Monitor, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              A plataforma completa para sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                confeitaria crescer!
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Controle pedidos, organize finanças e tenha um assistente de IA no WhatsApp — 
              tudo em um só lugar.
            </p>

            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
              <span>Teste Grátis Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>14 dias grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">Dashboard</h3>
                    <Monitor className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pedidos Hoje</span>
                        <span className="font-bold text-pink-600">24</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Faturamento</span>
                        <span className="font-bold text-green-600">R$ 1.240</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile mockup */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-4 w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2 mb-3">
                  <Smartphone className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-800">App Mobile</span>
                </div>
                <div className="bg-green-100 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-800">WhatsApp IA ativo</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp floating element */}
              <div className="absolute -top-4 -left-4 bg-green-500 rounded-full p-4 shadow-lg animate-bounce">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}