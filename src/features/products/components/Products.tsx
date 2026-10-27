"use client";

import { Button } from "@/components/ui";
import { products } from "@/constants/data";
import ProductCard from "@/features/products/components/ProductCard";
import { parseAsInteger, useQueryStates } from "nuqs";

export default function Products() {
  const [{ page, size }, setPagination] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    size: parseAsInteger.withDefault(5),
  });

  let startIndex = 0;
  const endIndex = page * size;
  if (page !== 1) startIndex = endIndex - size;

  const filteredProducts = products?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setPagination({ page });
  };

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        {[...Array(4)].map((_, index) => (
          <Button
            key={index}
            className="p-2 rounded text-white px-4"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </section>
  );
}
