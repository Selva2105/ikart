import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { RiUserSharedFill } from 'react-icons/ri';
import axios from 'axios';

interface Option {
  label: string;
  action: string;
  icon?: any;
}

interface ProfileDropdownProps {
  profile: string;
  options: Option[];
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ profile, options }) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const url = process.env.REACT_APP_API_URL;

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleSignOut = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const apiUrl = `${url}api/v1/auth/logout`;

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token')
        window.location.href = '/signin';
      }

    } catch (error) {
      console.log(error);
    }
  };

  console.log();


  return (
    <div className="relative font-inter" ref={dropdownRef}>

      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-hunyadi_yellow-500 hover:bg-hunyadi_yellow-500 cursor-pointer hover:text-white transition-all duration-300" onClick={handleProfileClick}>
        <img src={profile} alt="" className='w-10 h-10 rounded-full object-cover' />
      </div>

      {dropdownVisible && (
        <div className="absolute top-12 sm:left-0 md:left-auto md:right-0 bg-white border border-gray-200 p-2 rounded w-max">

          <ul className="list-none p-0 m-0">
            {options.map((option, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex flex-row justify-between items-center gap-6">
                <Link to={option.action} onClick={handleProfileClick} >
                  {option.label}
                </Link>
                {option.icon}
              </li>
            ))}
            <Button styles='cursor-pointer p-2 rounded-lg flex flex-row justify-between items-center gap-6 bg-red-500 w-full hover:bg-transparent hover:text-red-500 text-white hover:text-red-500 hover:border-red-500 border-2' title='Sign out' handleClick={handleSignOut} >
              <span>Sign out</span>
              {<RiUserSharedFill className='' />}
            </Button>
          </ul>
        </div>
      )}

    </div>
  );
};

export default ProfileDropdown;