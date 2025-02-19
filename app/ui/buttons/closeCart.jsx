'use client'
import { MdArrowForwardIos } from "react-icons/md";
import { closeCart } from '@/app/Redux/cart';
import { useDispatch } from 'react-redux';
export default function CloseCart() {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(closeCart())}>
            <MdArrowForwardIos className='size-8 hover:text-gray-400' />
        </button>
    )
}