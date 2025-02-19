import Header from "@/app/ui/Header";
import PharmacyFeatures from "@/app/ui/PharmacyFeatures";
import BestSellersProducts from "@/app/ui/BestSellersProducts";
import BestSellerProductsSkeleton from "@/app/ui/skeletons/BestSellerProductsSkeleton";
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