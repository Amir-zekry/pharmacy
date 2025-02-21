'use client';

import { pushIntoOrders } from "@/app/actions";
import CheckoutProducts from "./checkoutProducts";
import Link from "next/link";
import { useActionState } from "react";

export default function Checkout({ products, totalPrice }) {
    const initialState = { message: null, errors: {}, data: {} };
    const pushIntoOrdersWithProducts = (prevState, formData) =>
        pushIntoOrders(prevState, formData, products);

    const [state, formAction, isPending] = useActionState(pushIntoOrdersWithProducts, initialState);
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
                    <form action={formAction} className="mt-8">
                        {products.map((product) => (
                            <div key={product.product_id}>
                                <input type="hidden" name="product_id" value={product.product_id} />
                                <input type="hidden" name="product_name" value={product.product_name} />
                                <input type="hidden" name="price" value={product.product_price} />
                                <input type="hidden" name="quantity" value={product.product_quantity} />
                                <input type="hidden" name="order_image" value={product.product_image} />
                                <input type="hidden" name="total_price" value={totalPrice} />
                            </div>
                        ))}                        <div>
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">Personal Details</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input defaultValue={state.data?.first_name} type="text" placeholder="name*" name="first_name"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    {state.errors?.first_name?.map((error) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                    ))}
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" name="email"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input defaultValue={state.data?.phone_number} type="tel" placeholder="Phone Number*" name="phone_number"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    {state.errors?.phone_number?.map((error) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm lg:text-base text-gray-800 mb-4">Shipping Address</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        defaultValue={state.data?.shipping_address} type="text" placeholder="Address Line*" name="shipping_address"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                    />
                                    {state.errors?.shipping_address?.map((error) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                    ))}
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
                                <h3 className="text-sm lg:text-base text-gray-800 mb-4">Payment Method*</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <select defaultValue={state.data?.payment_method} name="payment_method" className="px-4 py-3 cursor-pointer bg-gray-100 text-gray-800 w-full text-sm rounded-md focus:outline-[#724EE2]">
                                            <option value='' disabled>Please Select a payment method</option>
                                            <option value={'COD'}>Cash on delivery</option>
                                            <option value={'vcash'}>Vodafone Cash</option>
                                        </select>
                                        {state.errors?.payment_method?.map((error) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 max-md:flex-col mt-8">
                                <Link href='/cart' className="rounded-md text-center px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</Link>
                                <button type="submit" className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-[#724EE2] hover:bg-[#BFAAF9] text-white">Complete Purchase</button>
                            </div>
                            <div className="w-full flex items-center justify-center text-red-400 mt-5">
                                {state.message}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
