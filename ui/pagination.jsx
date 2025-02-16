'use client'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link";

export default function Pagination({ products }) {
    const totalPages = Math.ceil(Number(products) / 8)
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
            <Link href={createPageUrl(currentPage - 1)} className={`hover:text-gray-300 ${currentPage === 1 ? 'pointer-events-none text-gray-300' : ''}`}>
                <FaAngleLeft size={20} />
            </Link>
            <p>{currentPage}</p>
            <Link href={createPageUrl(currentPage + 1)} className={`hover:text-gray-300 ${currentPage === totalPages ? 'pointer-events-none text-gray-300' : ''}`}>
                <FaAngleRight size={20} />
            </Link>
        </main>
    )
}