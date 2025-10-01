import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Web Dev', href: '#webdev' },
    { label: 'UI/UX', href: '#uiux' },
    { label: 'Full Stack', href: '#fullstack' },
    { label: 'Graphics', href: '#graphics' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-white text-lg font-medium">Veeranjaneyulu</span>
          </div>

          {/* Menu Button and Contact Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:flex bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
            >
              Contact Me
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Full Screen Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="grid grid-cols-1 gap-6 max-w-md">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-2xl font-light hover:text-gray-300 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="sm:hidden bg-white text-black hover:bg-white/90 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 animate-fade-in mt-8"
                  style={{ animationDelay: `${navItems.length * 0.1}s` }}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;