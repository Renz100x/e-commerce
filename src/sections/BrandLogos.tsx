import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const brands = [
  { name: 'Nike', logo: 'NIKE' },
  { name: 'Adidas', logo: 'ADIDAS' },
  { name: 'Supreme', logo: 'SUPREME' },
  { name: 'Glossier', logo: 'GLOSSIER' },
  { name: 'Allbirds', logo: 'ALLBIRDS' },
  { name: 'Kylie', logo: 'KYLIE' },
  { name: 'Gymshark', logo: 'GYMSHARK' },
  { name: 'Fashion Nova', logo: 'FASHION NOVA' },
];

export function BrandLogos() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <p className="text-center text-white/50 text-sm uppercase tracking-widest">
          Trusted by 2M+ businesses worldwide
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll-left">
          {/* First set */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 px-12 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-white/30 hover:text-white/60 transition-colors duration-300 whitespace-nowrap tracking-wider">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
