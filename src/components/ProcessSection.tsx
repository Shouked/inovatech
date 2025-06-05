import { motion } from 'framer-motion';
import React from 'react';
import { Search, Lightbulb, TestTube, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Diagnóstico e Planejamento",
      description: "Analisamos profundamente seu negócio, identificamos oportunidades e criamos um plano estratégico personalizado."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Design e Desenvolvimento",
      description: "Criamos soluções sob medida usando tecnologias de ponta, com foco na experiência do usuário e resultados."
    },
    {
      icon: <TestTube className="w-8 h-8 text-purple-600" />,
      title: "Testes e Validação",
      description: "Realizamos testes rigorosos para garantir qualidade, segurança e performance antes do lançamento."
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Lançamento e Acompanhamento",
      description: "Implementamos a solução e fornecemos suporte contínuo para maximizar os resultados do seu investimento."
    }
  ];

  const animationProps = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section 
      id="processo" 
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-100 text-foreground px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <motion.h2 
            {...animationProps(0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-black">Como</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-800">
              Trabalhamos
            </span>
          </motion.h2>
          <motion.p 
            {...animationProps(0.3)}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Um processo estruturado e comprovado que garante resultados 
            excepcionais para o seu projeto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              {...animationProps(0.5 + index * 0.2)}
              className="relative"
            >
              {/* Connector Line - não precisa de animação separada, aparecerá com o card */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 h-full flex flex-col">
                <div className="text-center flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...animationProps(0.5 + steps.length * 0.2 + 0.2)} // Delay após os cards
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ⚡ Processo Ágil e Transparente
            </h3>
            <p className="text-gray-600 mb-6">
              Mantemos você informado em cada etapa, com entregas incrementais 
              e feedback constante para garantir que o resultado supere suas expectativas.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15</div>
                <div>Dias Médios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div>Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div>Suporte</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
