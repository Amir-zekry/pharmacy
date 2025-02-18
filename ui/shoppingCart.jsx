'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { closeCart } from '@/Redux/cart';
import { useDispatch } from 'react-redux';
import ShoppingCartProducts from './shoppingCartProducts';
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';
import ShoppingCartProductsSkeleton from './skeletons/shoppingCartProductsSkeleton';

const ShoppingCart = ({ cartProducts, total_price }) => {

    const isCartOpen = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const isAdded = useSelector((state) => state.addToCart.value)
    return (
        <div className={clsx('fixed z-50 top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transition-transform transform duration-1000', { 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen })}>
            <div className='flex justify-start pl-8 gap-x-28 bg-[#724EE2] h-[15%] text-white w-full items-center'>
                <button onClick={() => dispatch(closeCart())}>
                    <MdArrowForwardIos className='size-8 hover:text-gray-400' />
                </button>
                <h2 className="text-xl">Cart</h2>
            </div>
            <section className='h-full'>
                <div className='h-full'>
                    <div className='h-[70%] overflow-y-auto'>
                        {isAdded ? (
                            Array.from({ length: cartProducts.length || 1 }).map((_, index) => (
                                <ShoppingCartProductsSkeleton key={index} />
                            ))
                        ) : (
                            cartProducts.map((product) => (
                                <ShoppingCartProducts key={product.product_id} product={product} />
                            ))
                        )}

                    </div>
                    <div className='flex px-8'>
                        <p className='text-2xl'>Subtotal: <span>{total_price}</span></p>
                    </div>
                    <div className='flex h-[15%] justify-center pt-6 border-t'>
                        <Link onClick={() => dispatch(closeCart())} href='/cart' className='bg-[#724EE2] hover:bg-[#BFAAF9] text-white p-2 w-72 h-10 text-center'>view Cart</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShoppingCart;