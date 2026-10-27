import ProductsHeader from "@/features/products/components/ProductsHeader";

export default function CartLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex grow flex-col bg-neutral-50 text-neutral-900">
      <ProductsHeader />
      <main className="grow">{children}</main>
    </div>
  );
}
