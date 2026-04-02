import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: '1',
    quote: "CommercePro helped me turn my passion into a six-figure business. The platform is intuitive and the support is incredible. I couldn't have done it without them.",
    author: 'Sarah Mitchell',
    role: 'Founder, Glow Skincare',
    avatar: '/avatar-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    quote: "I went from zero to my first sale in under 24 hours. The tools are powerful yet simple to use. It's the best investment I've made for my business.",
    author: 'Marcus Chen',
    role: 'Owner, TechGear Store',
    avatar: '/avatar-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    quote: "The analytics alone have helped me increase conversions by 40%. Best investment for my business. The insights are game-changing.",
    author: 'Emma Rodriguez',
    role: 'CEO, Fashion Forward',
    avatar: '/avatar-3.jpg',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 lg:py-32 bg-grey-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-medium rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Loved by{' '}
            <span className="text-gradient-green">Entrepreneurs</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-black rounded-3xl p-8 lg:p-12 border border-white/5">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-green mb-6" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-white/60 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-green w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
