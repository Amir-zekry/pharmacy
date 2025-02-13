
export default function OrderSummaryProducts({ LastOrderItem }) {
    return (
        <section className="flex justify-between border rounded-md p-3">
            <div className="flex gap-x-2">
                <img src={LastOrderItem.order_image} alt={LastOrderItem.product_name} className="size-16 rounded-md" />
                <div className="space-y-2 flex flex-col">
                    <text>{LastOrderItem.product_name}</text>
                    <text>{LastOrderItem.quantity}</text>
                </div>
            </div>
            <text className="font-bold">{LastOrderItem.price}</text>
        </section>
    )
}