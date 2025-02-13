'use client'
import { useDispatch } from "react-redux"
import { showFilters } from "@/Redux/filters"

export default function ShowFilters() {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(showFilters())} className="md:hidden flex items-center text-center justify-center w-96 py-2 border hover:border-blue-700 bg-gray-100">Filters</button>
    )
}