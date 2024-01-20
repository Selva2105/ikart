import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { User } from '../Types/default.types';
import Button from './Button/Button';
import { Link } from 'react-router-dom';

export interface CardProps {
    data: {
        _id: string;
        name: string;
        description: string;
        category: string;
        product_list: {
            size: string;
            price: number;
            quantity: number;
            _id: string;
        }[];
        brand: string;
        ratings: {
            rating: number,
            review: string,
            reviewer: string
        }[];
        images: any;
    };
    wishList?: {
        product: string;
        _id: string;

    }[];
}

const Card: React.FC<CardProps> = ({ data, wishList }) => {

    const url = process.env.REACT_APP_API_URL;

    const calculateTotalReviews = (): number => {
        return data?.ratings?.length || 0;
    };

    const totalReviews = calculateTotalReviews();

    const Stars: React.FC<{ rating: number }> = ({ rating }) => {
        const maxStars = 5;
        const filledStars = Math.round(rating);
        const emptyStars = maxStars - filledStars;

        return (
            <div className="flex">
                {[...Array(Math.max(filledStars, 0))].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
                {[...Array(Math.max(emptyStars, 0))].map((_, index) => (
                    <FaStar key={filledStars + index} className="text-gray-300" />
                ))}
            </div>
        );
    };

    const [isFavorited, setIsFavorited] = useState(false);
    const token = localStorage.getItem('token')

    useEffect(() => {
        const favoritesArray = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorited(favoritesArray.includes(data._id));
    }, [data._id]);

    const handleHeartClick = () => {
        const favoritesArray = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorited(!isFavorited);

        if (!isFavorited) {
            favoritesArray.push(data._id);
        } else {
            const index = favoritesArray.indexOf(data._id);
            favoritesArray.splice(index, 1);
        }

        localStorage.setItem('favorites', JSON.stringify(favoritesArray));

    };

    const handleAddCart = () => {

    }

    return (
        <div className='border-2 w-full md:w-[48%] lg:w-[32%] p-3 rounded-md cursor-pointer flex flex-col font-inter gap-6 h-fit'>
            <Link to={`/productPage/${data._id}`} className=''>

                <div className='w-full h-60'>
                    <img
                        src={`${url}${data?.images}`}
                        alt={data?.name}
                        className='object-cover w-full h-full rounded-md' />
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2 ">
                        <h2 className='text-xs font-semibold font-inter'>{data?.name}</h2>
                        <p className='text-xs font-inter overflow-hidden whitespace-nowrap text-ellipsis max-w-[300px]'>{data?.description}</p>
                    </div>
                    <div className="flex">
                        {
                            token ? (
                                <FaRegHeart
                                    className={`w-4 h-4 cursor-pointer text-red-500 tkn`}
                                    onClick={handleHeartClick}
                                />
                            ) : (
                                isFavorited ? (
                                    <FaHeart
                                        className={`w-4 h-4 cursor-pointer text-red-500 lst`}
                                        onClick={handleHeartClick}
                                    />
                                ) : (
                                    <FaRegHeart
                                        className={`w-4 h-4 cursor-pointer text-red-500 lst`}
                                        onClick={handleHeartClick}
                                    />
                                ))
                        }

                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <p className='text-[0.8rem] font-inter'>Price</p>
                        <p className='text-sm font-semibold font-inter'>₹{data?.product_list?.[0]?.price || 0}.00</p>
                        <p className='text-[0.8rem] font-inter'>Price Variance*</p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                        <Stars rating={data?.ratings?.length > 0 ? data?.ratings[0]?.rating : 0} />
                        <p className='text-xs'>{data?.ratings && data.ratings.length > 0 ? data.ratings[0].rating : 'N/A'}{` (${totalReviews})`}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-1 ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <g clipPath="url(#clip0_2_630)">
                                <path d="M6.5 1C9.257 1 11.5 3.243 11.5 6C11.5 8.757 9.257 11 6.5 11C3.743 11 1.5 8.757 1.5 6C1.5 3.243 3.743 1 6.5 1ZM6.5 0C3.1865 0 0.5 2.6865 0.5 6C0.5 9.3135 3.1865 12 6.5 12C9.8135 12 12.5 9.3135 12.5 6C12.5 2.6865 9.8135 0 6.5 0ZM7 6V3H6V7H9.5V6H7Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_630">
                                    <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='text-xs'>7 Days</p>

                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Button variant='solid' styles='flex items-center gap-4 px-2 py-1' title='cart' handleClick={handleAddCart} >
                            <p className='text-xs'>Add to cart</p>
                            <CiDeliveryTruck className='w-6 h-6' />
                        </Button>

                    </div>

                </div>
            </Link >

        </div>
    );
};

export default Card;