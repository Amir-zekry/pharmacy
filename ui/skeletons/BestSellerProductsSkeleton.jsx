const BestSellerProductsSkeleton = () => {
    const skeletonArray = Array.from({ length: 4 });
    return (
        <main className="grid grid-cols-1 md:grid-cols-4 w-full gap-x-4 mt-4">
            {skeletonArray.map((_, index) => (
                <div key={index} className="flex relative space-y-1 flex-col items-center text-center sm:text-sm justify-center animate-pulse">
                    <div className="absolute flex items-center justify-center top-2 left-2 bg-gray-300 px-4 py-1">
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                    </div>
                    <div className="w-full bg-gray-50 flex items-center justify-center h-72 rounded-md">
                        <div className="w-full h-full bg-gray-300"></div>
                    </div>
                    <div className="px-2 text-gray-300 bg-gray-300 w-3/4">product</div>
                    <div className="text-md w-full bg-gray-300 text-gray-300">999</div>
                    <div className="bg-[#BFAAF9] text-[#BFAAF9] px-4 py-2 w-full mt-auto">Add to cart</div>
                </div>
            ))}
        </main>
    );
}

export default BestSellerProductsSkeleton;