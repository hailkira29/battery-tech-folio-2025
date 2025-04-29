
import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-cyber-blue" />, label: "Email", value: "contact@batteryfolio.com" },
    { icon: <Phone className="w-5 h-5 text-cyber-blue" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-5 h-5 text-cyber-blue" />, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display mb-2 text-gradient text-center">CONTACT ME</h2>
          <p className="text-cyber-gray text-center mb-12 font-mono">Get in touch for opportunities & collaborations</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={200} direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-display text-white mb-4">Let's Connect</h3>
              <p className="text-cyber-gray mb-8">
                Interested in working together or have questions about battery technology? Feel free to reach out through the form or using my contact information.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 pt-1">{item.icon}</div>
                    <div>
                      <p className="text-sm font-mono text-cyber-gray">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cyber-panel p-6 rounded-lg mt-12">
                <h4 className="text-lg font-display text-white mb-3">Working Hours</h4>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-cyber-gray">Monday - Friday:</span>
                    <span className="text-cyber-blue">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-gray">Saturday:</span>
                    <span className="text-cyber-blue">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-gray">Sunday:</span>
                    <span className="text-cyber-blue">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <form onSubmit={handleSubmit} className="cyber-panel p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-mono text-cyber-gray mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-dark/40 border border-cyber-blue/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300 interactive"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-mono text-cyber-gray mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-dark/40 border border-cyber-blue/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300 interactive"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-mono text-cyber-gray mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-cyber-dark/40 border border-cyber-blue/20 rounded-md py-3 px-4 text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300 interactive resize-none"
                  placeholder="I'd like to discuss a project with you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-md bg-cyber-blue/20 hover:bg-cyber-blue/30 text-cyber-blue font-mono uppercase tracking-wider transition-colors duration-300 relative overflow-hidden cyber-border interactive disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-cyber-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </div>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
