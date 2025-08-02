import React from 'react';
import { LogOut, BarChart3, ShoppingCart, Package, DollarSign, Users, TrendingUp, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const stats = [
    {
      title: 'Pedidos Hoje',
      value: '24',
      change: '+12%',
      icon: ShoppingCart,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Faturamento',
      value: 'R$ 1.240',
      change: '+8%',
      icon: DollarSign,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Produtos Ativos',
      value: '48',
      change: '+3',
      icon: Package,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Clientes',
      value: '156',
      change: '+15',
      icon: Users,
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const recentOrders = [
    { id: '#001', customer: 'Maria Silva', product: 'Bolo de Chocolate', value: 'R$ 85,00', status: 'Pendente' },
    { id: '#002', customer: 'João Santos', product: 'Torta de Morango', value: 'R$ 120,00', status: 'Produzindo' },
    { id: '#003', customer: 'Ana Costa', product: 'Cupcakes (12un)', value: 'R$ 60,00', status: 'Pronto' },
    { id: '#004', customer: 'Pedro Lima', product: 'Bolo de Aniversário', value: 'R$ 150,00', status: 'Entregue' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pendente': return 'bg-yellow-100 text-yellow-800';
      case 'Produzindo': return 'bg-blue-100 text-blue-800';
      case 'Pronto': return 'bg-green-100 text-green-800';
      case 'Entregue': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {user?.user_metadata?.name || user?.email}
                </p>
                <p className="text-xs text-gray-500">Confeiteiro</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Bem-vindo de volta! 👋
          </h2>
          <p className="text-gray-600">
            Aqui está um resumo do que está acontecendo na sua confeitaria hoje.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Pedidos Recentes</h3>
              <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                Ver todos
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pedido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 text-left">
            <ShoppingCart className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Novo Pedido</h3>
            <p className="text-pink-100 text-sm">Cadastrar um novo pedido</p>
          </button>
          
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 text-left">
            <Package className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Estoque</h3>
            <p className="text-purple-100 text-sm">Gerenciar ingredientes</p>
          </button>
          
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-left">
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Agenda</h3>
            <p className="text-green-100 text-sm">Ver entregas do dia</p>
          </button>
        </div>
      </main>
    </div>
  );
}