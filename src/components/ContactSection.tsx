
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0a1025]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-horizon-dark/30 text-horizon-light text-xs font-medium px-3 py-1 rounded-full inline-block mb-4 border border-horizon-light/20">
            Owl Post
          </span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Our Wizards
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with phoenix magic? Send us an owl for a magical consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="magical-card rounded-xl bg-[#11172E]/40 backdrop-blur-md border border-horizon-light/10 p-6 md:p-8 transition-all duration-300 hover:shadow-horizon-light/20 hover:shadow-lg">
            <h3 className="font-cormorant text-2xl font-semibold mb-6">Send Us An Owl</h3>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium font-inter">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 bg-[#0a1025]/80 border border-horizon-light/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light/50 transition-all"
                  placeholder="Your wizard name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium font-inter">
                  Owl Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 bg-[#0a1025]/80 border border-horizon-light/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light/50 transition-all"
                  placeholder="your.owl@wizardmail.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-inter">
                  Scroll Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-3 py-2 bg-[#0a1025]/80 border border-horizon-light/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-horizon-light/50 resize-none transition-all"
                  placeholder="What magical assistance do you seek?"
                ></textarea>
              </div>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex w-full h-11 items-center justify-center rounded-md bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-ember-dark hover:to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-horizon-light/20 hover:shadow-lg"
              >
                Send Magical Message
              </a>
            </form>
          </div>
          
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="magical-card bg-[#11172E]/40 backdrop-blur-md border border-ember-light/10 rounded-xl p-6 flex items-start space-x-4 transition-all duration-300 hover:shadow-ember-light/20 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-ember-dark/50 flex items-center justify-center flex-shrink-0 magical-glow">
                <Mail className="text-ember-light" size={20} />
              </div>
              <div>
                <h4 className="font-cormorant font-medium text-lg mb-1">Owl Post</h4>
                <a 
                  href="mailto:aakashdeep@ashhorizontechnology.com" 
                  className="text-sm text-muted-foreground hover:text-ember-light transition-colors font-inter"
                >
                  aakashdeep@ashhorizontechnology.com
                </a>
              </div>
            </div>
            
            <div className="magical-card bg-[#11172E]/40 backdrop-blur-md border border-horizon-light/10 rounded-xl p-6 space-y-4 transition-all duration-300 hover:shadow-horizon-light/20 hover:shadow-lg">
              <h4 className="font-cormorant font-medium text-lg mb-2">Our Wizards</h4>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-dark/50 flex items-center justify-center flex-shrink-0 magical-glow">
                  <Phone className="text-horizon-light" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium font-cormorant">Aakashdeep</p>
                  <a 
                    href="tel:+916394958060" 
                    className="text-sm text-muted-foreground hover:text-horizon-light transition-colors font-inter"
                  >
                    +91 63949 58060
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-dark/50 flex items-center justify-center flex-shrink-0 magical-glow">
                  <Phone className="text-horizon-light" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium font-cormorant">Suchi Bansal</p>
                  <a 
                    href="tel:+918377951131" 
                    className="text-sm text-muted-foreground hover:text-horizon-light transition-colors font-inter"
                  >
                    +91 83779 51131
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-horizon-dark/50 flex items-center justify-center flex-shrink-0 magical-glow">
                  <Phone className="text-horizon-light" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium font-cormorant">Harsh Singh</p>
                  <a 
                    href="tel:+918076153811" 
                    className="text-sm text-muted-foreground hover:text-horizon-light transition-colors font-inter"
                  >
                    +91 80761 53811
                  </a>
                </div>
              </div>
            </div>
            
            <div className="magical-card bg-[#11172E]/40 backdrop-blur-md border border-ember-light/10 rounded-xl p-6 flex items-start space-x-4 transition-all duration-300 hover:shadow-ember-light/20 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-ember-dark/50 flex items-center justify-center flex-shrink-0 magical-glow">
                <MapPin className="text-ember-light" size={20} />
              </div>
              <div>
                <h4 className="font-cormorant font-medium text-lg mb-1">Chamber Location</h4>
                <p className="text-sm text-muted-foreground font-inter">
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
