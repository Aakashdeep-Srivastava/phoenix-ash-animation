
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-horizon-light/50 text-horizon-dark text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with sustainable solutions? Reach out to our team for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 bg-white border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 bg-white border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light"
                  placeholder="Your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex w-full h-10 items-center justify-center rounded-md bg-ember-DEFAULT px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-ember-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-dark"
              >
                Send Message
              </a>
            </form>
          </div>
          
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-xl p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-ember-light/50 flex items-center justify-center flex-shrink-0">
                <Mail className="text-ember-dark" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email Us</h4>
                <a 
                  href="mailto:aakashdeep@ashhorizontechnology.com" 
                  className="text-sm text-muted-foreground hover:text-ember-dark transition-colors"
                >
                  aakashdeep@ashhorizontechnology.com
                </a>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4">
              <h4 className="font-medium mb-2">Our Team</h4>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-light/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-horizon-dark" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Aakashdeep</p>
                  <a 
                    href="tel:+916394958060" 
                    className="text-sm text-muted-foreground hover:text-horizon-dark transition-colors"
                  >
                    +91 63949 58060
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-light/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-horizon-dark" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Suchi Bansal</p>
                  <a 
                    href="tel:+918377951131" 
                    className="text-sm text-muted-foreground hover:text-horizon-dark transition-colors"
                  >
                    +91 83779 51131
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-light/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-horizon-dark" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Harsh Singh</p>
                  <a 
                    href="tel:+918076153811" 
                    className="text-sm text-muted-foreground hover:text-horizon-dark transition-colors"
                  >
                    +91 80761 53811
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-border rounded-xl p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-ember-light/50 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-ember-dark" size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
