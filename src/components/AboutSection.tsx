import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Foco em Resultados",
      description: "Cada solução é desenvolvida com um objetivo claro: gerar ROI mensurável para nossos clientes."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais modernas tecnologias de IA e desenvolvimento para criar soluções inovadoras."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Atendimento Consultivo",
      description: "Nossa equipe experiente entende profundamente seu negócio antes de propor qualquer solução."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Qualidade Comprovada",
      description: "98% de satisfação dos clientes e mais de 50 projetos entregues com sucesso."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D121F] to-[#161C2C]">
              InovaTech Solutions?
              </span>

            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em transformar desafios empresariais em oportunidades 
              de crescimento através da tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>Transformar negócios através da Inteligência Artificial e soluções de software personalizadas. </strong> 
                  Acreditamos que toda empresa, independente do tamanho, merece ter acesso às mais modernas 
                  tecnologias para competir e prosperar no mercado digital.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nossa visão é ser a principal referência em soluções de IA e desenvolvimento de software 
                  no Brasil, criando um futuro onde a tecnologia potencializa o sucesso de cada cliente.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Equipe trabalhando com tecnologia"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
