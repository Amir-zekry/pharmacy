import Link from "next/link";

export default function EmptyCart() {
    return (
        <main className="w-full py-12 px-4 md:py-24 md:px-20 lg:px-60">
            <section>
                <h2 className="text-xl md:text-2xl lg:text-3xl">My cart</h2>
                <hr className="border w-full" />
            </section>
            <section className="flex items-center justify-center h-60 md:h-80">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xl md:text-2xl lg:text-3xl">Your cart is empty</p>
                    <Link className="text-gray-600 underline hover:text-gray-400" href='/shop'>Back to drug store</Link>
                </div>
            </section>
        </main>
    )
}