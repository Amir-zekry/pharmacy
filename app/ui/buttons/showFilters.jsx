'use client'
import { useDispatch } from "react-redux"
import { showFilters } from "@/app/Redux/filters"

export default function ShowFilters() {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center md:hidden justify-center w-full">
            <button onClick={() => dispatch(showFilters())} className="flex items-center text-center justify-center w-full mx-4 py-2 border hover:border-[#724EE2] bg-gray-100">Filters</button>
        </div>
    )
}