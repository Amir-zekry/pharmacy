export default function StoreProductsSkeleton() {
    const skeletonItems = Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse flex space-y-1 flex-col items-center text-center sm:text-sm justify-center">
            <div className="w-full bg-gray-200 flex items-center justify-center h-72 rounded-md">
                <div className="bg-gray-300 rounded-lg w-full h-full"></div>
            </div>
            <div className="w-3/4 h-6 bg-gray-200 rounded mt-2"></div>
            <div className="w-full h-6 bg-gray-200 rounded mt-2"></div>
            <div className="w-full h-6 bg-gray-200 rounded mt-2"></div>
            <div className="w-full h-6 bg-gray-200 rounded mt-2"></div>
            <div className="flex gap-x-2 items-center border w-full rounded-md p-2 mt-2">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-full h-6 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-emerald-700 w-full h-10 rounded-md mt-2"></div>
        </div>
    ));

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-12 gap-4 px-4">
            {skeletonItems}
        </div>
    );
}