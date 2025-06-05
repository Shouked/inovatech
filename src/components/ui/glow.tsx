import React from 'react';
import { cn } from '@/lib/utils';

// Props simplificadas, aceitando className para consistência mas sem uso específico aqui
export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string; // Mantido para compatibilidade da interface, mas não usado
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, variant, ...props }, ref) => {
    // Este componente não renderizará nada visível na versão simplificada
    return null;
    // Se precisar de um placeholder DOM:
    // return <div ref={ref} className={cn("hidden", className)} {...props} />;
  }
);
Glow.displayName = "Glow";

export { Glow }; 