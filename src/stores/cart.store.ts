// import { Product } from "@/constants/data";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Product } from "@/constants/data";

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addToCart: (product: Product) => void;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      immer((set) => ({
        ...initState,
        addToCart: (product) =>
          set((state) => {
            const existing = state.items.find((item) => item.id === product.id);
            if (existing) {
              existing.quantity += 1;
            }
            state.items.push({ ...product, quantity: 1 });
          }),
        increment: (productId) =>
          set((state) => {
            const item = state.items.find((item) => item.id === productId);

            if (item) {
              item.quantity += 1;
            }
          }),
        decrement: (productId) =>
          set((state) => {
            const item = state.items.find((item) => item.id === productId);

            if (item) {
              item.quantity -= 1;
            }
          }),
        removeFromCart: (productId) =>
          set((state) => {
            const index = state.items.findIndex(
              (item) => item.id === productId,
            );

            if (index !== -1) {
              state.items.splice(index, 1);
            }
          }),
      })),
      {
        name: "cart",
        skipHydration: true,
        partialize: (state) => ({ items: state.items }),
      },
    ),
  );
};
