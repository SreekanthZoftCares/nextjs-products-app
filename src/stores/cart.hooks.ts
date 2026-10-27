import { useCartStore } from "@/providers/cart-store-provider";

export const useCartCount = () =>
  useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

export const useCartItem = (productId: number) =>
  useCartStore((state) => state.items.find((item) => item.id === productId));
