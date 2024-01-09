import React, { useState } from "react";
import NavItem from "./NavItem";
import { navLinks, navBtns } from "./data";
import Input from "../../shared/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import MenuSlider from "./MenuSlider";

const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();

    const [openNav, setOpenNav] = useState(false)

    return (
        <>
            <nav className="w-full fixed top-0 z-10 p-4 xl:px-20 flex flex-row justify-between items-start md:items-center bg-white">
                <div className="flex justify-between items-start lg:items-center flex-col md:flex-row w-full md:w-[70%] lg:w-[60%] xl:w-[70%] gap-4">
                    <div className="flex">
                        <div
                            className="font-inter text-sm font-semibold"
                            onClick={() => navigate("/")}
                        >
                            IKart
                        </div>
                    </div>

                    <div id="links-container" className='hidden xl:flex gap-8'>
                        {navLinks.links.map((link, index) => (
                            <NavItem key={index} label={link.label} url={link.url} className='font-inter font-medium text-sm' />
                        ))}
                    </div>

                    <div className="w-full md:w-2/4 xl:w-[30%] flex gap-4 items-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>

                        <Input
                            name="search"
                            id="type"
                            type="text"
                            inputClass="bg-hunyadi_yellow !rounded-3xl !px-3 !py-1 !border-none text-xs text-black focus:outline-none w-full"
                            placeholder=""
                            isRequired={false}

                        />
                    </div>
                </div>

                <div className="hidden lg:flex justify-end">

                    <div id="btns-container" className='flex gap-8'>
                        {navBtns.btns.map((btn, index) => (
                            <Button
                                key={index}
                                title={btn.label}
                                styles='!rounded-2xl font-medium font-inter text-sm px-4 py-1'
                                variant={`${index === 0 ? 'outlined' : 'solid'}`}
                                handleClick={() => {
                                    navigate(btn.url)
                                }}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </div>

                </div>

                <div className="flex xl:hidden items-end">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            </nav>
            {openNav && <MenuSlider openNav setOpenNav={setOpenNav} />}
        </>
    );
};

export default Navbar;
