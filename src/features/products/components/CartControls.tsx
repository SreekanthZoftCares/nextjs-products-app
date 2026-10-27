"use client";

import { Button } from "@/components/ui";
import { Product } from "@/constants/data";
import { useCartStore } from "@/providers/cart-store-provider";
import { useCartItem } from "@/stores/cart.hooks";

type CartControlsProps = {
  product: Product;
  children?: React.ReactNode;
};

export default function CartControls({ product, children }: CartControlsProps) {
  const cartItem = useCartItem(product.id);
  const addToCart = useCartStore((state) => state.addToCart);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (!cartItem) {
    return (
      <Button
        type="button"
        className="w-full justify-center rounded-md px-3 py-2 text-sm text-white"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {children}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Decrease ${product.name} quantity`}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-lg disabled:opacity-40 hover:cursor-pointer disabled:cursor-not-allowed"
            disabled={cartItem.quantity <= 1}
            onClick={() => decrement(product.id)}
          >
            −
          </button>
          <span className="min-w-6 text-center text-sm font-medium">
            {cartItem.quantity}
          </span>
          <button
            type="button"
            aria-label={`Increase ${product.name} quantity`}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-lg hover:cursor-pointer"
            onClick={() => increment(product.id)}
          >
            +
          </button>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="justify-center rounded-md bg-neutral-100 px-3 py-2 text-sm"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
