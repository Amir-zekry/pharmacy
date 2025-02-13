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
        <button onClick={addToCart} type="submit" className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 w-full rounded-md mt-auto">
            Add to cart
        </button>
    )
}