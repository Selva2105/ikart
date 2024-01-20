import axios from 'axios';
import React, { useState } from 'react'
import Input from '../../shared/inputs/Input';
import ShowHidePassword from '../../shared/inputs/ShowHidePassword';
import Button from '../../shared/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import Dropdown from '../../shared/inputs/DropDown';
import DateInput from '../../shared/inputs/DateInput';
import CheckBox from '../../shared/inputs/CheckBox';
import { useForm, Controller } from 'react-hook-form';
import Loader from '../../shared/Loader';
import { toast } from 'react-toastify';
import ImageInput from '../../shared/inputs/imageInput';


const Signup = () => {

    const { handleSubmit, control, formState: { errors } } = useForm();
    const [error, setError] = useState<string>('');
    const [res, setRes] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const options = ['+91', '+94', '+977'];

    const handleTogglePassword = () => {
        setShow((prev) => !prev);
    };

    const url = process.env.REACT_APP_API_URL;

    const navigate = useNavigate()


    const onSubmit = async (data: any) => {

        try {
            setLoading(true);

            // Convert data object to FormData
            const formData = new FormData();
            formData.append('userName', data.firstName + " " + data.lastName);
            formData.append('email', data.email);
            formData.append('phoneNumber[CountryCode]', data.phoneNumberCode);
            formData.append('phoneNumber[Number]', data.phoneNumber);
            formData.append('dob', data.dob.startDate);
            formData.append('password', data.password);
            formData.append('confirmPassword', data.confirmPassword);
            formData.append('policyStatus', data.isChecked);

            // Append profileImage if available
            if (data.profileImage) {
                formData.append('profileImage', data.profileImage);
            }

            const response = await axios.post(`${url}api/v1/user`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', data.email);
                toast(`${response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            setRes('User created. Go to your email and verify to enjoy all features');

            setTimeout(() => {
                navigate('/');
            }, 6000);
        } catch (error) {
            setLoading(false);
            if (axios.isAxiosError(error) && error.response) {
                // Axios error with response
                setError(error.response.data.message);
            } else {
                // Non-Axios error or no response property
                setError("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter mt-20">
            <div className="max-w-5xl w-full p-6 space-y-6 bg-white rounded-lg border-2 border-gray-500">
                <h2 className="text-xl font-bold text-center text-gray-900">Sign up</h2>
                <p className='text-sm text-center !my-2'>Hey chief, welcome to iKart 🤗</p>

                <p className='text-sm text-center !my-2 text-red-500'>{error}</p>
                {res && <p className='text-sm text-center !my-2 text-white bg-green-500 hover:bg-green-300 py-2 rounded-lg'>{res}</p>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">

                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-[80%] flex flex-col md:flex-row gap-4">

                            <div className="w-full md:w-2/4 ">

                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Email is required' }}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            placeholder='Enter your first name'
                                            type='text'
                                            id='firstName'
                                            labelText='First name'
                                            labelClass='!text-sm'
                                            onChange={field.onChange}
                                            value={field.value}
                                            error={errors.firstName?.message}
                                        />
                                    )}
                                />

                            </div>

                            <div className="w-full md:w-2/4">

                                <Controller
                                    name="lastName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Email is required' }}
                                    render={({ field }) => (
                                        <Input
                                            isRequired={true}
                                            placeholder='Enter your last name'
                                            type='text'
                                            id='lastName'
                                            labelText='Last name'
                                            labelClass='!text-sm'
                                            onChange={field.onChange}
                                            value={field.value}
                                            error={errors.lastName?.message}
                                        />
                                    )}
                                />

                            </div>

                        </div>

                        <div className="w-full md:w-2/4">

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Email is required' }}
                                render={({ field }) => (
                                    <Input
                                        isRequired={true}
                                        placeholder='Enter your email'
                                        type='email'
                                        id='email'
                                        labelText='Email'
                                        labelClass='!text-sm'
                                        onChange={field.onChange}
                                        value={field.value}
                                        error={errors.email?.message}
                                    />
                                )}
                            />

                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-4 items-end">

                        <div className="w-full md:w-2/4">
                            <label className={`text-sm font-medium leading-6 flex gap-1 text-black mt-4`}>
                                Phone number
                                <span className="text-red-500">*</span>
                            </label>

                            <div className="flex flex-row items-end">

                                <div className="">

                                    <Controller
                                        name="phoneNumberCode"
                                        control={control}
                                        defaultValue="+91"
                                        render={({ field }) => (
                                            <Dropdown
                                                isRequired={true}
                                                options={options}
                                                className='!rounded-tr-none !rounded-br-none'
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                </div>

                                <div className="w-full">

                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Phone number is required' }}
                                        render={({ field }) => (
                                            <Input
                                                isRequired={true}
                                                placeholder='Enter your phone number'
                                                type='number'
                                                id='phoneNumber'
                                                inputClass='!rounded-tl-none !rounded-bl-none !border-l-0 '
                                                onChange={field.onChange}
                                                value={field.value}
                                                error={errors.phoneNumber?.message}
                                            />
                                        )}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="w-full md:w-2/4">
                            <Controller
                                name="dob"
                                control={control}
                                defaultValue={{ startDate: null, endDate: null }}
                                rules={{ required: 'DOB is required' }}
                                render={({ field }) => (
                                    <DateInput
                                        dateValue={field.value}
                                        setDateValue={(value) => field.onChange(value)}
                                        labelText="Date of birth"
                                        labelFor="dob"
                                        labelClass="!text-sm"
                                        error={errors.dob?.message}
                                        isRequired={true}
                                        showShortCuts={false}
                                    />
                                )}
                            />
                        </div>

                    </div>

                    <Controller
                        name="profileImage"
                        control={control}
                        defaultValue={null}
                        render={({ field }) => (
                            <ImageInput
                                onFileChange={(file) => field.onChange(file)}
                                label="Profile Image"
                                selectedFile={field.value}
                                isRequired={true}
                            />
                        )}
                    />

                    <div className="w-full flex flex-col md:flex-row gap-4 items-end">
                        <div className="w-full md:w-2/4">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Password is required' }}
                                render={({ field }) => (
                                    <ShowHidePassword
                                        isRequired={true}
                                        placeholder='Enter your password'
                                        id='password'
                                        type={show ? 'text' : 'password'}
                                        showPassword={show}
                                        onToggle={handleTogglePassword}
                                        labelText='Password'
                                        labelClass='!text-sm'
                                        onChange={field.onChange}
                                        value={field.value}
                                        error={errors.password?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className="w-full md:w-2/4">
                            <Controller
                                name="confirmPassword"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Confirm Password is required' }}
                                render={({ field }) => (
                                    <Input
                                        isRequired={true}
                                        placeholder='Enter your confirm password'
                                        id='confirmPassword'
                                        type={'password'}
                                        onChange={field.onChange}
                                        value={field.value}
                                        error={errors.confirmPassword?.message}
                                        labelText='Confirm password'
                                        labelClass='!text-sm'
                                    />

                                )}
                            />
                        </div>
                    </div>

                    <div className="">
                        <Controller
                            name="isChecked"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <CheckBox
                                    isChecked={field.value}
                                    onChange={field.onChange}
                                    placeholder='Accept the policy to create your account'
                                    className='!w-[0.85rem]'
                                />

                            )}
                        />

                    </div>

                    <Button title='Login' styles={`text-center w-full text-sm font-medium border-2 border-hunyadi_yellow-500 py-2 rounded-lg hover:text-hunyadi_yellow-500 text-white bg-hunyadi_yellow-500 hover:bg-transparent transition-all duration-300 ${loading ? 'hover:!bg-hunyadi_yellow-500' : ""}`} type='submit' >{loading ? <Loader color='white' className='!h-6 !w-6' /> : 'Sign up'}</Button>

                </form>

                <div className="text-xs">
                    Already having an iKart account ? click here to <Link to='/signup' className='text-princeton_orange-600'> Sign in </Link>
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