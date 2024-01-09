import React from 'react';
import Headpones from '../../assets/headponesIcon.svg';
import Help from '../../assets/help.svg'

const HelpHome = () => {
  return (
    <div className='p-4 xl:px-20 border-2 border-gray-400 rounded-xl cursor-pointer font-inter text-center text-white flex flex-col gap-6'>

      <div className="text-black">
        <h2 className='font-bold text-xl '>
          Still Have a Question?
        </h2>
        <p className='font-medium text-sm'>Still having queries thats not resolved feel free to contact us and resolve the issues</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center my-8">

        <div className="bg-ash_gray-400 w-full lg:w-1/3 h-full rounded-lg flex justify-center flex-col px-10 items-center gap-16 py-16">
          <div className="flex flex-col items-center flex-wrap content-around">
            <img src={Headpones} alt="headphone" className='w-2/3 my-3' />
            <h2 className='text-center font-bold text-base ' >For Sales</h2>
          </div>

          <div className="text-sm flex flex-col gap-6">
            <p>Contact our 24/7 customer service to clear your problems and enjoy our service</p>
            <p>support@ikart.com</p>
          </div>
        </div>

        <div className="bg-hunyadi_yellow  w-full lg:w-1/3 h-full rounded-lg flex justify-center flex-col px-10 items-center gap-16 py-16">
          <div className="flex flex-col items-center flex-wrap content-around">
            <img src={Help} alt="headphone" className='w-[41%] my-3' />
            <h2 className='text-center font-bold text-base '>Help & Support</h2>
          </div>

          <div className="text-sm flex flex-col gap-6">
            <p>Contact our 24/7 customer service to clear your problems and enjoy our service</p>
            <p>support@ikart.com</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default HelpHome;
