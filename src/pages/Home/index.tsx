import React from 'react';
import HomeBanner from '../../assets/HomeBanner.jpg';
import { HomeBtn } from './data';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const bannerStyle = {
    backgroundImage: `url(${HomeBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '635px',
  };

  return (
    <div className='p-4 xl:px-20 md:mt-0 xl:mt-14' id='Home' style={bannerStyle}>
      <div className="w-full md:w-7/12 lg:w-7/2 xl:w-1/2 mt-40">
        <p className='font-bold text-base xl:text-xl font-inter '>Unleash the Shopping Fever with Exclusive Deals</p>
        <p className='font-normal text-xs leading-5 xl:text-sm'>Embark on a journey through our curated selection of Indian products, where tradition meets modernity. Immerse yourself in the rich tapestry of India's craftsmanship and culture, as we bring you a diverse range of authentic goods, proudly crafted in the heart of the nation.</p>
      </div>

      <div className="mt-10 flex flex-col items-start">
        {HomeBtn.btns.map((btn, index) => (
          <Button
            key={index}
            title={btn.label}
            styles='!rounded-full font-semibold font-inter text-xs xl:text-sm px-4 py-3 xl:py-1 mb-4 md:mb-0'
            variant={`outlined`}
            handleClick={() => {
              navigate(btn.url)
            }}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
