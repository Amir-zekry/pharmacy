'use client'
import { removeProduct } from "@/app/actions"
import { TbShoppingCartCancel } from "react-icons/tb"
export default function RemoveProduct() {
    return (
        <button onClick={() => removeProduct()}>
            <TbShoppingCartCancel className="size-8 hover:text-purple-400" />
        </button>
    )
}