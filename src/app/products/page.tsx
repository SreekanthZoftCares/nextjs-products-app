import Pagination from "@/features/products/components/Pagination";
import ProductCard from "@/features/products/components/ProductCard";
import Products from "@/features/products/components/Products";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products page",
  description: "cecec",
};

export const instant = false;

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

type ProductResponse = {
  data: Product[];
};

export default async function ProductsPage({ searchParams }: PageProps<"/">) {
  const { page = 1, limit = 10 } = await searchParams;
  const response = await fetch(
    `${process.env.API_BASE_URL}/products?page=${page}&limit=${limit}`,
  );
  const products: ProductResponse = await response.json();

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Pagination />
      </div>
    </section>
  );
}
