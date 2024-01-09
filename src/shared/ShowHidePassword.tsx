import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import { InputType } from '../Types/default.types';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";


interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onToggle?: MouseEventHandler<SVGElement>;
    value?: string | number;
    labelText?: string;
    labelFor?: string;
    id: string | number;
    name?: string;
    type: InputType;
    isRequired: boolean;
    placeholder: string;
    inputClass?: string;
    labelClass?: string;
    error?: any;
    showPassword: boolean;
}

const ShowHidePassword: React.FC<InputProps> = ({
    onChange = () => { },
    onToggle,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired,
    placeholder,
    inputClass,
    labelClass,
    error,
    showPassword
}) => {

    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div className="w-full">
            <div className="flex justify-between">
                {labelText && (
                    <label htmlFor={labelFor} className={`text-sm sm:text-base font-medium leading-6 flex gap-1 text-black ${labelClass}`}>
                        {labelText}
                        {isRequired && <span className="text-red-500">*</span>}
                    </label>
                )}
                {error && (
                    <label htmlFor={labelFor} className={`block text-sm font-medium leading-6 text-red-500 ${labelClass}`}>
                        {error}
                    </label>
                )}
            </div>
            <div className={`mt-2 flex justify-evenly p-0 py-1 sm:p-2 px-2 rounded-md sm:rounded-lg border-2 border-gray-500 ${isInputFocused ? 'border-gray-950 ' : ''}`}>
                <input
                    type={type}
                    id={String(id)}
                    name={name}
                    value={value as string}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                    className={`w-full focus:outline-none ${inputClass}`}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
                <div className="pr-3 flex items-center cursor-pointer">
                    {showPassword ? (
                        <RiEyeFill onClick={onToggle} className="text-gray-500" />
                    ) : (
                        <RiEyeOffFill onClick={onToggle} className="text-gray-500" />
                    )}
                </div>


            </div>
        </div>
    );
};

export default ShowHidePassword;