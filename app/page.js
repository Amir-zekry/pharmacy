import Header from "@/ui/Header";
import PharmacyFeatures from "@/ui/PharmacyFeatures";
import BestSellersProducts from "@/ui/BestSellersProducts";
import BestSellerProductsSkeleton from "@/ui/skeletons/BestSellerProductsSkeleton";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Suspense fallback={<BestSellerProductsSkeleton />}>
        <BestSellersProducts />
      </Suspense>
      <PharmacyFeatures />
    </div>
  );
}