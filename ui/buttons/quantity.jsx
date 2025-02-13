'use client'
import { useSelector } from "react-redux";
import { decrement, increment } from "@/Redux/product";
import { useDispatch } from "react-redux";
export default function Quantity({ product }) {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.product.quantities[product.id] || 1);
    return (
        <div className="flex gap-x-2 items-center border w-full rounded-md p-2">
            <button type="button" onClick={() => dispatch(decrement(product.id))}>-</button>
            <input min="1" max="10" name="product_quantity" value={quantity} readOnly className="w-full text-center" />
            <button type="button" onClick={() => dispatch(increment(product.id))}>+</button>
        </div>
    )
}