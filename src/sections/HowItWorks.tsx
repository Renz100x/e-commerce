import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Store, Package, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Store,
    title: 'Create Your Store',
    description: 'Sign up and choose from 100+ professional themes designed to convert visitors into customers.',
  },
  {
    number: '02',
    icon: Package,
    title: 'Add Products',
    description: 'Upload your catalog with our intuitive product manager. Import bulk items in seconds.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Selling',
    description: 'Launch your store and accept payments instantly with our secure checkout system.',
  },
];

export function HowItWorks() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-medium rounded-full mb-6">
            Simple Setup
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Selling in{' '}
            <span className="text-gradient-green">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            From setup to first sale in minutes, not days. Our streamlined process 
            gets you selling faster than ever.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="relative"
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-white/10">
            <div 
              className={`h-full bg-green transition-all duration-1500 ${
                stepsVisible ? 'w-full' : 'w-0'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '500ms'
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  data-scroll-item
                  data-scroll-index={index}
                  className={`relative text-center transition-all duration-600 ${
                    stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Number & Icon */}
                  <div className="relative inline-flex flex-col items-center mb-8">
                    {/* Large Number */}
                    <span className="text-8xl lg:text-9xl font-extrabold text-green/20 select-none">
                      {step.number}
                    </span>
                    
                    {/* Icon Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-green flex items-center justify-center shadow-lg shadow-green/25">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
