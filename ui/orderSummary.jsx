import Link from "next/link";
import OrderSummaryProducts from "./orderSummaryProducts";

export default function OrderSummary({ lastOrders, LastOrdersItems }) {
    return (
        <main className="flex flex-col w-full md:w-3/4 mx-auto min-h-screen pt-8 gap-y-4 px-4 sm:px-8">
            <section>
                <h1 className="text-2xl font-bold">Your Order Details</h1>
            </section>
            <section>
                {lastOrders?.map((lastOrder) => (
                    <div key={lastOrder.order_id}>
                        <p className="text-xl">Order <span>#{lastOrder.order_id}</span></p>
                        <p className="font-thin">Thanks for shopping with us</p>
                    </div>
                ))}
            </section>
            {lastOrders.map((lastOrder) => {
                const expectedDeliveryDate = new Date(lastOrder.created_at);
                expectedDeliveryDate.setMinutes(expectedDeliveryDate.getMinutes() + 30);
                return (
                    <section key={lastOrder.order_id} className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="text-sm font-bold">Order info</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-thin">Order date</h3>
                                    <p className="font-bold">{new Date(lastOrder.created_at).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Status</h3>
                                    <p className="font-bold">Pending</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Payment method</h3>
                                    <p className="font-bold">{lastOrder.payment_method}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Expected delivery time</h3>
                                    <p className="font-bold">{expectedDeliveryDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                                <div>
                                    <h3 className="font-thin">Payment status</h3>
                                    <p className="font-bold">{lastOrder.order_status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="text-sm font-bold">Customer</h2>
                            <div>
                                <h3 className="font-thin">Name</h3>
                                <p className="font-bold">{lastOrder.first_name}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Phone number</h3>
                                <p className="font-bold">{lastOrder.phone_number}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Email</h3>
                                <p className="font-bold">{lastOrder.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md w-full md:w-1/3 p-3 gap-y-2">
                            <h2 className="font-bold text-sm">Address</h2>
                            <div>
                                <h3 className="font-thin">Shipping address</h3>
                                <p className="font-bold">{lastOrder.shipping_address}</p>
                            </div>
                            <div>
                                <h3 className="font-thin">Billing address</h3>
                                <p className="font-bold">{lastOrder.shipping_address}</p>
                            </div>
                        </div>
                    </section>
                );
            })}
            {LastOrdersItems.map((LastOrderItem) => (
                <OrderSummaryProducts key={LastOrderItem.product_id} LastOrderItem={LastOrderItem} />
            ))}
            {lastOrders.map((lastOrder) => (
                <section key={lastOrder.order_id} className="border p-3 space-y-4 w-full">
                    <div className="flex justify-between">
                        <h3 className="font-thin">Subtotal</h3>
                        <p className="font-bold">{lastOrder.total_amount}</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Shipping charge</h3>
                        <p className="font-bold">15</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Taxes</h3>
                        <p className="font-bold">0</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-thin">Discount</h3>
                        <p className="font-bold">5%</p>
                    </div>
                    <hr className="border w-full" />
                    <div className="flex justify-between">
                        <h3 className="font-bold">Total</h3>
                        <p className="font-bold">{Math.round((lastOrder.total_amount + 15 + 0) * 0.95)}</p>
                    </div>
                </section>
            ))}
            <section className="flex justify-center items-center w-full gap-x-2">
                <Link href='/shop' className="flex items-center justify-center w-1/2 py-1 bg-blue-700 hover:bg-blue-400">Back to store</Link>
                <Link href='/orders' className="flex items-center justify-center w-1/2 py-1 bg-blue-700 hover:bg-blue-400">Go to orders</Link>
            </section>
        </main>
    )
}
