import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Online Store', href: '#' },
      { label: 'Point of Sale', href: '#' },
      { label: 'Buy Button', href: '#' },
      { label: 'Checkout', href: '#' },
      { label: 'Marketing', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'API Docs', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CommercePro</span>
            </a>
            
            <p className="text-white/60 mb-6 max-w-sm">
              The platform for modern commerce. Build, launch, and grow your business with confidence.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-green"
                />
                <Button className="bg-green hover:bg-green-dark text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-white/50">
            <span>© 2024 CommercePro. All rights reserved.</span>
            <a href="#" className="hover:text-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green transition-colors">Cookies</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-green hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
