'use client'
import { pushProducts } from "@/app/actions";
import { openCart } from "@/Redux/cart";
import { useDispatch, useSelector } from "react-redux";

export default function BestSellersProducts({ product }) {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.product.quantities[product.id] || 1);
    async function addToCart() {
        try {
            dispatch(openCart())
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(reset(product.id))
        }
    } // Get quantity for this product
    return (
        <form action={pushProducts} className="flex relative space-y-1 flex-col items-center text-center sm:text-sm justify-center">
            <text className="absolute flex items-center justify-center top-2 left-2 bg-amber-400 px-4 py-1">Best seller</text>
            <div className="w-full bg-gray-50 flex items-center justify-center h-72 rounded-md">
                <img
                    className="rounded-lg transition-transform transform hover:scale-110 duration-300"
                    src={product.image_url}
                    alt={product.name}
                    style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                />
            </div>

            {/* Product Name with Fixed Height */}
            <input value={product.name} name="product_name" readOnly className=" px-2 w-3/4 text-center overflow-hidden overflow-ellipsis whitespace-nowrap" />
            <input name="product_price" value={product.price} readOnly className="text-md w-full text-center text-gray-700" />
            <input name="product_category" value={product.category} type="hidden" className="text-sm text-gray-500" />
            <input type="hidden" name="product_image" value={product.image_url} readOnly />
            <input type="hidden" name="product_id" value={product.id} readOnly />
            <div className="flex gap-x-2 items-center border w-full rounded-md p-2">
                <button type="button" onClick={() => dispatch(decrement(product.id))}>-</button>
                <input min="1" max="10" name="product_quantity" value={quantity} readOnly className="w-full text-center" />
                <button type="button" onClick={() => dispatch(increment(product.id))}>+</button>
            </div>
            <button onClick={addToCart} type="submit" className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 w-full rounded-md mt-auto">
                Add to cart
            </button>
        </form>
    );
}
