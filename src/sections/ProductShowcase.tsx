import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Watch',
    price: 129,
    image: '/product-watch.jpg',
    description: 'Elegant timepiece with premium leather strap',
  },
  {
    id: '2',
    name: 'Leather Backpack',
    price: 189,
    image: '/product-backpack.jpg',
    description: 'Handcrafted genuine leather everyday bag',
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    price: 149,
    image: '/product-earbuds.jpg',
    description: 'Premium sound with active noise cancellation',
  },
  {
    id: '4',
    name: 'Smart Home Hub',
    price: 199,
    image: '/product-hub.jpg',
    description: 'Control your entire home with voice commands',
  },
];

function ProductCard({ product, index, isVisible }: { 
  product: Product; 
  index: number; 
  isVisible: boolean;
}) {
  const { addItem } = useCart();

  return (
    <div
      data-scroll-item
      data-scroll-index={index}
      className={`group bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-3 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 100 + 200}ms`,
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-grey">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => addItem(product)}
            className="bg-white text-black hover:bg-green hover:text-white font-semibold px-6 py-3 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-black">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-grey-text mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-black">
            ${product.price}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            className="bg-green hover:bg-green-dark text-white"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="products" className="py-24 lg:py-32 bg-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-medium rounded-full mb-6">
              Trending Products
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
              Curated for{' '}
              <span className="text-green">Success</span>
            </h2>
            <p className="text-lg text-grey-text leading-relaxed mb-8">
              Discover products that are trending and ready to sell. Our curated 
              collection features high-quality items with proven demand.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-black mb-1">50K+</div>
                <div className="text-sm text-grey-text">Products Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-1">4.9</div>
                <div className="text-sm text-grey-text">Avg. Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-1">98%</div>
                <div className="text-sm text-grey-text">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Product Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 gap-4"
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isVisible={gridVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
