'use client';

import Image from 'next/image';
import React from 'react';
import { TbShoppingCartCancel } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { quantityDecrement, quantityIncrement, removeProduct } from '@/app/actions';
import { setLoading } from '@/Redux/cartProduct';
import { useState } from 'react';

const ShoppingCartProducts = ({ product }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.cartProduct.loading[product.product_id]);

    const handleRemoveProduct = async () => {
        dispatch(setLoading({ productId: product.product_id, isLoading: true })); // Set loading to true
        try {
            await removeProduct(product.product_id); // Wait for the actual operation to complete
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(setLoading({ productId: product.product_id, isLoading: false })); // Set loading to false
        }
    };

    const [Loading, setIsLoading] = useState(false);

    const quantityMinus = async () => {
        if (product.product_quantity <= 1) return;
        setIsLoading(true)
        await quantityDecrement(product.product_id)
        setIsLoading(false);
    };

    const quantityPlus = async () => {
        setIsLoading(true);
        await quantityIncrement(product.product_id)
        setIsLoading(false);
    };



    return (
        <div className={`flex relative flex-col h-1/3 border-t items-center justify-center pb-2`}>
            {Loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">

                    <svg
                        className="animate-spin h-10 w-10 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="purple"
                            strokeWidth="2"
                        />
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="31.4 62.8"
                            strokeDashoffset="0"
                        />
                    </svg>
                </div>
            )}
            <ul className="flex justify-between items-center w-full px-4">
                <div className="flex items-center gap-x-4">
                    <li>
                        <Image
                            className="size-10"
                            src={product.product_image}
                            alt={product.product_name}
                            width={100}
                            height={100}
                        />
                    </li>
                    <li>
                        <div className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap">
                            <h3 className="text-sm font-semibold">{product.product_name}</h3>
                        </div>
                        <h3>{product.product_price}</h3>
                        <div className='flex items-center gap-x-2 justify-center px-2 py-1 border '>
                            <button className='hover:text-purple-300 disabled:text-gray-300' disabled={Loading || product.product_quantity == 1} onClick={() => quantityMinus()}>
                                -
                            </button>
                            <p min="1" max="10" className="w-full text-center">{product.product_quantity}</p>
                            <button className='hover:text-purple-300' disabled={Loading} onClick={() => quantityPlus()}>
                                +
                            </button>
                        </div>
                    </li>
                </div>
                <li>
                    <button onClick={handleRemoveProduct} disabled={loading}>
                        {loading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="purple"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="31.4 62.8"
                                    strokeDashoffset="0"
                                />
                            </svg>
                        ) : (
                            <TbShoppingCartCancel className="size-8 hover:text-purple-400" />
                        )}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ShoppingCartProducts;
