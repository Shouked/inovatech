
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-bold">InovaTech Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando negócios com Inteligência Artificial e Software Sob Medida. 
              Potencialize seus resultados com nossas soluções inteligentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Softwares Web Personalizados</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Sites Empresariais</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Agentes de IA</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Análise de Dados</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Automação de E-mails</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Bots para WhatsApp</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Como Trabalhamos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>São Paulo, SP - Brasil<br />Atendimento Nacional</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(11) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contato@inovatechsolutions.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span>www.inovatechsolutions.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} InovaTech Solutions. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
