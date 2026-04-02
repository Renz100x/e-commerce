import { useEffect, useState } from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="E-commerce entrepreneur"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-[120px] pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 2M+ businesses worldwide
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 transition-all duration-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '300ms'
            }}
          >
            Build Your{' '}
            <span className="text-gradient-green">Online Empire</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '500ms'
            }}
          >
            The all-in-one commerce platform to start, run, and grow your business. 
            Sell everywhere, manage everything, and scale with confidence.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '700ms'
            }}
          >
            <Button
              size="lg"
              className="bg-green hover:bg-green-dark text-white font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green/25 group"
              onClick={() => scrollToSection('#pricing')}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '900ms'
            }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-green" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
