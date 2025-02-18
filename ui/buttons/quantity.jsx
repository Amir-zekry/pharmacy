'use client'
import { quantityDecrement, quantityIncrement } from '@/app/actions';

export default function Quantity({ quantity }) {
    return (
        <div className='flex items-center gap-x-2 justify-center px-2 py-1 border '>
            <button className='hover:text-purple-300 disabled:text-gray-300' onClick={() => quantityDecrement()}>
                -
            </button>
            <p min="1" max="10" className="w-full text-center">{quantity}</p>
            <button className='hover:text-purple-300' onClick={() => quantityIncrement()}>
                +
            </button>
        </div>
    )
}