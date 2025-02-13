// filepath: /d:/webApps/noon/noon/ui/checkout.jsx
'use client';

import { pushIntoOrders, IncreasePurchaseCount } from "@/app/actions";
import CheckoutProducts from "./checkoutProducts";
import Link from "next/link";

export default function Checkout({ products, totalPrice }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (const productId of products.map(p => p.product_id)) {
            await IncreasePurchaseCount(productId);
        }
        await pushIntoOrders(formData, products);
    };

    return (
        <div className="md:pl-10 pt-10 w-full font-[sans-serif] bg-white">
            <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                    <div className="relative h-full">
                        <div className="space-y-4 px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                            {products.map((product) => (
                                <CheckoutProducts key={product.product_id} product={product} />
                            ))}
                        </div>
                        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 w-full p-4">
                            <h4 className="flex flex-wrap gap-4 text-sm lg:text-base text-gray-800">Total <span className="ml-auto">{totalPrice}</span></h4>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                    <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                    <form onSubmit={handleSubmit} className="mt-8">
                        {products.map((product) => (
                            <div key={product.product_id}>
                                <input type="hidden" name="product_id" value={product.product_id} />
                                <input type="hidden" name="product_name" value={product.product_name} />
                                <input type="hidden" name="price" value={product.product_price} />
                                <input type="hidden" name="quantity" value={product.product_quantity} />
                                <input type="hidden" name="product_image" value={product.product_image} />
                                <input type="hidden" name="total_price" value={totalPrice} />
                            </div>
                        ))}
                        <div>
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">Personal Details</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input type="text" placeholder="First Name" name="first_name" required
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="text" placeholder="Last Name" name="last_name" required
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="email" placeholder="Email" name="email"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="tele" placeholder="Phone No." name="phone_number" required
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">Shipping Address</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input type="text" placeholder="Address Line" name="shipping_address" required
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="City"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Zip Code" name="zip_code"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-sm lg:text-base text-gray-800 mb-4">Payment Method</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <select name="payment_method" className="px-4 py-3 cursor-pointer bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-blue-600">
                                            <option value={'COD'}>Cash on delivery</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 max-md:flex-col mt-8">
                                <Link href='/cart' className="rounded-md text-center px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</Link>
                                <button type="submit" className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Complete Purchase</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}