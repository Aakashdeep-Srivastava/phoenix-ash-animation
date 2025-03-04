
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
    <section id="mvp" className="py-24 bg-secondary/30 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-ember-light/50 text-ember-dark text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Sustainability MVP Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our innovative sustainable solutions designed to address real-world challenges and transform business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MVP Card 1 */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="glass-card rounded-xl overflow-hidden opacity-0"
          >
            <div className="p-6 md:p-8">
              <div className="w-12 h-12 bg-horizon-light/50 rounded-lg flex items-center justify-center mb-6">
                <TreePine className="text-horizon-dark" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                Eco-Friendly Resource Management
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Our platform helps businesses track, manage, and optimize resource usage to minimize environmental impact while maximizing efficiency.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Real-time resource monitoring dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Waste reduction optimization algorithms</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-horizon-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-horizon-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Sustainable procurement recommendations</span>
                </li>
              </ul>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex items-center text-sm font-medium text-horizon-dark hover:text-horizon-dark/80 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
          
          {/* MVP Card 2 */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="glass-card rounded-xl overflow-hidden opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="p-6 md:p-8">
              <div className="w-12 h-12 bg-ember-light/50 rounded-lg flex items-center justify-center mb-6">
                <Recycle className="text-ember-dark" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                Circular Economy Solutions
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Transform your business model with our circular economy framework, designed to eliminate waste and continually reuse resources.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Product lifecycle extension strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Regenerative supply chain mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-ember-light/50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-ember-dark rounded-full"></div>
                  </div>
                  <span className="text-sm">Waste-to-resource conversion systems</span>
                </li>
              </ul>
              
              <a 
                href="mailto:aakashdeep@ashhorizontechnology.com" 
                className="inline-flex items-center text-sm font-medium text-ember-dark hover:text-ember-dark/80 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPShowcase;
