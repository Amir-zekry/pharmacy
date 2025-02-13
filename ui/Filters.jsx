"use client";
import { hideFilters } from "@/Redux/filters";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {
    const filterOptions = ["all", "medicine", "cosmetic", "supplement"];
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const showFilters = useSelector((state) => state.filters.value);
    const dispatch = useDispatch();

    function handleFilters(filter) {
        const params = new URLSearchParams(searchParams);
        if (filter) {
            params.set("filter", filter);
        } else {
            params.delete("filter");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div
            className={`flex fixed top-0 bg-white md:static h-svh md:h-auto w-full md:w-1/4 px-8 flex-col items-start text-left 
                        ${showFilters ? "md:block" : "hidden md:block"} z-50 md:z-auto`}
        >
            <div className="flex w-full justify-between items-center pt-8">
                <h1 className="hidden md:block text-2xl w-full text-left">Filter by</h1>
                <div className="flex items-center justify-between w-full">
                    <h1 className="block md:hidden text-2xl text-left">Filters</h1>
                    <button className="hover:text-gray-300 md:hidden block" onClick={() => dispatch(hideFilters())}>
                        <IoIosClose size={28} />
                    </button>
                </div>
            </div>
            <hr className="border-t border-gray-400 w-full mt-2 mb-4" />
            <div className="flex flex-col text-left items-start w-full">
                {filterOptions.map((filter) => {
                    const isSelected = searchParams.get("filter") === filter;
                    return (
                        <button
                            key={filter}
                            className={`py-2 bg-clip-text text-lg text-left ${isSelected ? "font-bold" : ""}`}
                            type="button"
                            onClick={() => handleFilters(filter)}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
