import React from 'react';
import { Menu, X, Cake } from 'lucide-react';

interface HeaderProps {
  onLoginClick?: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-pink-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
              <Cake className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">DoceGestão</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-gray-600 hover:text-pink-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-gray-600 hover:text-pink-600 transition-colors">
              Planos
            </a>
            <a href="#contato" className="text-gray-600 hover:text-pink-600 transition-colors">
              Contato
            </a>
            <button 
              onClick={onLoginClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Acessar Minha Conta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-pink-100">
              <a href="#funcionalidades" className="block px-3 py-2 text-gray-600 hover:text-pink-600">
                Funcionalidades
              </a>
              <a href="#planos" className="block px-3 py-2 text-gray-600 hover:text-pink-600">
                Planos
              </a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-pink-600">
                Contato
              </a>
              <button 
                onClick={onLoginClick}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                Acessar Minha Conta
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}