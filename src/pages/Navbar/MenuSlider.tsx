import React, { Dispatch, SetStateAction } from 'react'
import { navBtns, navLinks } from './data';
import NavItem from './NavItem';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { User } from '../../Types/default.types';
import ProfileDropdown from '../../shared/inputs/ProfileDropdown';
import { RiBookmark3Fill, RiHeartFill, RiShoppingBagFill, RiUser3Fill } from 'react-icons/ri';

interface sliderProps {
    openNav: boolean;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const MenuSlider: React.FC<sliderProps> = ({ openNav, setOpenNav }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userCredential = useSelector((state: RootState) => state.userCredential.userCredential) as User;

    const options = [
        { label: 'Profile', action: `/profile/${userCredential._id}`, icon: <RiUser3Fill /> },
        { label: 'Your orders', action: '/yourOrders', icon: <RiShoppingBagFill /> },
        { label: 'Wishlist', action: '/wishlist', icon: <RiHeartFill /> },
        { label: 'Premium', action: '/premium', icon: <RiBookmark3Fill className="text-hunyadi_yellow-400" /> },
    ];

    return (
        <div
            className={`w-full fixed top-0 p-4 gap-4 xl:hidden flex flex-row items-center z-20 bg-white transition-transform ${openNav ? 'transform translate-x-0' : 'transform translate-x-full '
                }`}
        >
            <div className="flex flex-col gap-4 w-full md:flex-row items-start md:items-center ">
                <div className="flex gap-6 w-full lg:start">
                    {navLinks.links.map((link, index) => (
                        <NavItem key={index} label={link.label} url={link.url} className='font-inter font-medium text-sm' />
                    ))}
                </div>

                <div id="btns-container" className='flex gap-8'>
                    {token ? (
                        userCredential ? (
                            <div className="">
                                <ProfileDropdown profile={userCredential.userName} options={options} />
                            </div>
                        ) : (
                            <span>Loading...</span>
                        )
                    ) : (
                        navBtns.btns.map((btn, index) => (
                            <Button
                                key={index}
                                title={btn.label}
                                styles='!rounded-2xl font-medium font-inter text-sm px-4 py-1'
                                variant={`${index === 0 ? 'outlined' : 'solid'}`}
                                handleClick={() => {
                                    navigate(btn.url);
                                }}
                            >
                                {btn.label}
                            </Button>
                        ))
                    )}
                </div>
            </div>

            <div className="closeSlider">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>

        </div>
    )
}

export default MenuSlider