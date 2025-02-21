import { getLastOrder, getLastOrderItems } from "@/app/actions";
import OrderSummary from "@/app/ui/orderSummary";

export default async function () {
    const lastOrders = await getLastOrder()
    const LastOrdersItems = await getLastOrderItems()
    return (
        <OrderSummary lastOrders={lastOrders} LastOrdersItems={LastOrdersItems} />
    )
}