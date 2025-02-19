import Link from "next/link";
import CartProducts from "./CartProducts";

export default function Cart({ products, totalPrice }) {
    return (
        <main className="flex flex-col md:flex-row justify-center gap-x-10 md:px-60 py-24">
            <section className="flex flex-col items-start justify-start md:w-[60%] w-full">
                <h1 className="mb-1 text-left">My cart</h1>
                <hr className="w-full border border-gray-700" />
                <div className="flex flex-col gap-y-4 w-full overflow-y-scroll h-72">
                    {products.map((product) => (
                        <CartProducts key={product.product_id} product={product} />
                    ))}
                </div>
            </section>
            <section className="md:w-[25%] w-full flex flex-col">
                <div className="flex flex-col">
                    <h1 className="mb-1 text-left">Order summary</h1>
                    <hr className="border border-gray-700 w-full" />
                </div>
                <div className="flex flex-col gap-y-16 py-4">
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-left flex justify-between items-center">
                            Total:<span>{totalPrice}</span>
                        </h2>
                    </div>
                    <Link href='/cart/checkout' className="w-full bg-[#724EE2] hover:bg-[#BFAAF9] flex items-center justify-center py-2">
                        Checkout
                    </Link>
                </div>
            </section>
        </main>
    );
}
