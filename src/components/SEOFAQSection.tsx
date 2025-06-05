import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const SEOFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona o Agente de IA para WhatsApp?",
      answer: "Nosso Agente de IA se integra diretamente ao seu WhatsApp Business e responde automaticamente às mensagens dos clientes 24 horas por dia, 7 dias por semana. Ele qualifica leads, agenda reuniões, responde dúvidas frequentes e escalona apenas os casos que realmente precisam de atendimento humano."
    },
    {
      question: "Quanto tempo leva para implementar o chatbot?",
      answer: "A implementação é rápida! Em apenas 48-72 horas seu Agente de IA estará funcionando. O processo inclui: configuração inicial, treinamento da IA com suas informações, testes de qualidade e treinamento da sua equipe."
    },
    {
      question: "O Agente de IA pode substituir completamente minha equipe?",
      answer: "Não recomendamos substituir totalmente sua equipe. O Agente de IA funciona como um primeiro filtro inteligente, respondendo 80% das dúvidas automaticamente e direcionando apenas os casos complexos para sua equipe. Isso libera seu time para focar em vendas e relacionamento."
    },
    {
      question: "Qual o ROI esperado com automação de WhatsApp?",
      answer: "Nossos clientes relatam em média: +40% aumento nas vendas, +50% mais leads capturados, -90% no tempo de resposta e ROI de 300-500% no primeiro ano. Use nossa calculadora acima para simular seus resultados específicos."
    },
    {
      question: "O sistema funciona para qualquer tipo de empresa?",
      answer: "Sim! Atendemos desde pequenos negócios até grandes corporações. Nossos Agentes de IA são personalizados para cada segmento: e-commerce, serviços, consultoria, clínicas, imobiliárias, educação e muito mais."
    },
    {
      question: "Como garantem a segurança e privacidade dos dados?",
      answer: "Utilizamos criptografia de ponta a ponta, servidores seguros no Brasil (LGPD compliance) e nunca armazenamos dados sensíveis dos clientes. Todos os protocolos seguem as melhores práticas de segurança da informação."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim, oferecemos total flexibilidade. Não há fidelidade obrigatória. Você pode cancelar com 30 dias de antecedência. Garantimos também 30 dias de garantia ou seu dinheiro de volta."
    },
    {
      question: "Quanto custa um Agente de IA para WhatsApp?",
      answer: "O investimento varia conforme o volume de mensagens e funcionalidades. Planos a partir de R$ 497/mês. Oferecemos demonstração gratuita e análise personalizada sem compromisso. O ROI típico paga o investimento em 30-60 dias."
    }
  ];

  // Schema markup para SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ❓ Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire todas suas dúvidas sobre nossos Agentes de IA
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#0D121F] to-[#161C2C] text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                🤔 Ainda tem dúvidas?
              </h3>
              <p className="mb-4 opacity-90">
                Fale direto com nossos especialistas em IA
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQSection;
