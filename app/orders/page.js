import Orders from "@/app/ui/orders";
import { getUserOrders } from "../actions";

export default async function () {
    const orders = await getUserOrders()
    return (
        <Orders orders={orders} />
    )
}