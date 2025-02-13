import OrderDetailsProducts from "./orderDetailsProducts";
import Link from "next/link";

export default function OrderDetails({ orderDetails, orderDetailsItems }) {
    return (
        <main className="flex flex-col w-full md:w-3/4 mx-auto min-h-screen pt-8 gap-y-4 px-4 sm:px-8">
            <section>
                <h1 className="text-2xl font-bold">Your Order Details</h1>
            </section>
            <section>
                {orderDetails?.map((orderDetail) => (
                    <div key={orderDetail.order_id}>
                        <p className="text-xl">Order <span>#{orderDetail.order_id}</span></p>
                        <p className="font-thin">Thanks for shopping with us</p>
                    </div>
                ))}
            </section>
            {orderDetails.map((orderDetail) => {
                const expectedDeliveryDate = new Date(orderDetail.created_at);
                expectedDeliveryDate.setMinutes(expectedDeliveryDate.getMinutes() + 30);
                return (
                    <section key={orderDetail.order_id} className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="text-sm font-bold">Order info</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-thin">Order date</h3>
                                    <p className="font-bold">{new Date(orderDetail.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Status</h3>
                                    <p className={`font-bold ${orderDetail.status === 'Pending' ? 'text-blue-700' : orderDetail.status === 'Canceled' ? 'text-red-700' : 'text-green-700'}`}>{orderDetail.status}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Payment method</h3>
                                    <p className="font-bold">{orderDetail.payment_method}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Expected delivery time</h3>
                                    <p className="font-bold">{expectedDeliveryDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Payment status</h3>
                                    <p className="font-bold">{orderDetail.order_status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="text-sm font-bold">Customer</h2>
                            <div>
                                <h3 className="font-thin">Name</h3>
                                <p className="font-bold">{orderDetail.first_name}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Phone number</h3>
                                <p className="font-bold">{orderDetail.phone_number}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Email</h3>
                                <p className="font-bold">{orderDetail.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="font-bold text-sm">Address</h2>
                            <div>
                                <h3 className="font-thin">Shipping address</h3>
                                <p className="font-bold">{orderDetail.shipping_address}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Billing address</h3>
                                <p className="font-bold">{orderDetail.shipping_address}</p>
                            </div>
                        </div>
                    </section>
                );
            })}
            {orderDetailsItems.map((orderDetailsItem) => (
                <OrderDetailsProducts key={orderDetailsItem.product_id} orderDetailsItem={orderDetailsItem} />
            ))}
            {orderDetails.map((orderDetail) => (
                <section key={orderDetail.order_id} className="border p-3 space-y-4 w-full">
                    <div className="flex justify-between">
                        <h3 className="font-thin">Subtotal</h3>
                        <p className="font-bold">{orderDetail.total_amount}</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Shipping charge</h3>
                        <p className="font-bold">Identified by the delivery guy</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Taxes</h3>
                        <p className="font-bold">...</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Discount</h3>
                        <p className="font-bold">5%</p>
                    </div>
                    <hr className="border w-full" />
                    <div className="flex justify-between">
                        <h3 className="font-bold">Total</h3>
                        <p className="font-bold">{Math.round((orderDetail.total_amount) * 0.95)}</p>
                    </div>
                </section>
            ))}
            <section className="flex justify-center items-center w-full gap-x-2">
                <Link href='/orders' className="flex items-center justify-center w-1/2 py-1 bg-blue-700 hover:bg-blue-400">Back to Orders</Link>
                <Link href='/shop' className="flex items-center justify-center w-1/2 py-1 bg-blue-700 hover:bg-blue-400">Go to Shop</Link>
            </section>
        </main>
    )
}