'use client';

import React from 'react';
const ShoppingCartProductsSkeleton = () => {
    return (
        <div className={`flex relative flex-col h-1/3 border-t items-center justify-center pb-2`}>
            <ul className="flex justify-between items-center w-full px-4">
                <div className="flex items-center gap-x-4">
                    <li>
                        <div className="bg-gray-300 w-24 h-24 animate-pulse"></div>
                    </li>
                    <li>
                        <div className="w-40 h-6 bg-gray-300 animate-pulse mb-2"></div>
                        <div className="w-20 h-6 bg-gray-300 animate-pulse mb-2"></div>
                        <div className='flex items-center gap-x-2 justify-center px-2 py-1 border'>
                            <div className='w-6 h-6 bg-gray-300 animate-pulse'></div>
                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                            <div className='w-6 h-6 bg-gray-300 animate-pulse'></div>
                        </div>
                    </li>
                </div>
                <li>
                    <div className="w-8 h-8 bg-gray-300 animate-pulse"></div>
                </li>
            </ul>
        </div>
    );
};

export default ShoppingCartProductsSkeleton;
