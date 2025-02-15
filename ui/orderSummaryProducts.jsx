
export default function OrderSummaryProducts({ LastOrderItem }) {
    return (
        <section className="flex justify-between border rounded-md p-3">
            <div className="flex gap-x-2">
                <img src={LastOrderItem.order_image} alt={LastOrderItem.product_name} className="size-16 rounded-md" />
                <div className="space-y-2 flex flex-col">
                    <p>{LastOrderItem.product_name}</p>
                    <p>{LastOrderItem.quantity}</p>
                </div>
            </div>
            <p className="font-bold">{LastOrderItem.price}</p>
        </section>
    )
}