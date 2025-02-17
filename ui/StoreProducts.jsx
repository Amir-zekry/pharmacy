import { getProducts, pushProducts } from "@/app/actions";
import AddToCart from "./buttons/addToCart";


export default async function StoreProducts({ query, currentPage, sort, filters }) {
    const products = await getProducts(query, currentPage, sort, filters);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-4 px-4 min-h-screen">
            {products.map((product) => (
                <form key={product.id} action={pushProducts} className="flex flex-col space-y-1 items-center sm:text-sm">
                    <div className="w-full bg-gray-50 flex items-center justify-center h-72">
                        <img
                            className="transition-transform transform hover:scale-110 duration-300"
                            src={product.image_url}
                            alt={product.name}
                            style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                        />
                    </div>
                    <input value={product.name} name="product_name" readOnly className=" px-2 w-3/4 text-center overflow-hidden overflow-ellipsis whitespace-nowrap" />
                    <input name="product_price" value={product.price} readOnly className="text-md w-full text-center text-gray-700" />
                    <input name="product_category" value={product.category} type="hidden" className="text-sm text-gray-500" />
                    <input type="hidden" name="product_image" value={product.image_url} readOnly />
                    <input type="hidden" name="product_id" value={product.id} readOnly />
                    <input type="hidden" name="product_id" value={product.id} readOnly />
                    <input name="product_quantity" value={1} type="hidden" />
                    {/* <Quantity product={product} /> */}
                    <AddToCart product={product} />
                </form>
            ))}
        </div>
    );
}
