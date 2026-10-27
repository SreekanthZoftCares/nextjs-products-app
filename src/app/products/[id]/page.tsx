import { products } from "@/constants/data";
import ProductDetail from "@/features/products/components/ProductDetail";
import { Metadata } from "next";
import { Suspense } from "react";

async function getProduct(id: string) {
  "use cache";
  return products.find((p) => p.id === Number(id));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product?.name ?? "Test",
    description: product?.description ?? "",
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[id]">) {
  return (
    <Suspense>
      <ProductDetail params={params} />
    </Suspense>
  );
}
