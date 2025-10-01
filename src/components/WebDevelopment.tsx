import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevelopment = () => {
  const projects = [
    {
      title: "BeyondChat",
      description: "Advanced chatbot application with modern UI and intelligent conversation capabilities",
      technologies: ["React", "Node.js", "AI Integration"],
      githubUrl: "https://github.com/veeranjaneyulu12170/beyondchat",
      liveUrl: null,
      featured: true
    },
    {
      title: "Banking Bot",
      description: "Interactive banking assistant built with Framer, featuring smooth animations and user-friendly interface",
      technologies: ["Framer", "Interactive Design", "Animation"],
      githubUrl: null,
      liveUrl: "https://bankingbot.framer.website/",
      featured: true
    },
    {
      title: "Voice Assistant",
      description: "Intelligent voice-activated assistant with speech recognition and natural language processing",
      technologies: ["JavaScript", "Speech API", "NLP"],
      githubUrl: "https://github.com/veeranjaneyulu12170/voice-asistant",
      liveUrl: null,
      featured: false
    }
  ];

  return (
    <section id="webdev" className="py-20 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            Web Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern web applications built with cutting-edge technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:scale-105 transition-all duration-300 animate-fade-in shadow-soft hover:shadow-medium ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-rich-brown flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      size="sm"
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-soft">
            <div className="text-2xl">⚡</div>
            <div>
              <div className="text-lg font-semibold text-rich-brown">Performance Focused</div>
              <div className="text-muted-foreground">Optimized for speed, accessibility, and user experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;