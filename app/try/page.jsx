import AddToCart from "@/ui/buttons/addToCart";
import { tryGetProducts } from "../actions";
import TrySkel from "@/ui/skeletons/trySkel";

export default async function () {
    // const products = await tryGetProducts()
    return (
        <main className="flex items-center justify-center min-h-screen">
            <TrySkel />
        </main>
    )
}