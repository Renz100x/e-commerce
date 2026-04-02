import { ShoppingBag, CreditCard, Truck, BarChart3, Users, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: ShoppingBag,
    title: 'Online Store',
    description: 'Build a beautiful, customizable storefront that converts visitors into customers',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Accept all major payment methods with our secure, PCI-compliant checkout',
  },
  {
    icon: Truck,
    title: 'Shipping Made Easy',
    description: 'Calculate rates, print labels, and manage orders from one dashboard',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Track sales, customer behavior, and growth with real-time reports',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Build relationships with CRM tools, email marketing, and loyalty programs',
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Manage your store on-the-go with our powerful mobile app',
  },
];

export function Features() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="features" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need to{' '}
            <span className="text-gradient-green">sell</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Powerful features to help you build, launch, and grow your online store
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-scroll-item
                data-scroll-index={index}
                className={`group p-8 rounded-2xl bg-grey-dark/50 border border-white/5 transition-all duration-500 hover:bg-grey-dark hover:border-green/30 hover:-translate-y-2 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-green/20 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-green" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
