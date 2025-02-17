'use client'
import { quantityDecrement, quantityIncrement, removeProduct } from "@/app/actions";
import { CiTrash } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/Redux/cartProduct";
import { useState } from "react";

export default function CartProducts({ product }) {
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
        <div className="flex relative border-b justify-between gap-x-10 w-full px-4 border-gray-700 py-4">
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
            <div className="flex gap-x-4">
                <img className="size-28" src={product.product_image} alt={product.product_name} />
                <div className="flex flex-col gap-y-4">
                    <span>{product.product_name}</span>
                    <span>{product.product_price}</span>
                    <div className="flex md:hidden items-center border gap-x-4 px-2 py-1">
                        <button className='hover:text-purple-300 disabled:text-gray-300' disabled={Loading || product.product_quantity == 1} onClick={() => quantityMinus()}>
                            -
                        </button>
                        <p min="1" max="10" className="w-full text-center">{product.product_quantity}</p>
                        <button className='hover:text-purple-300' disabled={Loading} onClick={() => quantityPlus()}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-x-10">
                <div className="md:flex hidden items-center border gap-x-4 px-2 py-1">
                    <button className='hover:text-purple-300 disabled:text-gray-300' disabled={Loading || product.product_quantity == 1} onClick={() => quantityMinus()}>
                        -
                    </button>
                    <p min="1" max="10" className="w-full text-center">{product.product_quantity}</p>
                    <button className='hover:text-purple-300' disabled={Loading} onClick={() => quantityPlus()}>
                        +
                    </button>
                </div>
                <span>{product.product_price * product.product_quantity}</span>
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
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="white"
                                strokeWidth="4"
                                strokeDasharray="31.4 62.8"
                                strokeDashoffset="0"
                            />
                        </svg>
                    ) : (
                        <CiTrash className="size-6 hover:text-gray-400" />
                    )}
                </button>
            </div>
        </div>
    )
}
