export default function StoreProductsSkeleton() {
    const skeletonItems = Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse flex space-y-1 flex-col items-center text-center sm:text-sm justify-center">
            <div className="w-full bg-gray-200 flex items-center justify-center h-72">
                <div className="bg-gray-300 w-full h-full"></div>
            </div>
            <div className="px-2 w-3/4 bg-gray-200 text-gray-200  mt-2">i'm a product</div>
            <div className="text-md w-full bg-gray-200 text-gray-200  mt-2">100</div>
            {/* <div className="flex gap-x-2 items-center border w-full -md p-2 mt-2">
                <div className="w-8 h-6 bg-gray-200 "></div>
                <div className="w-full h-4 bg-gray-200 "></div>
                <div className="w-8 h-6 bg-gray-200 "></div>
            </div> */}
            <div className="bg-[#724EE2] w-full py-2 px-4 text-[#724EE2]"> add to cart</div>
        </div>
    ));

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-4 px-4">
            {skeletonItems}
        </div>
    );
}