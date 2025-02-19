"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

export default function AddToCart({ product, cartProducts }) {
    const loading = useSelector((state) => state.addToCart);
    const [isClicked, setIsClicked] = useState(false)
    const isInCart = cartProducts.some((item) => item.product_id === product.id);
    const isLoading = loading[product.id]?.isLoading || false;

    return (
        <button
            onClick={() => setIsClicked(!isClicked)}
            disabled={isInCart || isLoading}
            type="submit"
            className={`bg-[#724EE2] hover:bg-[#BFAAF9] text-white px-4 py-2 w-full mt-auto ${isInCart || isLoading ? 'pointer-events-none opacity-50' : ''
                }`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center w-full py-2 space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-dot" style={{ animationDelay: "0ms" }} />
                    <div className="w-1 h-1 bg-white rounded-full animate-dot" style={{ animationDelay: "200ms" }} />
                    <div className="w-1 h-1 bg-white rounded-full animate-dot" style={{ animationDelay: "400ms" }} />
                </div>
            ) : "Add to cart"}
        </button>
    );
}
