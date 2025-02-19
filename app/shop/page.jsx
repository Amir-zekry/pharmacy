import StoreProducts from "@/app/ui/StoreProducts";
import Filters from "@/app/ui/Filters";
import Sort from "@/app/ui/Sort";
import Search from "@/app/ui/Search";
import Pagination from "@/app/ui/pagination";
import { Suspense } from "react";
import StoreProductsSkeleton from "@/app/ui/skeletons/storeProductsSkeleton";
import ShowFilters from "@/app/ui/buttons/showFilters";
import { getTotalPages } from "../actions";

export default async function (props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const sort = searchParams?.sort || '';
  const filters = searchParams?.filter || '';
  const products = await getTotalPages()


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
        <Suspense key={query + currentPage} fallback={<StoreProductsSkeleton />}>
          <StoreProducts query={query} currentPage={currentPage} sort={sort} filters={filters} />
        </Suspense>
        <Pagination products={products} />
      </div>
    </div>
  );
}
