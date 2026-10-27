import RouteGuard from "@/components/RouteGuard";
import ProductsHeader from "@/features/products/components/ProductsHeader";

export default function ProductsLayout({ children }: LayoutProps<"/">) {
  return (
    <RouteGuard mode="private">
      <div className="flex grow flex-col bg-neutral-50 text-neutral-900">
        <ProductsHeader />
        <main className="grow">
          <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
        </main>
      </div>
    </RouteGuard>
  );
}
