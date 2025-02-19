"use client"
import { getCartProducts, pushProducts } from "@/app/actions";
import { useDispatch } from "react-redux";
import { openCart } from "@/Redux/cart";
import { addToCart, removeFromCart } from "@/Redux/addToCart";
import AddToCart from "../buttons/addToCart";

const StoreForm = ({ product, cartProducts }) => {
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
        <form onSubmit={add} className="flex flex-col space-y-1 items-center sm:text-sm">
            <div className="w-full bg-gray-50 flex items-center justify-center h-72">
                <img
                    className="transition-transform transform hover:scale-110 duration-300"
                    src={product.image_url}
                    alt={product.name}
                    style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                />
            </div>
            <input value={product.name} name="product_name" readOnly className="px-2 w-3/4 text-center overflow-hidden overflow-ellipsis whitespace-nowrap" />
            <input name="product_price" value={product.price} readOnly className="text-md w-full text-center text-gray-700" />
            <input name="product_category" value={product.category} type="hidden" />
            <input type="hidden" name="product_image" value={product.image_url} readOnly />
            <input type="hidden" name="product_id" value={product.id} readOnly />
            <input name="product_quantity" value={1} type="hidden" />
            <AddToCart product={product} cartProducts={cartProducts} />
        </form>
    );
};

export default StoreForm;
