export default function CheckoutProducts({ product }) {
    return (
        <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-200 rounded-md">
                    <img src={product.product_image} className="w-full object-contain" />
                </div>
                <div className="w-full">
                    <h3 className="text-sm lg:text-base text-gray-800">{product.product_name}</h3>
                    <ul className="text-xs text-gray-800 space-y-1 mt-3">
                        <li className="flex flex-wrap gap-4">Price <span className="ml-auto">{product.product_price}</span></li>
                        <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{product.product_quantity}</span></li>
                        <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">{product.product_price * product.product_quantity}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}