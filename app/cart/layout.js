'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CartLayout = ({ children }) => {
    const pathname = usePathname()
    return (
        <div className="pt-8">
            <header className="cart-header">
                <ul className='flex justify-center items-center gap-x-4'>
                    <li className={clsx('', { 'text-blue-500': pathname == '/cart' })}>
                        <Link href='/cart'>Cart</Link>
                    </li>
                    <hr className={clsx('border w-96', { 'border-blue-500': pathname == '/cart/checkout' })} />
                    <li className={clsx('', { 'text-blue-500': pathname == '/cart/checkout' })}>Checkout</li>
                    <hr className={clsx('border w-96', { 'border-blue-500': pathname == '/cart/checkout/order_summary' })} />
                    <li className={clsx('', { 'text-blue-500': pathname == '/cart/checkout/order_summary' })}>Summary</li>
                </ul>
            </header>
            <main className="cart-content">
                {children}
            </main>
        </div>
    );
};

export default CartLayout;