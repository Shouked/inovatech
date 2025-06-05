import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Phone, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Solicitação Recebida",
        description: "Nossa equipe entrará em contato em até 4 horas úteis para agendar sua consultoria técnica.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="pt-10 sm:pt-16 md:pt-20 pb-20 bg-gradient-to-r from-[#0D121F] to-[#161C2C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme Sua Empresa com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Soluções Inteligentes
              </span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Agende uma consultoria técnica gratuita e descubra como nossas soluções 
              podem otimizar seus processos e acelerar seus resultados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-semibold mb-2">Consultoria Gratuita</h3>
                <p className="text-sm opacity-80">Análise completa das suas necessidades tecnológicas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-semibold mb-2">Proposta Personalizada</h3>
                <p className="text-sm opacity-80">Solução sob medida para seu negócio</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">Implementação Completa</h3>
                <p className="text-sm opacity-80">Acompanhamento técnico durante todo o projeto</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                Solicitar Consultoria Técnica
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email corporativo *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefone para contato *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva seu projeto ou necessidade tecnológica..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-blue-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Consultoria Gratuita"}
                </Button>
              </form>

              <p className="text-sm opacity-70 mt-4 text-center">
                * Resposta garantida em até 4 horas úteis
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">
                  Canais de Atendimento
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone Comercial</h4>
                      <p className="text-white/80">(11) 3333-4444</p>
                      <p className="text-sm text-white/60">Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp Empresarial</h4>
                      <p className="text-white/80">(11) 96322-4232</p>
                      <p className="text-sm text-white/60">Atendimento rápido via chat</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Corporativo</h4>
                      <p className="text-white/80">contato@inovatechsolutions.com.br</p>
                      <p className="text-sm text-white/60">Propostas técnicas e orçamentos</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Escritório</h4>
                      <p className="text-white/80">Av. Paulista, 1000 - São Paulo/SP</p>
                      <p className="text-sm text-white/60">Reuniões presenciais agendadas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-300">
                  🚀 Compromisso de Qualidade
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Análise técnica detalhada sem custo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Proposta comercial personalizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Suporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Garantia de qualidade nos projetos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
