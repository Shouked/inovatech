"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

interface HeroAction {
  text: string;
  hrefId?: string;
  hrefUrl?: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
}

interface HeroProps {
  badge?: {
    text: string;
    action?: {
      text: string;
      hrefId?: string;
      hrefUrl?: string;
    };
  };
  title: React.ReactNode;
  description: string;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
  };
}

export function AdaptedHeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className={cn(
        "bg-gradient-to-br from-slate-50 via-white to-blue-100 text-foreground",
        "pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-16 md:pb-16 px-4",
        "overflow-hidden"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8 md:gap-10">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="gap-2 border-blue-300 text-blue-700"
              >
                <span className="font-semibold">{badge.text}</span>
                {badge.action && (
                  <button
                    onClick={() =>
                      badge.action.hrefId
                        ? scrollToSection(badge.action.hrefId)
                        : badge.action.hrefUrl
                        ? window.open(badge.action.hrefUrl, "_blank")
                        : undefined
                    }
                    className="flex items-center gap-1 hover:underline"
                  >
                    {badge.action.text}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: badge ? 0.3 : 0.1 }}
            className="relative z-10 inline-block bg-gradient-to-r from-gray-900 via-slate-800 to-blue-700 bg-clip-text text-3xl font-extrabold leading-tight text-transparent drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: badge ? 0.5 : 0.3 }}
            className="text-md relative z-10 max-w-[650px] font-medium text-gray-600 sm:text-lg md:text-xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: badge ? 0.7 : 0.5 }}
            className="relative z-10 flex justify-center gap-4 flex-wrap"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                size="lg"
                onClick={() =>
                  action.hrefId
                    ? scrollToSection(action.hrefId)
                    : action.hrefUrl
                    ? window.open(action.hrefUrl, "_blank")
                    : undefined
                }
                className="min-w-[180px] py-3 px-6 text-base"
              >
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.text}
              </Button>
            ))}
          </motion.div>

          {image.src && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: badge ? 0.9 : 0.7 }}
              className="relative pt-6 sm:pt-8 md:pt-10 w-full flex justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full lg:w-1/2 h-auto object-cover shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

const Hero = () => {
  const userTitle = (
    <>
      Soluções Empresariais em{" "}
      <span className="text-blue-600">Inteligência Artificial</span>{" "}
      & Desenvolvimento de Software
    </>
  );

  const userDescription =
    "Transformamos processos empresariais com agentes de IA inteligentes, " +
    "sistemas personalizados e automação avançada para empresas que buscam excelência operacional.";

  const userActions: HeroAction[] = [
    {
      text: "Agendar Consultoria Técnica",
      hrefId: "contato",
      variant: "default",
      icon: <ArrowRight className="w-5 h-5" />,
    },
  ];

  const userImage = {
    src: "/image.png",
    alt: "Tecnologia e Inteligência Artificial",
  };

  const userBadge = {
    text: "Novidade",
    action: {
      text: "Saiba Mais",
      hrefId: "servicos",
    },
  };

  return (
    <AdaptedHeroSection
      // badge={userBadge}
      title={userTitle}
      description={userDescription}
      actions={userActions}
      image={userImage}
    />
  );
};

export default Hero;
