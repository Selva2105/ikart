import React from 'react'
import formatDateTime from '../../utils/DateConvertion';
import Counter from '../../shared/inputs/Counter';
import { RiDeleteBin6Fill } from "react-icons/ri";

const CartSlider = () => {

    // Get today's date
    const today = new Date();

    // Call the function to get the formatted date string
    const formattedDate = formatDateTime(today);

    return (
        <div className='font-inter flex flex-row border-2 rounded-md border-white justify-between w-full bg-white '>

            <div className="w-2/4 h-44">
                <img src="https://culturekart.vercel.app/890xyz.webp" alt="" className='w-full h-full rounded-l-md object-cover object-left' />
            </div>

            <div className="w-2/4 flex flex-col gap-2 p-4 justify-between">
                <h2 className='font-medium text-sm'>Yoga Mat and Accessories Kit</h2>
                <p className='text-xs overflow-hidden whitespace-nowrap text-ellipsis max-w-full'>Complete kit for a fulfilling yoga practice dfghddf</p>

                <p className='text-[12px] text-green-600 mt-2'>{formattedDate}</p>

                <div className="w-full flex justify-between items-center gap-6">

                    <div className="w-3/5">
                        <p className='text-[12px] mt-2'>Price : ₹40.00 /piece</p>
                    </div>

                    <div className="w-2/4 flex items-center gap-2 justify-between">
                        <Counter />
                        <RiDeleteBin6Fill className='text-red-500' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartSlider