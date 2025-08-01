import React from 'react';
import { Cake, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Shield, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                <Cake className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DoceGestão</span>
            </div>
            <p className="text-gray-400 mb-6">
              A plataforma completa para confeitarias crescerem com tecnologia e inteligência artificial.
            </p>
            
            {/* Security badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-300">SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                <CreditCard className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-300">PCI DSS</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Imprensa</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-gray-400">contato@docegestao.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </li>
            </ul>

            {/* Social media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 DoceGestão. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>Formas de pagamento:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">VISA</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">MASTER</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">PIX</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">BOLETO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}