import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "veerapepakayala193@gmail.com",
      link: "mailto:hello@yourname.dev"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 8374526976",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Andhra Pradesh",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="font-mono text-white w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/veeranjaneyulu12170"
    },
    {
      icon: <Linkedin className="font-mono text-white w-6 h-6" />,
      name: "LinkedIn", 
      url: "https://linkedin.com"
    },
    {
      icon: <Mail className="font-mono text-white w-6 h-6" />,
      name: "Email",
      url: "veeranjaneyulupepakayala@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white press-start-2p-regular1 text-2xl md:text-5xl font-bold text-rich-brown mb-4">
            Let's Work Together
          </h2>
          <p className="text-white font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-green  backdrop-blur-sm ">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-white press-start-2p-regular1 text-xl ">Send a Message</CardTitle>
              <CardDescription className="text-white font-mono">
                Fill out the form below and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-mono text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-white block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="font-mono text-white block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-white block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 bg-green  backdrop-blur-sm ">
            {/* Contact Details */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="press-start-2p-regular1 text-white text-xl">Get in Touch</CardTitle>
                <CardDescription className="font-mono text-white">
                  Prefer to reach out directly? Here's how you can contact me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4">
                    <div className="font-mono text-white p-2 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-mono text-white font-medium text-foreground">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-mono text-white text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-mono text-white text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-soft bg-green  backdrop-blur-sm ">
              <CardHeader>
                <CardTitle className="text-xl press-start-2p-regular1 text-white">Connect Online</CardTitle>
                <CardDescription className="font-mono text-white">
                  Follow my work and connect on social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className=" font-mono text-white flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-soft bg-soft-beige bg-green  backdrop-blur-sm ">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <div className="font-semibold font-mono text-white">Available for Projects</div>
                    <div className="font-mono text-white text-muted-foreground text-sm">
                      Currently accepting new projects and collaborations
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-soft">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-lg font-semibold text-rich-brown">Have a Project in Mind?</div>
              <div className="text-muted-foreground">Let's discuss how we can bring your vision to life</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;