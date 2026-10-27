"use client";

import CartControls from "@/features/products/components/CartControls";
import { useCartStore } from "@/providers/cart-store-provider";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-semibold">Cart</h1>
        <p className="text-neutral-600">Your cart is empty.</p>
        <Link href="/products" className="mt-4 inline-block text-sm underline">
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Cart</h1>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 sm:flex-row"
          >
            <Link href={`/products/${item.id}`} className="shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                className="h-28 w-full rounded-lg object-cover sm:w-36"
                height={100}
                width={100}
              />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
              <div>
                <Link href={`/products/${item.id}`} className="font-medium">
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-neutral-500">
                  ${item.price} each
                </p>
              </div>
              <div className="max-w-xs">
                <CartControls product={item} />
              </div>
            </div>
            <p className="self-end font-medium sm:self-center">
              ${item.price * item.quantity}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-right text-lg font-semibold">Total: ${total}</p>
    </section>
  );
}
