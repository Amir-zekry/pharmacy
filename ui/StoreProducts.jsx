import { getCartProducts, getProducts } from "@/app/actions";
import StoreForm from "./forms/StoreForm";


export default async function StoreProducts({ query, currentPage, sort, filters }) {
    const products = await getProducts(query, currentPage, sort, filters);
    const cartProducts = await getCartProducts();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-4 px-4 min-h-screen">
            {products.map((product) => (
                <StoreForm key={product.id} product={product} cartProducts={cartProducts} />
            ))}
        </div>
    );
}