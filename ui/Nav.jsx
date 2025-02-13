"use client";

import { openCart } from '@/Redux/cart';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaShoppingBag } from "react-icons/fa";
import { useSession, signOut } from 'next-auth/react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import clsx from 'clsx';
import NavLinks from './navLinks';

export default function Nav({ cartProductsCount }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-white shadow-md text-gray-900' : 'bg-blue-900 text-white'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src='/noon_pharmacy_logo_transparent-removebg-preview.png' height={40} width={40} alt='Noon Pharmacy Logo' />
                    <span className="ml-2 text-lg font-bold hidden md:inline">Noon Pharmacy</span>
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                </button>

                {/* Desktop & Mobile Menu */}
                <ul className={clsx("md:flex items-center gap-6", isMenuOpen ? "flex flex-col absolute top-full items-center justify-center left-0 w-full bg-blue-900 shadow-md py-4" : "hidden md:flex")}>
                    <NavLinks setIsMenuOpen={setIsMenuOpen} />
                    {/* User Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center">
                            {session ? (
                                <img src={session?.user.image} alt="User Profile" className="w-10 h-10 rounded-full" />
                            ) : (
                                <Link className="nav-link" href="/login">Login</Link>
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {session && isDropdownOpen && (
                            <ul className="absolute text-black px-4 right-0 bg-gray-100 shadow-md rounded-md w-44 py-2">
                                <li>{session?.user.name}</li>
                                <li className="text-sm text-gray-600">{session?.user.email}</li>
                                <hr className="my-2 border-gray-300" />
                                <li><Link href='/orders' className="dropdown-item hover:text-gray-400">Orders</Link></li>
                                <li><button className="dropdown-item hover:text-red-200" onClick={() => signOut()}>Sign Out</button></li>
                            </ul>
                        )}
                    </li>

                    {/* Shopping Cart */}
                    <li>
                        <button className="relative flex items-center" onClick={() => dispatch(openCart())}>
                            <FaShoppingBag size={24} />
                            {cartProductsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartProductsCount}</span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
