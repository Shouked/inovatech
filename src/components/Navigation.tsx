import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code, Brain, Home, Lightbulb, ClipboardList, Users, MessageCircle, HelpCircle } from 'lucide-react';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';

const navItemsDefinition = [
  { name: 'Início', sectionId: 'inicio', icon: Home },
  { name: 'Soluções', sectionId: 'servicos', icon: Lightbulb },
  { name: 'Metodologia', sectionId: 'processo', icon: ClipboardList },
  { name: 'Consultoria', sectionId: 'contato', icon: MessageCircle },
  { name: 'Empresa', sectionId: 'sobre', icon: Users },
  { name: 'FAQ', sectionId: 'faq', icon: HelpCircle },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeNavItemName, setActiveNavItemName] = useState<string | null>(navItemsDefinition[0].name);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);

    let newActiveName: string | null = null;
    const navbarElement = document.getElementById('main-navbar');
    const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
    const currentScrollY = window.scrollY;
    
    const detectionOffset = window.innerHeight * 0.4; 

    for (const item of navItemsDefinition) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        
        const effectiveElementTop = elementTop - navbarHeight;

        if (currentScrollY >= effectiveElementTop - detectionOffset && 
            currentScrollY < effectiveElementTop + elementHeight - detectionOffset) {
          newActiveName = item.name;
          break;
        }
      }
    }
    
    const testimonialsElement = document.getElementById('depoimentos');
    if (testimonialsElement) {
      const testimonialsTop = testimonialsElement.offsetTop;
      const testimonialsHeight = testimonialsElement.offsetHeight;
      const effectiveTestimonialsTop = testimonialsTop - navbarHeight;

      if (currentScrollY >= effectiveTestimonialsTop - detectionOffset && 
          currentScrollY < effectiveTestimonialsTop + testimonialsHeight - detectionOffset) {
        newActiveName = 'Metodologia'; 
      }
    }
    
    const totalPageHeight = document.body.scrollHeight;
    const isNearBottomOfPage = (window.innerHeight + currentScrollY) >= totalPageHeight - 50; 

    if (isNearBottomOfPage) {
        const lastNavItem = navItemsDefinition[navItemsDefinition.length - 1];
        if (document.getElementById(lastNavItem.sectionId)) {
           newActiveName = lastNavItem.name;
        }
    } else if (newActiveName === null && navItemsDefinition.length > 0) {
        const firstSectionElement = document.getElementById(navItemsDefinition[0].sectionId);
        if (firstSectionElement && currentScrollY < (firstSectionElement.offsetTop - navbarHeight - 20)) {
             newActiveName = navItemsDefinition[0].name;
        } else if (newActiveName === null && navItemsDefinition.length > 0 && activeNavItemName === null){
            newActiveName = navItemsDefinition[0].name;
        }
    }
    if (newActiveName !== null) {
        setActiveNavItemName(newActiveName);
    } else if (activeNavItemName === null && navItemsDefinition.length > 0) {
        setActiveNavItemName(navItemsDefinition[0].name);
    }

  }, [activeNavItemName]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string, itemName: string) => {
    const element = document.getElementById(sectionId);
    const navbarElement = document.getElementById('main-navbar');
    
    if (element && navbarElement) {
      const navbarHeight = navbarElement.offsetHeight;
      const targetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveNavItemName(itemName);
      setIsSheetOpen(false);
    }
  };
  
  const handleNavbarItemClick = (itemName: string) => {
    // A TubelightNavbar passa o nome do item, mas o scrollToSection correspondente já foi chamado.
    // A principal tarefa aqui seria atualizar o activeNavItemName se o scrollToSection não o fizesse.
    // Como scrollToSection já define, esta função é mais para garantir a atualização visual imediata
    // se a prop onActiveItemChange da TubelightNavbar esperasse isso.
    // No nosso caso, a prop é onItemClick, e passamos scrollToSection como callback para a navbar interna.
    // setActiveNavItemName(itemName); // Pode ser redundante se o scroll já atualiza corretamente.
  };

  return (
    <nav 
      id="main-navbar" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-center lg:items-center lg:space-x-8">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Brain className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">InovaTech</span>
              <span className="text-xl font-light text-gray-600 ml-1">Solutions</span>
              <div className="text-xs text-gray-500 font-medium">AI & Software Development</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <TubelightNavbar 
              items={navItemsDefinition} 
              scrollToSection={(sectionId) => scrollToSection(sectionId, navItemsDefinition.find(item => item.sectionId === sectionId)!.name)} 
              activeItemName={activeNavItemName}
              onItemClick={handleNavbarItemClick}
            />
          </div>
        </div>
        <div className="lg:hidden absolute top-1/2 right-4 -translate-y-1/2 transform">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu size={20} />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {navItemsDefinition.map((item) => (
                  <button 
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId, item.name)}
                    className={`transition-colors text-left text-lg font-medium ${
                      activeNavItemName === item.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
