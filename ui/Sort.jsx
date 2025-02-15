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
        <div className="flex items-center space-x-2">
            <select
                className="w-full py-2 bg-gray-50 hover:bg-gray-100 flex items-center border"
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