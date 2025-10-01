import { ExternalLink, Database, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FullStack = () => {
  const projects = [
    {
      title: "CNNCT Platform",
      description: "Full-stack social networking platform with real-time features, user authentication, and comprehensive backend infrastructure",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      liveUrl: "https://cnnct-1.onrender.com",
      features: ["Real-time messaging", "User profiles", "Social features", "Responsive design"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mini Link Shortener",
      description: "URL shortening service with analytics, custom aliases, and link management dashboard",
      technologies: ["Node.js", "MongoDB", "Express", "Analytics API"],
      liveUrl: "https://mini-link-ddch.onrender.com",
      features: ["URL shortening", "Click analytics", "Custom aliases", "Link management"],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const techStack = [
    { name: "Frontend", techs: ["React", "TypeScript", "Tailwind CSS"], icon: "🎨" },
    { name: "Backend", techs: ["Node.js", "Express", "REST APIs"], icon: "⚙️" },
    { name: "Database", techs: ["MongoDB", "Mongoose", "Redis"], icon: "🗄️" },
    { name: "DevOps", techs: ["Docker", "AWS", "Vercel", "Render"], icon: "🚀" }
  ];

  return (
    <section id="fullstack" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            Full Stack Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end application development with modern technologies and scalable architecture
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-rich-brown flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    {project.title}
                  </div>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </CardTitle>
                <CardDescription className="text-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-rich-brown mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

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
                
                <Button 
                  size="sm"
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Application
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="bg-white rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-rich-brown text-center mb-8">
            Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => (
              <div 
                key={category.name}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h4 className="font-semibold text-rich-brown mb-3">{category.name}</h4>
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div 
                      key={tech}
                      className="text-sm text-muted-foreground bg-soft-beige px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-soft">
            <div className="text-2xl">🔧</div>
            <div>
              <div className="text-lg font-semibold text-rich-brown">Scalable Solutions</div>
              <div className="text-muted-foreground">Building robust applications that grow with your business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStack;