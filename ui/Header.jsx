'use client';

import Link from "next/link";

export default function Header() {
    return (
        <header className="relative p-6 bg-[#F8ECE5]">
            <div
                className="bg-fixed bg-cover bg-center w-full h-[60vh] md:h-screen flex justify-center items-center"
                style={{ backgroundImage: "url('/noonpharmacy.webp')" }}
            >
                <div className="p-6 bg-white bg-opacity-80 rounded-md shadow-lg max-w-md text-center">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome to Noon Pharmacy</h1>
                    <p className="text-base md:text-lg mb-6">
                        Explore our wide range of medicine and cosmetic products and get the best for your health.
                    </p>
                    <Link href="/shop" className="text-white py-2 px-20 text-base font-semibold bg-[#724EE2] hover:bg-[#BFAAF9] transition duration-300">
                        Shop Now
                    </Link>
                </div>
            </div>
        </header>
    );
}