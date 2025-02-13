'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { closeCart } from '@/Redux/cart';
import { useDispatch } from 'react-redux';
import ShoppingCartProducts from './shoppingCartProducts';
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';

const ShoppingCart = ({ cartProducts, total_price }) => {

    const isCartOpen = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    return (
        <div className={clsx('fixed z-50 top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transition-transform transform duration-1000', { 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen })}>
            <div className='flex justify-between items-center px-2'>
                <button onClick={() => dispatch(closeCart())}>
                    <MdArrowForwardIos className='size-8 hover:text-red-500' />
                </button>
                <h2 className="text-xl font-bold p-4">Shopping Cart</h2>
            </div>
            <section className='h-full'>
                {cartProducts.length === 0 ? (
                    <p className='flex items-center justify-center h-full w-full text-2xl'>cart is empty</p>
                ) : (
                    <div className='h-full'>
                        <div className='h-[75%] overflow-y-auto'>
                            {cartProducts.map((product) => (
                                <ShoppingCartProducts key={product.id} product={product} />
                            ))}
                        </div>
                        <div className='flex px-8'>
                            <text className='text-2xl'>Subtotal: <span>{total_price}</span></text>
                        </div>
                        <div className='flex h-[20%] justify-center pt-6 border-t'>
                            <Link onClick={() => dispatch(closeCart())} href='/cart' className='bg-blue-700 hover:bg-blue-500 text-white p-2 w-72 h-10 text-center'>view Cart</Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default ShoppingCart;