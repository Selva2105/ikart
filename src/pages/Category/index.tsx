import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { fetchCategories } from '../../features/categorySlice/categorySlice';
import CategoryCard from './CategoryCard';
import TruckLoader from '../../shared/TruckLoader/TruckLoader';

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.category.categories);
  const status = useSelector((state: RootState) => state.category.status);
  const error = useSelector((state: RootState) => state.category.error);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCategories(url));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, url]);

  return (
    <div className='font-inter mt-4'>
      <h2 className='font-semibold text-base'>Category</h2>
      <p className='text-xs font-inter my-2'>Checkout all our product categories that you may like :</p>

      {status === 'loading' && (
        <div className="flex items-center justify-center h-screen">
          <TruckLoader />
        </div>
      )}


      {status === 'failed' && <div>Error: {error}</div>}

      {status === "succeeded" &&
        <div className='flex w-full mx-auto gap-4 lg:gap-8 xl:gap-4 mt-6 flex-wrap lg:justify-start xl:justify-between gap-y-6'>
          {categories.map((data, index) => (
            <CategoryCard title={data} key={index} />
          ))}
        </div>
      }
    </div>
  );
};

export default Category;
