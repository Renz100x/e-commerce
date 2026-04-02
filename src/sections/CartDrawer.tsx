import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={closeCart}
        style={{ animationDuration: '300ms' }}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-in-right flex flex-col"
        style={{ animationDuration: '400ms', animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-grey-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-black" />
            <h2 className="text-xl font-bold text-black">Your Cart</h2>
            <span className="px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-full bg-grey hover:bg-grey-border flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-grey flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-grey-text" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Your cart is empty
              </h3>
              <p className="text-grey-text mb-6">
                Add some products to get started
              </p>
              <Button
                onClick={closeCart}
                className="bg-green hover:bg-green-dark text-white"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-grey rounded-xl transition-all duration-300 hover:shadow-card"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg bg-white overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black truncate">
                      {item.name}
                    </h4>
                    <p className="text-green font-bold mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-white border border-grey-border flex items-center justify-center hover:border-green transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4 text-black" />
                        </button>
                        <span className="w-8 text-center font-medium text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-grey-border flex items-center justify-center hover:border-green transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-black" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-grey-text hover:text-red-500 transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-grey-border bg-grey">
            {/* Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-grey-text">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-grey-text">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between text-lg font-bold text-black pt-3 border-t border-grey-border">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <Button
              className="w-full bg-green hover:bg-green-dark text-white font-semibold py-6 transition-all duration-300 hover:scale-[1.02]"
            >
              Proceed to Checkout
            </Button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-grey-text hover:text-black transition-colors duration-200 text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
