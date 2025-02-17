"use client";

import { openCart } from '@/Redux/cart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaShoppingBag } from "react-icons/fa";
import { useSession, signOut } from 'next-auth/react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import clsx from 'clsx';
import NavLinks from './navLinks';

export default function Nav({ cartProductsCount }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    return (
        <nav
            className="fixed w-full text-black transition-all duration-300 z-50 bg-[#F8ECE5]" >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src='/noon_pharmacy_logo_transparent-removebg-preview.png' height={40} width={40} alt='Noon Pharmacy Logo' />
                    <span className="ml-2 text-lg font-bold hidden md:inline hover:text-[#724EE2]">Noon Pharmacy</span>
                </Link>

                <button className="md:hidden relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {cartProductsCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-black text-xs rounded-full w-2 h-2" />
                    )}
                    {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} className='text-[#724EE2]' />}
                </button>

                {/* Desktop & Mobile Menu */}
                <ul className={clsx("md:flex items-center gap-6", isMenuOpen ? "flex flex-col absolute top-full -translate-y-1 items-center justify-center left-0 w-full bg-[#F8ECE5] shadow-md py-4" : "hidden md:flex")}>
                    <NavLinks setIsMenuOpen={setIsMenuOpen} setIsDropdownOpen={setIsDropdownOpen} />
                    {/* User Dropdown */}
                    <li className="relative">
                        {session ? (
                            <button onClick={() => { setIsDropdownOpen(!isDropdownOpen) }} className="flex items-center">
                                <img src={session?.user.image} alt="User Profile" className="w-10 h-10 rounded-full" />
                            </button>
                        ) : (
                            <button onClick={() => { setIsMenuOpen(!isMenuOpen) }} className="flex items-center">
                                <Link className="nav-link" href="/login">Login</Link>
                            </button>
                        )}
                        {/* Dropdown Menu */}
                        {session && isDropdownOpen && (
                            <ul className="absolute z-50 text-black pl-4 right-0 bg-gray-100 shadow-md rounded-md w-48 py-2">
                                <li>{session?.user.name}</li>
                                <li className="text-sm text-gray-600">{session?.user.email}</li>
                                <hr className="my-2 mr-4 border-gray-300" />
                                <li onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><Link href='/orders' className="dropdown-item hover:text-gray-400">Orders</Link></li>
                                <li>
                                    <button className="hover:text-red-200" onClick={() => signOut()}>Sign Out</button>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Shopping Cart */}
                    <li>
                        <button className="relative flex items-center" onClick={() => { dispatch(openCart()); setIsMenuOpen(false) }}>
                            <FaShoppingBag size={24} />
                            {cartProductsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#724EE2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartProductsCount}</span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav >
    );
}
