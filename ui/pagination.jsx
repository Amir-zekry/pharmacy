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
        <main className="flex w-full items-center justify-center mt-4">
            <Link href={createPageUrl(currentPage - 1)} className={`hover:text-gray-300 border w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'pointer-events-none text-gray-300' : ''}`}>
                <FaAngleLeft size={20} />
            </Link>
            {totalPages <= 7 ? (
                Array.from({ length: totalPages }, (_, index) => (
                    <Link
                        key={index + 1}
                        href={createPageUrl(index + 1)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === index + 1 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        {index + 1}
                    </Link>
                ))
            ) : (
                <>
                    <Link
                        href={createPageUrl(1)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === 1 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        1
                    </Link>
                    <Link
                        href={createPageUrl(2)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === 2 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        2
                    </Link>
                    <Link
                        href={createPageUrl(3)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === 3 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        3
                    </Link>
                    <span className="border w-8 h-8 flex items-center justify-center">...</span>
                    <Link
                        href={createPageUrl(totalPages - 2)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === totalPages - 2 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        {totalPages - 2}
                    </Link>
                    <Link
                        href={createPageUrl(totalPages - 1)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === totalPages - 1 ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        {totalPages - 1}
                    </Link>
                    <Link
                        href={createPageUrl(totalPages)}
                        className={`hover:text-[#724EE2] border w-8 h-8  flex items-center justify-center ${currentPage === totalPages ? 'text-[#724EE2]' : 'font-thin text-gray-300'}`}
                    >
                        {totalPages}
                    </Link>
                </>
            )}
            <Link href={createPageUrl(currentPage + 1)} className={`hover:text-gray-300 border w-8 h-8  flex items-center justify-center ${currentPage === totalPages ? 'pointer-events-none text-gray-300' : ''}`}>
                <FaAngleRight size={20} />
            </Link>
        </main>
    )
}