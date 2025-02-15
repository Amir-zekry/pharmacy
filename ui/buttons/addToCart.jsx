'use client'
import { useDispatch } from "react-redux";
import { reset } from "@/Redux/product";
import { openCart } from "@/Redux/cart";
export default function AddToCart({ product }) {
    const dispatch = useDispatch();
    async function addToCart() {
        try {
            dispatch(openCart())
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(reset(product.id))
        }
    }
    return (
        <button onClick={addToCart} type="submit" className="bg-[#724EE2] hover:bg-[#BFAAF9] text-white px-4 py-2 w-full mt-auto">
            Add to cart
        </button>
    )
}