'use client'
import { pushProducts } from "@/app/actions";
import AddToCart from "./buttons/addToCart";
import Quantity from "./buttons/quantity";

export default function BestSellersProducts({ product }) {
    // Get quantity for this product
    return (
        <form action={pushProducts} className="flex relative space-y-1 flex-col items-center text-center sm:text-sm justify-center">
            <p className="absolute flex items-center justify-center top-2 left-2 bg-amber-400 px-4 py-1">Best seller</p>
            <div className="w-full bg-gray-50 flex items-center justify-center h-72 rounded-md">
                <img
                    className="transition-transform transform hover:scale-110 duration-300"
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
            <Quantity product={product} />
            <AddToCart product={product} />
        </form>
    );
}
