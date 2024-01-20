import React from 'react'
import Home from '../pages/Home'
import Category from '../pages/Category'
import TrendingProduct from '../pages/TrendingProduct'
import OurService from '../pages/OurService/OurService'
import Banner from '../assets/banner-4.jpg'
import Button from '../shared/Button/Button'
import HelpHome from '../pages/HelpHomeTab'

const Header = () => {

  const bannerStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '635px',
  };

  return (
    <>
      <Home />

      <div className=" !mx-4 md:!mx-8 lg:!mx-20 !my-6 lg:m-10 border-4 border-ash_gray rounded-3xl">
        <div className="mx-auto bg-ash_gray h-3 rounded-tl-[0] rounded-tr-[0] rounded-br-[1.25rem] rounded-bl-[1.25rem] flex-shrink w-1/6"></div>

        <div className="p-4 xl:px-16">
          <Category />
          <TrendingProduct />
          <OurService />
        </div>
      </div>

      <div style={bannerStyle} className="hidden md:flex flex-col text-white items-center justify-center h-full">
        <h2 className='text-2xl font-bold'>Explore the globe from home with </h2>
        <h2 className='text-2xl font-bold'>#LiveExperience </h2>

        <Button styles='my-6 text-base rounded-full p-2 px-4 border-2 font-semibold hover:bg-black hover:text-white transition-all duration-300' title='Check all'>Check all</Button>
      </div>
      <div className="p-4 xl:px-16">
        <HelpHome />
      </div>

    </>
  )
}

export default Header