import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { BrandLogos } from '@/sections/BrandLogos';
import { Features } from '@/sections/Features';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { HowItWorks } from '@/sections/HowItWorks';
import { Testimonials } from '@/sections/Testimonials';
import { Pricing } from '@/sections/Pricing';
import { FAQ } from '@/sections/FAQ';
import { CTABanner } from '@/sections/CTABanner';
import { Footer } from '@/sections/Footer';
import { CartDrawer } from '@/sections/CartDrawer';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Hero />
          <BrandLogos />
          <Features />
          <ProductShowcase />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
