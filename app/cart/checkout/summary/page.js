import { getLastOrder, getLastOrderItems } from "@/app/lib/data";
import OrderSummary from "@/app/ui/orderSummary";

export default async function () {
    const lastOrders = await getLastOrder()
    const LastOrdersItems = await getLastOrderItems()
    return (
        <OrderSummary lastOrders={lastOrders} LastOrdersItems={LastOrdersItems} />
    )
}