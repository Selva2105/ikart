import React from 'react';
import avatar from '../assets/avatar.webp';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { User } from '../Types/default.types';

const Profile = () => {
  const userCredential = useSelector((state: RootState) => state.userCredential.userCredential) as User;

  return (
    <div className='w-full h-40 bg-hunyadi_yellow-500'>
      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center ring-2 ring-hunyadi_yellow-500 mx-10 my-11">
        <p className='text-xl font-semibold'>{userCredential?.userName?.charAt(0)}</p> 
      </div>
    </div>
  );
}

export default Profile;
