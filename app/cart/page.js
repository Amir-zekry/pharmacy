import Cart from "@/app/ui/Cart"
import EmptyCart from "@/app/ui/emptyCart";
import { getCartProducts, getCartTotalPrice } from "@/app/actions"


export default async function () {
    const products = await getCartProducts()
    const totalPrice = await getCartTotalPrice()
    if (products.length === 0) {
        return (
            <EmptyCart />
        )
    }
    return (
        <Cart products={products} totalPrice={totalPrice} />
    )
}