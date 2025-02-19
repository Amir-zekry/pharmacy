import { getBestSellers, getCartProducts } from "@/app/actions";
import BestSellerForm from "./forms/BestSellerForm";

export default async function BestSellersProducts() {
    const products = await getBestSellers()
    const cartProducts = await getCartProducts()
    return (
        <main className="grid grid-cols-1 md:grid-cols-4 w-full px-4 md:px-8 gap-x-4 mt-4">
            {
                products.map((product) => (
                    <BestSellerForm key={product.id} product={product} cartProducts={cartProducts} />
                ))
            }
        </main>
    );
}
