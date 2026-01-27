import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "milos.avramovic@live.com",
      href: "mailto:milos.avramovic@live.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/milos-avramovic-5424ab30",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Valencia, Spain",
    },
  ];

  return (
    <section id="contact" className="section-alt-bg">
      <div className="section-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Let's discuss how I can help with your IT infrastructure needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Available for Work</h4>
              <p className="text-sm text-muted-foreground">
                Open to full-time positions, contract work, and consulting opportunities. 
                Available for remote work and relocation within Europe.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-background resize-none"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
