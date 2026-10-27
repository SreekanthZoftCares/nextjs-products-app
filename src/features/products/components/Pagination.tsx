"use client";

import { Button } from "@/components/ui";
import { parseAsInteger, useQueryStates } from "nuqs";

export default function Pagination() {
  const [_, setPagination] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    size: parseAsInteger.withDefault(5),
  });

  const handlePageChange = (page: number) => {
    setPagination({ page });
  };

  return (
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
  );
}
