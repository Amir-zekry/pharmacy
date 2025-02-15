import Link from "next/link";

export default function EmptyCart() {
    return (
        <main className="w-full py-24 px-60">
            <section>
                <h2>My cart</h2>
                <hr className="border w-full" />
            </section>
            <section className="flex items-center justify-center h-80">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl">Your cart is empty</p>
                    <Link className="text-gray-600 underline hover:text-gray-400" href='/shop'>Back to drug store</Link>
                </div>
            </section>
        </main>
    )
}