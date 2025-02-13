import BestSellersProducts from "./BestSellersProducts";

export default function BestSellers({ products }) {
    return (
        <div className="pt-10 pb-20 px-4">
            <div className="text-center space-y-4 pb-10">
                <h1 className="font-bold text-3xl md:text-5xl">Our Best Sellers</h1>
                <p className="text-sm md:text-base">Discover our top-selling products with great deals !</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product) => (
                    <BestSellersProducts key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}