import axios from 'axios';
import React, { useState } from 'react'
import Input from '../../shared/Input';
import ShowHidePassword from '../../shared/ShowHidePassword';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import Dropdown from '../../shared/DropDown';
import DateInput from '../../shared/DateInput';
import CheckBox from '../../shared/CheckBox';

const Signup = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumberCode, setPhoneNumberCode] = useState<string>('+91');
    const [dob, setDob] = useState<{
        startDate: Date | null;
        endDate: Date | null;
    }>({
        startDate: null,
        endDate: null
    });
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const options = ['+91', '+94', '+977'];


    const handleTogglePassword = () => {
        setShow((prev) => !prev);
    };

    const url = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${url}api/v1/user`, {
                userName: firstName +" "+ lastName,
                email: email,
                phoneNumber: {
                    CountryCode: phoneNumberCode,
                    Number: phoneNumber
                },
                dob: dob.startDate,
                password: password,
                confirmPassword: confirmPassword
            }
            );

            console.log(response);
            

        } catch (error) {
            console.error("Error during async operation", error);
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter mt-20">
            <div className="max-w-xl w-full p-6 space-y-6 bg-white rounded-lg border-2 border-gray-500">
                <h2 className="text-xl font-bold text-center text-gray-900">Sign up</h2>
                <p className='text-sm text-center !my-2'>Hey chief, welcome to iKart 🤗</p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="w-full flex flex-col md:flex-row gap-4">

                        <div className="w-full md:w-2/4">
                            <Input isRequired={true} placeholder='Enter your first name' type='text' id='firstName' labelText='First name' labelClass='!text-sm' onChange={(val) => setFirstName(val.target.value)} />
                        </div>

                        <div className="w-full md:w-2/4">
                            <Input isRequired={true} placeholder='Enter your last name' type='text' id='lastName' labelText='Last name' labelClass='!text-sm' onChange={(val) => setLastName(val.target.value)} />
                        </div>

                    </div>

                    <div className="w-full">
                        <Input isRequired={true} placeholder='Enter your email' type='email' id='email' labelText='Email' labelClass='!text-sm' onChange={(val) => setEmail(val.target.value)} />

                    </div>

                    <div className="w-full">
                        <label className={`text-sm font-medium leading-6 flex gap-1 text-black mt-4`}>
                            Phone number
                            <span className="text-red-500">*</span>
                        </label>

                        <div className="flex flex-row">

                            <div className="w-[15%">
                                <Dropdown options={options} isRequired={true} className='!rounded-tr-none !rounded-br-none' onChange={(val) => setPhoneNumberCode(val.target.value)} />
                            </div>

                            <div className="w-full">
                                <Input isRequired={true} placeholder='Enter your phone number' type='number' id='phoneNumber' onChange={(val) => setPhoneNumber(val.target.value)} inputClass='!rounded-tl-none !rounded-bl-none !border-l-0 ' />
                            </div>

                        </div>

                    </div>

                    <DateInput dateValue={dob} setDateValue={setDob} isRequired={true} labelText='Date of birth' />

                    <ShowHidePassword isRequired={true} placeholder='Enter your password' id='password' type={show ? 'text' : 'password'} showPassword={show} onToggle={handleTogglePassword} onChange={(val) => setPassword(val.target.value)} labelText='Password' labelClass='!text-sm' />

                    <Input isRequired={true} placeholder='Enter your confirm password' id='confirmPassword' type={'password'} onChange={(val) => setConfirmPassword(val.target.value)} labelText='Confirm password' labelClass='!text-sm' />

                    <div className="">
                        <CheckBox isChecked={isChecked} placeholder='Accept the policy to create your account' setIsChecked={setIsChecked} className='!w-[0.85rem]' />
                    </div>

                    <Button title='Login' styles='text-center w-full text-sm font-medium border-2 border-hunyadi_yellow-500 py-2 rounded-lg hover:text-hunyadi_yellow-500 text-white bg-hunyadi_yellow-500 hover:bg-transparent transition-all duration-300' type='submit' >Login</Button>

                </form>

                <div className="text-xs">
                    Already having an iKart account ? click here to <Link to='/signup' className='text-princeton_orange-600'> Login </Link>
                </div>

                <div className="flex items-center justify-between w-full">
                    <hr className="w-1/2 border-t border-gray-500" />
                    <div className="mx-4 text-gray-500">or</div>
                    <hr className="w-1/2 border-t border-gray-500 " />
                </div>


                <div className="w-full">
                    <Button title='google' styles='w-full font-medium border-2 border-gray-500 rounded-lg py-2 hover:bg-ash_gray hover:text-white hover:border-ash_gray' ><span className='flex flex-row justify-center gap-4 items-center '><RiGoogleFill className='w-6 h-8' /> <p>Sign up with google</p> </span></Button>
                </div>

            </div>
        </div>
    )
}

export default Signup