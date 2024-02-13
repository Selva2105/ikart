import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Card from '../../shared/Card';
import { User } from '../../Types/default.types';
import { fetchProduct } from '../../features/TrendingProduct/TrendingProductSlice';
import TruckLoader from '../../shared/TruckLoader/TruckLoader';

const TrendingProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector((state: RootState) => state.TrendingProduct.product);
    const userCredential = useSelector((state: RootState) => state.userCredential.userCredential) as User;
    const status = useSelector((state: RootState) => state.TrendingProduct.status);
    const error = useSelector((state: RootState) => state.TrendingProduct.error);

    const url = process.env.REACT_APP_API_URL;
    const query = '?fields=brand,name,category,product_list,ratings,images,description&totalSales[gt]=70&limit=10'

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchProduct({ url, query }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [dispatch, url]);

    return (
        <div className="mt-12 overflow-x-auto w-full no-scrollbar overflow-y-auto font-inter">

            <h2 className='font-semibold text-base'>Trending 2023</h2>
            <p className='text-xs font-inter my-2'>Checkout our product that's being a game changer in this year :</p>

            {status === 'loading' && (
                <div className="flex items-center justify-center h-screen">
                    <TruckLoader />
                </div>
            )}

            {status === 'failed' && <div>Error: {error}</div>}

            {status === "succeeded" &&
                <div className="flex flex-wrap flex-row gap-4 mt-6 justify-start">
                    {product.length > 0 ? (
                        product.map((data: any, index: number) => (
                            <Card key={index} data={data} wishList={userCredential.wishlist} />
                        ))
                    ) : (
                        <p>No trending products available</p>
                    )}

                </div>
            }
        </div>
    );
};

export default TrendingProduct;
