import Link from "next/link";
import CartControls from "./CartControls";
import Image from "next/image";
import { Product } from "@/app/products/page";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <Link href={`/products/${product.id}`} className="block">
        <Image
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
          width={100}
          height={100}
          loading="eager"
        />
        <div className="px-4 pt-3">
          <h2 className="font-medium">{product.title}</h2>
          <p className="mt-1 text-sm text-neutral-500">${product.price}</p>
        </div>
      </Link>
      <div className="mt-auto p-4 pt-3">
        {/* <CartControls product={product} /> */}
      </div>
    </article>
  );
}
