import Orders from "@/ui/orders";
import { getUserOrders } from "../actions";

export default async function () {
    const orders = await getUserOrders()
    return (
        <Orders orders={orders} />
    )
}