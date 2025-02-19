import { getBestSellers } from "@/app/actions";
import BestSellerForm from "./forms/BestSellerForm";

export default async function BestSellersProducts() {
    const products = await getBestSellers()
    return (
        <main className="grid grid-cols-1 md:grid-cols-4 w-full gap-x-4 mt-4">
            {
                products.map((product) => (
                    <BestSellerForm key={product.id} product={product} />
                ))
            }
        </main>
    );
}
