import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "QuantumZyme Blog Website",
      description: "A comprehensive blog platform with modern UI/UX design",
      image: "/lovable-uploads/2b93e50f-2120-4e11-996c-2ccbebab71cc.png",
      tech: ["React", "UI/UX Design", "Responsive Design"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Aiden Chatbot",
      description: "AI-powered chatbot with custom UI and logo design",
      image: "/lovable-uploads/3f37dea8-4469-4e5c-92c5-c95b3aeb1a9a.png",
      tech: ["AI", "Chatbot Design", "Branding"],
      github: "#",
      live: "#"
    },
    {
      title: "Banking Bot System",
      description: "Sophisticated banking bot using Botpress for customer service",
      image: "/lovable-uploads/72999da6-b8a5-4763-9db7-fb49c67a3432.png",
      tech: ["Botpress", "AI", "Banking", "Customer Service"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "User-friendly to-do list application for efficient task management",
      image: "/lovable-uploads/9ee51ac6-13a2-401d-81c6-40a45c45104c.png",
      tech: ["React", "Task Management", "UI/UX"],
      github: "#",
      live: "#"
    },
    {
      title: "Research Publication",
      description: "Published research paper on modern development practices",
      image: "/lovable-uploads/acf54b56-db0c-465a-b281-1d6a4e44292c.png",
      tech: ["Research", "Publication", "Academic"],
      github: "#",
      live: "#"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design, development, and AI solutions
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl rounded-full w-12 h-12"
          >
            ←
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl rounded-full w-12 h-12"
          >
            →
          </Button>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-8 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="flex-shrink-0 w-80 group hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: 'perspective(1000px) rotateY(0deg)',
                  transition: 'transform 0.6s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
                }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-rich-brown">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
      </div>
    </section>
  );
};

export default ProjectShowcase;