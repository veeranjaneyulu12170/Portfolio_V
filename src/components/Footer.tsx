import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/veeranjaneyulu12170",
      name: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      name: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "Veerapepakayala193@gmail.com",
      name: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rich-brown text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="press-start-2p-regular1 text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className=" font-mono text-white/80 leading-relaxed">
              Creative developer crafting digital experiences that blend technology with artistry. 
              Specializing in full-stack development, UI/UX design, and visual effects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="font-mono">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#webdev' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-warm-orange transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="font-mono">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-white/80">
              <p>Ready to start your next project?</p>
              <a 
                href="mailto:hello@yourname.dev"
                className="block hover:text-warm-orange transition-colors duration-300"
              >
                veerapepakayala193@gmail.com
              </a>
              <p className="text-sm">Available worldwide for remote work</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-warm-orange transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <span>© {currentYear} Portfolio</span>
            <span>•</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-warm-orange" /> and code
            </span>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className="hover:text-warm-orange transition-colors duration-300"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;