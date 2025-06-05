import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Mail, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Agentes de IA para Atendimento",
      description: "Atendimento 24/7 via WhatsApp, Instagram e sites que nunca dorme, nunca tira férias.",
      process: [
        "Integração com WhatsApp Business API, Instagram e websites",
        "Configuração de fluxos personalizados e FAQs",
        "IA responde 80% das dúvidas instantaneamente",
        "Painel de acompanhamento em tempo real"
      ],
      benefits: [
        "Atendimento 24/7 sem pausas",
        "Redução de 70% no tempo de resposta",
        "Aumento de 50% na captura de leads",
        "Equipe focada em tarefas estratégicas",
        "Padronização total do atendimento"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Automação de Relatórios",
      description: "Relatórios complexos gerados automaticamente com análises inteligentes.",
      process: [
        "Automatização da coleta de dados",
        "Cruzamento inteligente de informações",
        "Destaque automático de pontos críticos",
        "Distribuição programada para stakeholders"
      ],
      benefits: [
        "Economia de 80% do tempo em relatórios",
        "Redução total de erros manuais",
        "Relatórios mais precisos e rápidos",
        "Foco da equipe em análise estratégica"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "IA para Análise de Dados",
      description: "Transforme dados em insights poderosos para decisões mais inteligentes.",
      process: [
        "Coleta e processamento inteligente de dados",
        "Análise automatizada com machine learning",
        "Geração de insights personalizados",
        "Relatórios visuais e acionáveis"
      ],
      benefits: [
        "Decisões baseadas em dados reais",
        "Identificação de tendências emergentes",
        "Otimização automática de estratégias",
        "Previsão precisa de resultados"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Sites Empresariais Profissionais",
      description: "Sites modernos, responsivos e otimizados para converter visitantes em clientes.",
      process: [
        "Design responsivo e atrativo",
        "Otimização para SEO e performance",
        "Integração com ferramentas de marketing",
        "Painel administrativo intuitivo"
      ],
      benefits: [
        "Maior credibilidade e confiança",
        "Melhor experiência do usuário",
        "Mais visibilidade no Google",
        "Geração automatizada de leads"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Softwares Web Personalizados",
      description: "Soluções sob medida para otimizar seus processos internos e dar vantagem competitiva.",
      process: [
        "Levantamento detalhado de requisitos",
        "Desenvolvimento ágil com tecnologias modernas",
        "Foco em usabilidade e escalabilidade",
        "Testes rigorosos e deploy seguro"
      ],
      benefits: [
        "Otimização completa de processos internos",
        "Solução única para problemas específicos",
        "Vantagem competitiva no mercado",
        "ROI comprovado em até 6 meses"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-red-600" />,
      title: "E-mail Marketing Inteligente",
      description: "Sequências de e-mail personalizadas que nutrem leads e aumentam conversões.",
      process: [
        "Criação de sequências personalizadas",
        "Segmentação inteligente de listas",
        "Disparos baseados em comportamento",
        "Otimização contínua com IA"
      ],
      benefits: [
        "Nutrição eficiente de leads",
        "Aumento de 3x na taxa de conversão",
        "Relacionamento contínuo automatizado",
        "ROI médio de 400% em e-mail marketing"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animationProps = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section 
      id="servicos" 
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-100 text-foreground px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <motion.h2 
            {...animationProps(0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Nossas Soluções{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Inteligentes
            </span>
          </motion.h2>
          <motion.p 
            {...animationProps(0.3)}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Cada serviço é projetado para resolver problemas específicos e 
            gerar resultados mensuráveis para o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              {...animationProps(0.5 + index * 0.15)}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-slate-100 rounded-lg shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2 text-blue-600" />
                  Como Funciona:
                </h4>
                <ul className="space-y-2">
                  {service.process.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Principais Benefícios:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="w-full mt-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Quero Saber Mais
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...animationProps(0.5 + services.length * 0.15 + 0.2)}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Pronto para Revolucionar Seu Negócio?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Cada dia sem automação é receita perdida. Vamos conversar sobre 
              como multiplicar seus resultados com nossas soluções.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Agendar Demonstração Gratuita
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
