
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal = ({ isOpen, onClose }: WhatsAppModalProps) => {
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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate submission delay
    setTimeout(() => {
      const phoneNumber = "5511963224232";
      const whatsappMessage = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

${formData.message ? `Mensagem: ${formData.message}` : 'Gostaria de saber mais sobre as soluções da InovaTech Solutions.'}

Aguardo retorno para agendar uma consultoria técnica.`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp",
        description: "Seus dados foram preparados. Você será redirecionado para o WhatsApp.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span>Chamar no WhatsApp</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Nome completo *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Telefone *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Descreva brevemente sua necessidade (opcional)"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full resize-none"
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          * Campos obrigatórios. Seus dados serão utilizados apenas para contato.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;
