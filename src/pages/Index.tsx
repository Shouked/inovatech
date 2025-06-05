
import React from 'react';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import AboutSection from '@/components/AboutSection';
import SEOFAQSection from '@/components/SEOFAQSection';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <AboutSection />
      <SEOFAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
