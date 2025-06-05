import React from 'react';
import { cn } from '@/lib/utils';

// Interface simplificada para props
export interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string; // Adicionada prop 'type' opcional para compatibilidade
}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, children, type, ...props }, ref) => (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  ),
);
Mockup.displayName = "Mockup";

// Interface simplificada para props
export interface MockupFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string; // Adicionada prop 'size' opcional para compatibilidade
}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, children, size, ...props }, ref) => (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {children}
    </div>
  ),
);
MockupFrame.displayName = "MockupFrame";

export { Mockup, MockupFrame }; 