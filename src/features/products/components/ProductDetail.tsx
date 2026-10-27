import { products } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import CartControls from "./CartControls";
import ServerComponent from "./ServerComponent";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8">
        <p>Product not found.</p>
        <Link href="/products" className="mt-4 inline-block text-sm underline">
          Back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-2">
      <Image
        src={product.image}
        alt={product.name}
        className="h-80 w-full rounded-xl object-cover md:h-112"
        height={100}
        width={100}
        priority
      />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-900">${product.price}</p>
        </div>
        <p className="text-neutral-600">{product.description}</p>
        <div className="mt-4 max-w-xs">
          <CartControls product={product}>
            <ServerComponent />
          </CartControls>
        </div>
      </div>
    </section>
  );
}
