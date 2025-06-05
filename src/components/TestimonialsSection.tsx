import { motion } from 'framer-motion';
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechVendas Ltda",
      role: "CEO",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Antes da InovaTech, nosso atendimento era caótico e perdíamos muitos leads. Após implementarmos o Agente de IA para WhatsApp, conseguimos aumentar nossas vendas em 40% e reduzir o tempo de resposta em 90%. Estamos muito satisfeitos!",
      result: "+40% vendas em 3 meses"
    },
    {
      name: "Marina Costa",
      company: "Digital Solutions",
      role: "Diretora de Marketing",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b950?auto=format&fit=crop&w=150&h=150&q=80",
      text: "O software personalizado que a InovaTech desenvolveu revolucionou nossos processos internos. Automatizamos 70% das tarefas repetitivas e nossa equipe agora pode focar no que realmente importa: resultados estratégicos.",
      result: "70% menos tempo em tarefas manuais"
    },
    {
      name: "Roberto Mendes",
      company: "Inovação Corp",
      role: "Diretor Comercial",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      text: "A automação de e-mail marketing que implementaram foi um divisor de águas. Nossa taxa de conversão triplicou e o ROI do e-mail marketing chegou a 500%. Recomendo a InovaTech para qualquer empresa que quer crescer.",
      result: "3x mais conversões por e-mail"
    }
  ];

  const stats = [
    { number: "50+", label: "Empresas Atendidas" },
    { number: "200%", label: "ROI Médio dos Clientes" },
    { number: "24/7", label: "Suporte Técnico" },
    { number: "98%", label: "Taxa de Satisfação" }
  ];

  const animationProps = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section 
      id="depoimentos" 
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-100 text-foreground px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <motion.h2 
            {...animationProps(0.1)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Clientes Dizem
            </span>
          </motion.h2>
          <motion.p 
            {...animationProps(0.3)}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Resultados reais de empresas que transformaram seus negócios 
            com nossas soluções.
          </motion.p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              {...animationProps(0.5 + index * 0.1)}
              className="text-center bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              {...animationProps(0.5 + stats.length * 0.1 + index * 0.15)} // Delay após stats
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-500 mb-4 flex-shrink-0" />
              </div>
              
              <p className="text-gray-700 mb-6 italic flex-grow">
                "{testimonial.text}"
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <div className="text-green-800 font-semibold text-sm">
                  📈 Resultado: {testimonial.result}
                </div>
              </div>

              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
                {/* Rating stars moved to be part of this flex container for alignment if needed */}
                <div className="flex items-center ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof / CTA */}
        <motion.div 
          {...animationProps(0.5 + stats.length * 0.1 + testimonials.length * 0.15 + 0.2)} // Delay após testimonials
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white"> {/* Fundo alterado para gray-900 */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🏆 Junte-se aos Nossos Clientes de Sucesso
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Mais de 50 empresas já transformaram seus resultados com nossas soluções. 
              Sua empresa pode ser a próxima história de sucesso!
            </p>
            {/* Adicionar um botão aqui se desejado, similar aos outros CTAs */}
            {/* <Button className="bg-white text-blue-700 hover:bg-gray-100 ...">Fale Conosco</Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
