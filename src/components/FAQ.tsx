import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona o assistente de IA no WhatsApp?',
    answer: 'Nosso assistente de IA é integrado ao seu WhatsApp Business e funciona 24 horas por dia. Ele pode receber pedidos, responder dúvidas sobre produtos, informar preços e prazos, agendar entregas e muito mais. Tudo isso de forma automática, liberando seu tempo para focar na produção.'
  },
  {
    question: 'Posso testar o sistema antes de assinar?',
    answer: 'Sim! Oferecemos 14 dias de teste grátis em qualquer plano, sem precisar cadastrar cartão de crédito. Durante o período de teste, você tem acesso a todas as funcionalidades do plano escolhido para avaliar se o DoceGestão é ideal para sua confeitaria.'
  },
  {
    question: 'Posso mudar de plano depois?',
    answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente e o valor é ajustado proporcionalmente na próxima fatura. Não há taxas extras para mudança de plano.'
  },
  {
    question: 'Preciso instalar algum programa no meu computador?',
    answer: 'Não! O DoceGestão funciona 100% online através do seu navegador. Você pode acessar de qualquer computador, tablet ou celular com internet. Também temos aplicativo móvel para Android e iOS para maior comodidade.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o DoceGestão
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}