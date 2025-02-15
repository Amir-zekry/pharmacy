import StoreProducts from "@/ui/StoreProducts";
import Filters from "@/ui/Filters";
import Sort from "@/ui/Sort";
import Search from "@/ui/Search";
import Pagination from "@/ui/pagination";
import { Suspense } from "react";
import StoreProductsSkeleton from "@/ui/skeletons/storeProductsSkeleton";
import ShowFilters from "@/ui/buttons/showFilters";

export default async function (props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const sort = searchParams?.sort || '';
  const filters = searchParams?.filter || '';

  return (
    <div className="flex relative flex-col md:flex-row pt-8">
      <ShowFilters />
      <Filters />
      <div className="w-full md:w-3/4">
        <div className="md:hidden w-full flex items-center justify-center mb-4">
        </div>

        <div className="grid grid-cols-2 md:gap-x-12 gap-4 px-4 pb-4">
          <Search />
          <Sort />
        </div>
        <Suspense fallback={<StoreProductsSkeleton />}>
          <StoreProducts query={query} currentPage={currentPage} sort={sort} filters={filters} />
        </Suspense>
        <Pagination />
      </div>
    </div>
  );
}
