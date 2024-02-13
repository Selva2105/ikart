import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { User } from '../Types/default.types';

const Profile = () => {
  const userCredential = useSelector((state: RootState) => state.userCredential.userCredential) as User;

  return (
    <div className='w-full h-40 bg-hunyadi_yellow-500'>
      <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center ring-2 ring-hunyadi_yellow-500 mx-10 ">
        <img className='w-28 h-28 rounded-full object-cover' src={userCredential.profileImage} alt='profile' />
      </div>
    </div>
  );
}

export default Profile;
