
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver uma solução personalizada?",
      answer: "O prazo varia conforme a complexidade do projeto. Soluções simples como bots para WhatsApp ficam prontas em 7-15 dias. Softwares mais complexos podem levar de 30 a 90 dias. Sempre trabalhamos com entregas incrementais para você acompanhar o progresso."
    },
    {
      question: "Preciso ter conhecimento técnico para usar as soluções?",
      answer: "Não! Todas as nossas soluções são projetadas para serem intuitivas e fáceis de usar. Fornecemos treinamento completo para sua equipe e documentação detalhada. Nosso suporte técnico está sempre disponível para ajudar."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte 24/7 através de múltiplos canais: WhatsApp, e-mail e telefone. Para questões urgentes, garantimos resposta em até 2 horas. Também fornecemos atualizações regulares e melhorias contínuas nas soluções."
    },
    {
      question: "Qual o investimento aproximado para começar?",
      answer: "O investimento varia conforme suas necessidades específicas. Temos soluções a partir de R$ 2.500/mês para bots básicos, até projetos customizados maiores. Oferecemos uma consultoria gratuita para avaliar suas necessidades e apresentar uma proposta personalizada."
    },
    {
      question: "As soluções podem ser integradas com nossos sistemas atuais?",
      answer: "Sim! Desenvolvemos todas as soluções pensando em integração. Podemos conectar com CRMs, ERPs, plataformas de e-commerce, redes sociais e praticamente qualquer sistema que sua empresa já utilize."
    },
    {
      question: "Existe garantia nos serviços?",
      answer: "Oferecemos garantia de satisfação de 30 dias. Se não ficar completamente satisfeito com os resultados, devolvemos 100% do investimento. Além disso, todos os desenvolvimentos têm garantia técnica por 12 meses."
    },
    {
      question: "Como posso medir o ROI das soluções implementadas?",
      answer: "Todas as nossas soluções incluem painéis de analytics detalhados. Você pode acompanhar métricas como aumento de conversões, redução de tempo de atendimento, leads capturados, vendas geradas, entre outros indicadores relevantes para seu negócio."
    },
    {
      question: "Vocês trabalham com empresas de que porte?",
      answer: "Atendemos desde pequenas empresas até grandes corporações. Nossas soluções são escaláveis e se adaptam ao tamanho e necessidades específicas de cada cliente, sempre mantendo o foco em resultados e ROI."
    }
  ];

  return (
    <section className="pt-8 sm:pt-14 md:pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as principais dúvidas sobre nossos serviços e processos.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#0D121F] to-[#161C2C] rounded-2xl p-8 text-white">

              <h3 className="text-2xl font-bold mb-4">
                🤔 Ainda tem dúvidas?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Nossa equipe está pronta para esclarecer qualquer questão específica 
                sobre seu projeto ou necessidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511999999999"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  💬 WhatsApp Direto
                </a>
                <a 
                  href="mailto:contato@inovatechsolutions.com.br"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  📧 Enviar E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
