import { motion } from 'framer-motion';
import React from 'react';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-10 h-10 lg:w-12 lg:h-12 text-red-500" />,
      title: "Perdendo Vendas?",
      description: "Seus concorrentes estão inovando enquanto você luta com processos manuais e atendimento lento."
    },
    {
      icon: <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-orange-500" />,
      title: "Tempo Desperdiçado",
      description: "Sua equipe gasta horas em tarefas repetitivas que poderiam ser automatizadas."
    },
    {
      icon: <AlertTriangle className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-500" />,
      title: "Dados Inexplorados",
      description: "Volume imenso de dados da sua empresa sem análise inteligente para tomada de decisões."
    }
  ];

  const animationProps = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section 
      id="problema" 
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-100 text-foreground px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <motion.h2 
            {...animationProps(0.1)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Reconhece Algum Desses{' '}
            <span className="text-red-600">Problemas</span>?
          </motion.h2>
          <motion.p 
            {...animationProps(0.3)}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Muitas empresas enfrentam os mesmos desafios. A boa notícia é que 
            existe uma solução inteligente para cada um deles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-16">
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              {...animationProps(0.5 + index * 0.2)}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 flex justify-center">
                  {problem.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...animationProps(0.5 + problems.length * 0.2)}
          className="text-center bg-gray-900 rounded-2xl p-6 lg:p-8 text-white"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
            🚀 Está na Hora de Revolucionar Seu Negócio!
          </h3>
          <p className="text-base lg:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Enquanto seus concorrentes ficam para trás, você pode estar à frente 
            com tecnologia de ponta que trabalha 24/7 para o seu sucesso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
