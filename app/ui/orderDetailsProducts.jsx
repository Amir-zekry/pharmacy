export default function OrderDetailsProducts({ orderDetailsItem }) {
    return (
        <section className="flex justify-between border rounded-md p-3">
            <div className="flex gap-x-2">
                <img src={orderDetailsItem.order_image} alt={orderDetailsItem.product_name} className="size-16 rounded-md" />
                <div className="space-y-2 flex flex-col">
                    <p>{orderDetailsItem.product_name}</p>
                    <p>{orderDetailsItem.quantity}</p>
                </div>
            </div>
            <p className="font-bold">{orderDetailsItem.price}</p>
        </section>
    )
}