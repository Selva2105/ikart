import React from 'react';
import serviceBanner1 from '../../assets/serviceBanner1.jpg'
import serviceBanner2 from '../../assets/serviceBanner2.jpg'
import serviceBanner3 from '../../assets/serviceBanner3.jpg'
import Tick from '../../assets/Tick.svg'

const data = [
  { icon: Tick, label: "Free delivery" },
  { icon: Tick, label: "7 days return policy" },
  { icon: Tick, label: "Pay later policy" },
  { icon: Tick, label: "Only indian products" },
]

const OurService = () => {
  return (
    <div className='font-inter my-12'>

      <div className="">
        <h2 className='font-semibold text-base'>Our Services</h2>
        <p className='text-xs font-inter my-2 leading-5'>Empowering India, Enriching Lives: Unleashing the Best of Indian Craftsmanship at Your Fingertips!</p>
      </div>

      <div className="my-4">
        <div className="flex gap-12 lg:gap-6">

          <div className="hidden md:block w-[30%]">
            <img src={serviceBanner1} alt="Banner-1" className='rounded-xl object-cover w-full h-full' />
          </div>

          <div className=" my-2md:my-10 lg:my-20 flex flex-col justify-between">
            <div className="">
              <h2 className='text-base font-semibold italic my-auto'>I Kart</h2>
              <p>Empowering india in the only moto.</p>
            </div>

            <div className="flex flex-col">
              {data.map((data, index) => (
                <div className='flex flex-row gap-2 items-center'>
                  <img src={data.icon} alt={data.label} />
                  <p key={index} className='text-xs my-2'>{data.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex w-2/5 gap-2">

            <div className="w-2/4" >
              <img src={serviceBanner2} alt="banner-2" className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="w-2/4" >
              <img src={serviceBanner3} alt="banner-2" className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

export default OurService
