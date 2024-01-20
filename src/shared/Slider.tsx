import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import Button from './Button/Button';
import { RiCloseFill } from "react-icons/ri";

interface SideSliderProps {
    showSlider: boolean;
    setShowSlider: Dispatch<SetStateAction<boolean>>;
    icon: ReactNode;
    title: ReactNode;
    content?: ReactNode;
}

const SideSlider: React.FC<SideSliderProps> = ({ setShowSlider, showSlider, icon, title, content = "Content goes here" }) => {

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    return (
        <>
            <Button styles='' title='Your cart' handleClick={toggleSlider}>{icon}</Button>

            <div
                className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className={`fixed top-0 right-0 bottom-0  w-2/5 p-4 bg-ash_gray-800 shadow-lg rounded-l-md transition-transform transform ease-in-out ${showSlider ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-between flex-row items-center">
                        <h2 className='font-inter font-semibold text-base'>{title}</h2>
                        <Button styles='' title='' handleClick={toggleSlider}>
                            <RiCloseFill className='h-6 w-6' />
                        </Button>

                    </div>

                    <div className="my-4">
                        {content}
                    </div>

                </div>
            </div>
        </>
    );
};

export default SideSlider;
