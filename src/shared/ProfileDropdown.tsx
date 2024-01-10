import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
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

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = async () => {
    debugger
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const apiUrl = `${url}api/v1/auth/logout`;
      console.log('API URL:', apiUrl);

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token')
        window.location.href = '/signin';
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="relative font-inter">

      <p className="text-gray-800 px-2 py-1 overflow-hidden whitespace-nowrap text-ellipsis max-w-[160px] cursor-pointer" onClick={handleProfileClick}>Hi, {profile ?? 'Chief'}</p>

      {dropdownVisible && (
        <div className="absolute top-12 sm:left-0 md:left-auto md:right-0 bg-white border border-gray-200 p-2 rounded w-max">
          <ul className="list-none p-0 m-0">
            {options.map((option, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex flex-row justify-between items-center gap-6">
                <Link to={option.action}>
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