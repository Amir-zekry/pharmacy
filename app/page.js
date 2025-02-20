import Header from "@/app/ui/Header";
import PharmacyFeatures from "@/app/ui/PharmacyFeatures";
import BestSellersProducts from "@/app/ui/BestSellersProducts";
import BestSellerProductsSkeleton from "@/app/ui/skeletons/BestSellerProductsSkeleton";
import { Suspense } from "react";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Suspense fallback={<BestSellerProductsSkeleton />}>
        <BestSellersProducts />
      </Suspense>
      <div className="w-full flex items-center justify-center my-10">
        <Link href='/shop' className="w-80 text-center py-2 bg-[#724EE2] hover:bg-[#BFAAF9] text-white">Shop All</Link>
      </div>
      <PharmacyFeatures />
    </div>
  );
}