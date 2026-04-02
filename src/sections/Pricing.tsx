import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for new businesses getting started',
    features: [
      'Online store',
      'Unlimited products',
      '24/7 support',
      'Basic reports',
      '2 staff accounts',
    ],
    cta: 'Start Free Trial',
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$79',
    period: '/month',
    description: 'For businesses ready to scale',
    features: [
      'Everything in Starter',
      'Professional reports',
      'Gift cards',
      'Abandoned cart recovery',
      '5 staff accounts',
      'Lower transaction fees',
    ],
    cta: 'Start Free Trial',
    isPopular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$299',
    period: '/month',
    description: 'Advanced features for large businesses',
    features: [
      'Everything in Growth',
      'Advanced analytics',
      'Third-party shipping rates',
      'Priority support',
      '15 staff accounts',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
    isPopular: false,
  },
];

export function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-medium rounded-full mb-6">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
            Simple, Transparent{' '}
            <span className="text-green">Pricing</span>
          </h2>
          <p className="text-lg text-grey-text leading-relaxed">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              data-scroll-item
              data-scroll-index={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.isPopular
                  ? 'shadow-xl scale-105 z-10 border-2 border-green'
                  : 'shadow-card hover:shadow-card-hover'
              } ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-green text-white text-sm font-semibold rounded-full animate-pulse-green">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-5xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-grey-text">{plan.period}</span>
                </div>
                <p className="text-sm text-grey-text">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green" />
                    </div>
                    <span className="text-grey-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 font-semibold transition-all duration-300 hover:scale-[1.02] ${
                  plan.isPopular
                    ? 'bg-green hover:bg-green-dark text-white'
                    : 'bg-black hover:bg-grey-dark text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '400ms',
          }}
        >
          <p className="text-grey-text text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
