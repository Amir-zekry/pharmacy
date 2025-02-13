'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { FaSort } from "react-icons/fa";

export default function Sort() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    function handleSort(sort) {
        const params = new URLSearchParams(searchParams)
        if (sort) {
            params.set('sort', sort)
        } else {
            params.delete('sort')
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className="flex justify-end items-center pr-4 space-x-2 w-full md:w-1/3">
            <label className="md:block hidden">Sort by</label>
            <label className="md:hidden lg:hidden">
                <FaSort size={16} />
            </label>
            <select
                className="w-full md:w-[70%] p-1 bg-gray-50 hover:bg-gray-100 flex items-center border"
                onChange={(e) => handleSort(e.target.value)}
                defaultValue={searchParams.get('sort')?.toString()}
            >
                <option>default</option>
                <option value='price desc'>price: high to low</option>
                <option value='price'>price: low to high</option>
            </select>
        </div>
    )
}