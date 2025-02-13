import Checkout from "@/ui/checkout";
import { getCartProducts, getCartTotalPrice } from "../../actions";

export default async function CheckoutPage() {
    const products = await getCartProducts();
    const totalPrice = await getCartTotalPrice();
    return (
        <Checkout products={products} totalPrice={totalPrice} />
    );
}
