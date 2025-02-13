'use client'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link";

export default function Pagination() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams?.get("page")) || 1;
    function createPageUrl(pageNumber) {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }
    return (
        <main className="flex w-full items-center justify-center space-x-4 mt-4">
            <Link href={createPageUrl(currentPage - 1)} className="hover:text-gray-300">
                <FaAngleLeft size={20} />
            </Link>
            <text>{currentPage}</text>
            <Link href={createPageUrl(currentPage + 1)} className="hover:text-gray-300">
                <FaAngleRight size={20} />
            </Link>
        </main>
    )
}