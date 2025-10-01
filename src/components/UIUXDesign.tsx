import { ExternalLink, Palette, Smartphone, Monitor, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const UIUXDesign = () => {
  const projects = [
    {
      title: "Nexas Work Platform",
      description: "Modern work collaboration platform with intuitive interface and seamless user experience",
      url: "https://www.figma.com/design/8IlWTlmTxfVNas6W8psUJo/Nexas_work?node-id=0-1&t=Oj9WtV6PbEI7Nly0-1",
      category: "Web App Design",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Harmoni Landing Page",
      description: "Beautiful landing page design focused on user engagement and conversion optimization",
      url: "https://www.figma.com/design/SNGdR3OCFhr93LQrmuiaZw/Harmoni-Landig-page?node-id=0-1&t=N1iDPLocBB1qfH6I-1",
      category: "Landing Page",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Quantumzyne Platform",
      description: "Advanced quantum computing interface with complex data visualization and user flows",
      url: "https://www.figma.com/design/pambi3lB8DSZOiQ8TjzvhT/Quantumzyne?node-id=1-712&t=nFa06vfJyuEsfpAz-1",
      category: "Enterprise App",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Taxi Service App",
      description: "Mobile-first taxi booking application with real-time tracking and user-friendly interface",
      url: "https://www.figma.com/design/FNeeZCDPvFDAcQkNMLaE2f/Taxi_Service?node-id=0-1&t=Sgk4Y1a9mbIszhDt-1",
      category: "Mobile App",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Interior Design Portfolio",
      description: "Elegant interior design showcase with sophisticated layouts and visual hierarchy",
      url: "https://www.figma.com/design/rLt778VpD4ojBHwU0fH68u/interior?node-id=0-1&t=DYj6OS8xIbDOPWXN-1",
      category: "Portfolio Site",
      icon: <Palette className="w-5 h-5" />
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding user needs, market analysis, and competitive research",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Wireframing & Prototyping",
      description: "Creating low-fi wireframes and interactive prototypes",
      icon: "📐"
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful interfaces with consistent design systems",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Testing & Iteration",
      description: "User testing, feedback collection, and design refinement",
      icon: "🔄"
    }
  ];

  return (
    <section id="uiux" className="py-20 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            UI/UX Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating intuitive, beautiful, and user-centered digital experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-rich-brown flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <div>{project.title}</div>
                      <div className="text-xs text-muted-foreground font-normal">{project.category}</div>
                    </div>
                  </div>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </CardTitle>
                <CardDescription className="text-foreground text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  size="sm"
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Design
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl p-6 shadow-soft mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-rich-brown mb-2">
                Design Resources & Assets
              </h3>
              <p className="text-muted-foreground">
                Access additional design files, prototypes, and creative assets
              </p>
            </div>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a 
                href="https://drive.google.com/drive/folders/1t_2SRFjTvfMv1VugsEv4HqX_6emSi0iB?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </a>
            </Button>
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-white rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-rich-brown text-center mb-8">
            Design Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((process, index) => (
              <div 
                key={process.step}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{process.icon}</div>
                <div className="text-sm font-bold text-primary mb-2">{process.step}</div>
                <h4 className="font-semibold text-rich-brown mb-3">{process.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-soft">
            <div className="text-2xl">✨</div>
            <div>
              <div className="text-lg font-semibold text-rich-brown">User-Centered Design</div>
              <div className="text-muted-foreground">Every design decision is backed by user research and testing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;