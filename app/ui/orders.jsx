'use client'
import { cancelOrder } from "@/app/actions";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { TbCancel } from "react-icons/tb";

export default function Orders({ orders }) {
    return (
        <main className="p-4 min-h-screen pt-20 flex items-center justify-center">
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-2 py-2 border-b">OrderId</th>
                            <th className="px-2 py-2 border-b">UserId</th>
                            <th className="px-2 py-2 border-b">First Name</th>
                            <th className="px-2 py-2 border-b">Last Name</th>
                            <th className="px-2 py-2 border-b">Email</th>
                            <th className="px-2 py-2 border-b">Phone Number</th>
                            <th className="px-2 py-2 border-b">Zip Code</th>
                            <th className="px-2 py-2 border-b">Shipping Address</th>
                            <th className="px-2 py-2 border-b">Order Date</th>
                            <th className="px-2 py-2 border-b">Order Time</th>
                            <th className="px-2 py-2 border-b">Total Amount</th>
                            <th className="px-2 py-2 border-b">Status</th>
                            <th className="px-2 py-2 border-b">Payment Method</th>
                            <th className="px-2 py-2 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.order_id}
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => window.location.href = `/orders/${order.order_id}`}
                            >
                                <td className="px-2 py-2 border-b">{order.order_id}</td>
                                <td className="px-2 py-2 border-b">{order.user_id}</td>
                                <td className="px-2 py-2 border-b">{order.first_name}</td>
                                <td className="px-2 py-2 border-b">{order.last_name}</td>
                                <td className="px-2 py-2 border-b">{order.email}</td>
                                <td className="px-2 py-2 border-b">{order.phone_number}</td>
                                <td className="px-2 py-2 border-b">{order.zip_code}</td>
                                <td className="px-2 py-2 border-b">{order.shipping_address}</td>
                                <td className="px-2 py-2 border-b whitespace-nowrap">{new Date(order.order_date).toLocaleDateString()}</td>
                                <td className="px-2 py-2 border-b whitespace-nowrap">{new Date(order.created_at).toLocaleTimeString()}</td>
                                <td className="px-2 py-2 border-b">{order.total_amount}</td>
                                <td className={`px-2 py-2 border-b ${order.status === 'Canceled' ? 'text-red-400' : order.status === 'Pending' ? 'text-blue-400' : 'text-green-400'}`}>{order.status}</td>
                                <td className="px-2 py-2 border-b">{order.payment_method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
