import axios from 'axios';
import React, { useState } from 'react'
import Input from '../../shared/Input';
import ShowHidePassword from '../../shared/ShowHidePassword';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import Dropdown from '../../shared/DropDown';

const Signup = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];


    const handleTogglePassword = () => {
        setShow((prev) => !prev);
    };

    const url = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Values", {
            firstName,
            lastName,
            password,
            email
        });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter ">
            <div className="max-w-xl w-full p-6 space-y-6 bg-white rounded-lg border-2 border-gray-500">
                <h2 className="text-xl font-bold text-center text-gray-900">Sign up</h2>
                <p className='text-sm text-center !my-2'>Hey chief, welcome to iKart 🤗</p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="w-full flex flex-row gap-4">

                        <div className="w-2/4">
                            <Input isRequired={true} placeholder='Enter your first name' type='text' id='firstName' labelText='First name' labelClass='!text-sm' onChange={(val) => setFirstName(val)} />
                        </div>

                        <div className="w-2/4">
                            <Input isRequired={true} placeholder='Enter your last name' type='text' id='lastName' labelText='Last name' labelClass='!text-sm' onChange={(val) => setLastName(val)} />
                        </div>

                    </div>

                    <div className="w-full">
                        <Input isRequired={true} placeholder='Enter your email' type='email' id='email' labelText='Email' labelClass='!text-sm' onChange={(val) => setEmail(val)} />

                    </div>

                    <ShowHidePassword isRequired={true} placeholder='Enter your password' id='password' type={show ? 'text' : 'password'} showPassword={show} onToggle={handleTogglePassword} onChange={(val) => setPassword(val)} labelText='Password' labelClass='!text-sm' />

                    <Input isRequired={true} placeholder='Enter your confirm password' id='password' type={'password'} onChange={(val) => setPassword(val)} labelText='Confirm password' labelClass='!text-sm' />

                    <Button title='Login' styles='text-center w-full text-sm font-medium border-2 border-hunyadi_yellow-500 py-2 rounded-lg hover:text-hunyadi_yellow-500 text-white bg-hunyadi_yellow-500 hover:bg-transparent transition-all duration-300' type='submit' >Login</Button>

                    <div className="">
                        <Dropdown options={options} />
                    </div>

                </form>

                <div className="text-xs">
                    New to I kart ? click here to <Link to='/signup' className='text-princeton_orange-600'> create an account </Link>
                </div>

                <div className="flex items-center justify-between w-full">
                    <hr className="w-1/2 border-t border-gray-500" />
                    <div className="mx-4 text-gray-500">or</div>
                    <hr className="w-1/2 border-t border-gray-500 " />
                </div>


                <div className="w-full">
                    <Button title='google' styles='w-full font-medium border-2 border-gray-500 rounded-lg py-2 hover:bg-ash_gray hover:text-white hover:border-ash_gray' ><span className='flex flex-row justify-evenly items-center '><RiGoogleFill className='w-6 h-8' /> <p>Sign up with google</p> </span></Button>
                </div>

            </div>
        </div>
    )
}

export default Signup