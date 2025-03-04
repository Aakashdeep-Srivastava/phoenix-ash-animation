
import React, { useEffect, useRef } from 'react';
import { ArrowRight, TreePine, Recycle } from 'lucide-react';

const MVPShowcase: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mvp" className="py-24 bg-[#0a1025]/80 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-ember-dark/30 text-ember-light text-xs font-medium px-3 py-1 rounded-full inline-block mb-4 border border-ember-light/20">
            Our Magical Solutions
          </span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Phoenix Magic Showcase
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Discover our transformative magical solutions designed to overcome challenges and elevate your business to new heights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MVP Card 1 */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="magical-card rounded-xl overflow-hidden opacity-0 transition-all duration-500 hover:shadow-horizon-light/20 hover:shadow-lg"
          >
            <div className="p-6 md:p-8 bg-[#11172E]/40 backdrop-blur-md border border-horizon-light/10">
              <div className="w-12 h-12 bg-horizon-dark/50 rounded-lg flex items-center justify-center mb-6 magical-glow">
                <TreePine className="text-horizon-light" size={24} />
              </div>
              
              <h3 className="font-cormorant text-2xl font-semibold mb-3 text-horizon-light">
                Enchanted Resource Management
              </h3>
              
              <p className="font-inter text-muted-foreground mb-6">
                Our magical platform helps businesses track, manage, and optimize resource usage with the power of phoenix transformation.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Magical resource monitoring dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Phoenix-powered optimization spells</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Enchanted procurement recommendations</span>
                </li>
              </ul>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex items-center text-sm font-medium text-horizon-light hover:text-horizon-light/80 transition-colors group"
              >
                Discover more
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
          
          {/* MVP Card 2 */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="magical-card rounded-xl overflow-hidden opacity-0 transition-all duration-500 hover:shadow-ember-light/20 hover:shadow-lg"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="p-6 md:p-8 bg-[#11172E]/40 backdrop-blur-md border border-ember-light/10">
              <div className="w-12 h-12 bg-ember-dark/50 rounded-lg flex items-center justify-center mb-6 magical-glow">
                <Recycle className="text-ember-light" size={24} />
              </div>
              
              <h3 className="font-cormorant text-2xl font-semibold mb-3 text-ember-light">
                Phoenix Rebirth Solutions
              </h3>
              
              <p className="font-inter text-muted-foreground mb-6">
                Transform your business model with our phoenix rebirth framework, designed to eliminate obstacles and continuously renew your potential.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Business lifecycle extension enchantments</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Magical supply chain transformations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-dark/70 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-light rounded-full"></div>
                  </div>
                  <span className="text-sm">Phoenix flame-powered conversion spells</span>
                </li>
              </ul>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex items-center text-sm font-medium text-ember-light hover:text-ember-light/80 transition-colors group"
              >
                Discover more
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPShowcase;
