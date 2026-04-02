import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'How does the free trial work?',
    answer: 'Start with a 14-day free trial with full access to all features. No credit card required. You can upgrade, downgrade, or cancel at any time during your trial.',
  },
  {
    id: '2',
    question: 'Can I use my own domain?',
    answer: 'Yes! You can connect your existing domain or purchase a new one through our platform. We provide free SSL certificates for all custom domains.',
  },
  {
    id: '3',
    question: 'What payment methods can I accept?',
    answer: 'Accept all major credit cards, PayPal, Apple Pay, Google Pay, and 100+ payment providers. Our secure checkout supports multiple currencies and international payments.',
  },
  {
    id: '4',
    question: 'Is there a transaction fee?',
    answer: 'No hidden fees from us. You only pay your payment processor\'s standard rates. We believe in transparent pricing with no surprises.',
  },
  {
    id: '5',
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. No contracts, no commitments. Cancel whenever you need to. Your data belongs to you and can be exported at any time.',
  },
  {
    id: '6',
    question: 'Do you offer customer support?',
    answer: 'Yes! We offer 24/7 support via chat, email, and phone. Our help center also has extensive documentation, tutorials, and guides to help you succeed.',
  },
];

export function FAQ() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div
            ref={titleRef}
            className={`lg:sticky lg:top-32 lg:self-start transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-medium rounded-full mb-6">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked{' '}
              <span className="text-gradient-green">Questions</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Everything you need to know about CommercePro. Can't find what you're 
              looking for? Feel free to contact our support team.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                <span className="text-green font-bold">?</span>
              </div>
              <div>
                <div className="text-white font-medium">Still have questions?</div>
                <a href="#" className="text-green hover:text-green-light transition-colors text-sm">
                  Contact our support team →
                </a>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div
            ref={accordionRef}
            className={`transition-all duration-700 ${
              accordionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms'
            }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-grey-dark/50 border border-white/5 rounded-xl px-6 overflow-hidden transition-colors duration-200 hover:bg-grey-dark hover:border-white/10"
                >
                  <AccordionTrigger className="text-left text-white font-semibold py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
