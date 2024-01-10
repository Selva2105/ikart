import React from 'react';
import assuredBandage from '../../assets/assuredBandage.svg';
import { FaMobileAlt } from 'react-icons/fa';
import { GiClothes } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { FaTruckMonster } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import { IoFootball } from "react-icons/io5";
import { LiaFlaskSolid } from "react-icons/lia";
interface CardProps {
    title: string;
}

const renderIcon = (title: string) => {
    switch (title) {
        case 'Electronics':
            return { icon: <FaMobileAlt className='w-5 h-6 text-ash_gray-400' />, products: ["Smartphone", "Laptop", "Headphones"] };
        case 'Clothing':
            return { icon: <GiClothes className='w-5 h-6 text-ash_gray-400' />, products: ["T-Shirts", "Jeans", "Dresses"] };
        case 'Home & Kitchen':
            return { icon: <FaKitchenSet className='w-5 h-6 text-ash_gray-400' />, products: ["Cookware", "Furniture", "Home Decor"] };
        case 'Books':
            return { icon: <SlNotebook className='w-5 h-6 text-ash_gray-400' />, products: ["Fiction", "Non-fiction", "Mystery"] };
        case 'Toys':
            return { icon: <FaTruckMonster className='w-5 h-6 text-ash_gray-400' />, products: ["Action Figures", "Board Games", "Dolls"] };
        case 'Beauty':
            return { icon: <GiMirrorMirror className='w-5 h-6 text-ash_gray-400' />, products: ["Skincare", "Makeup", "Fragrances"] };
        case 'Sports':
            return { icon: <IoFootball className='w-5 h-6 text-ash_gray-400' />, products: ["Football", "Basketball", "Fitness Equipment"] };
        default:
            return { icon: <LiaFlaskSolid className='w-5 h-6 text-ash_gray-400' />, products: ["other products you may interested"] };
    }
};


const CategoryCard: React.FC<CardProps> = ({ title }) => {
    const { icon, products } = renderIcon(title);

    return (
        <div className='bg-[#E9E9E9] px-6 py-4 w-full md:w-[31%] lg:w-[30%] xl:w-1/5 font-inter rounded-lg cursor-pointer hover:shadow-lg'>
            <div className='flex justify-end'>
                <img src={assuredBandage} alt='Bandage' />
            </div>

            <div className='flex flex-col gap-2'>
                <h2>{icon}</h2>
                <h2 className='text-sm font-semibold'>{title}</h2>
                <p className='text-[0.7rem]'>{products.join(', ')}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
