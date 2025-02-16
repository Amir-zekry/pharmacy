import { getProducts, pushProducts } from "@/app/actions";
import AddToCart from "./buttons/addToCart";
import Quantity from "./buttons/quantity";


export default async function StoreProducts({ query, currentPage, sort, filters }) {
    const products = await getProducts(query, currentPage, sort, filters);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-4 px-4">
            {products.map((product) => (
                <form key={product.id} action={pushProducts} className="flex space-y-1 flex-col items-center text-center sm:text-sm justify-center">
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
                    <input type="hidden" name="product_image" value={product.image_url} readOnly />
                    <input type="hidden" name="product_id" value={product.id} readOnly />
                    <Quantity product={product} />
                    <AddToCart product={product} />
                </form>
            ))}
        </div>
    );
}
