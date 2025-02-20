'use client'
import { getCartProducts, pushProducts } from "@/app/actions";
import { useDispatch } from "react-redux";
import { openCart } from "@/app/Redux/cart";
import { addToCart, removeFromCart } from "@/app/Redux/addToCart";
import AddToCart from "../buttons/addToCart";

export default function BestSellerForm({ product, cartProducts }) {
    const dispatch = useDispatch();

    const add = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            dispatch(addToCart(product.id)); // Start loading state
            await pushProducts(formData);
            await getCartProducts();
        } catch (error) {
            console.error("Error pushing products:", error);
        } finally {
            dispatch(removeFromCart(product.id));
            dispatch(openCart());
        }
    };

    return (
        <form onSubmit={add} className="flex relative space-y-1 flex-col items-center text-center sm:text-sm justify-center">
            <p className="absolute flex items-center justify-center top-2 left-2 bg-amber-400 px-4 py-1">Best seller</p>
            <div className="w-full bg-gray-50 flex items-center justify-center h-72">
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
            <input type="hidden" name="product_image" value={product.image_url} />
            <input type="hidden" name="product_id" value={product.id} />
            <input name="product_quantity" value={1} type="hidden" />
            <AddToCart product={product} cartProducts={cartProducts} />
        </form>
    );
}
