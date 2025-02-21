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
      <div className="w-full md:flex grid grid-cols-1 items-center justify-center my-10 px-10">
        <Link href='/shop' className="md:w-80 w-full text-center py-2 bg-[#724EE2] hover:bg-[#BFAAF9] text-white">Shop All</Link>
      </div>
      <PharmacyFeatures />
    </div>
  );
}