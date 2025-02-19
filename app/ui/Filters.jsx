"use client";
import { hideFilters } from "@/app/Redux/filters";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {
    const filterOptions = ["all", "medicine", "cosmetic", "supplement"];
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const showFilters = useSelector((state) => state.filters.value);
    const dispatch = useDispatch();
    const [showFiltersDesktop, setShowFiltersDesktop] = useState(false)
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
            <div className="md:flex w-full hidden items-center justify-between pt-8 md:pt-0">
                <h1 className="text-2xl">Filter by</h1>
                <button onClick={() => setShowFiltersDesktop(!showFiltersDesktop)}>
                    {showFiltersDesktop ? (
                        <FaMinus size={16} />
                    ) : (
                        <FaPlus size={16} />
                    )}
                </button>
            </div>
            <div className="md:hidden flex items-center justify-between w-full pt-4">
                <h1 className=" text-2xl text-left">Filters</h1>
                <button className="hover:text-gray-300" onClick={() => dispatch(hideFilters())}>
                    <IoIosClose size={28} />
                </button>
            </div>
            <hr className="border border-gray-400 w-full mt-2" />
            <div className={`flex flex-col text-left items-start w-full overflow-y-hidden transition-all duration-700 ease-in-out ${showFiltersDesktop ? 'max-h-screen' : 'md:max-h-0'}`}>
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
            <hr className="md:block hidden border border-gray-400 w-full" />
        </div>
    );
}
