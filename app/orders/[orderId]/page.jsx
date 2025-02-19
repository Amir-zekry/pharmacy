import { getOrderDetails, getOrderDetailsItems } from "@/app/actions";
import OrderDetails from "@/app/ui/orderDetails";
export default async function Page(props) {
    const params = await props.params;
    const id = params.orderId;
    const orderDetails = await getOrderDetails(id)
    const orderDetailsItems = await getOrderDetailsItems(id)
    return (
        <div>
            <OrderDetails orderDetails={orderDetails} orderDetailsItems={orderDetailsItems} />
        </div>
    )
}