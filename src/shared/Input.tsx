import React, { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import { InputType } from '../Types/default.types';

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
  rows?: number;
  error?: any;
}

const Input: React.FC<InputProps> = forwardRef(
  (
    {
      onChange = () => { },
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
      rows,
      error,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return (
      <div className="w-full">
        <div className={`flex  ${labelText ? "justify-between" : " justify-end"}`}>
          {labelText && (
            <label
              htmlFor={labelFor}
              className={`text-sm font-medium leading-6 flex gap-1 text-black ${labelClass}`}
            >
              {labelText}
              {isRequired && <span className="text-red-500">*</span>}
            </label>
          )}
          {error && (
            <label htmlFor={labelFor} className={`error block text-sm font-medium leading-6 text-red-500 ${labelClass}`}>
              {error}
            </label>
          )}
        </div>
        <div className="mt-2">
          {type === 'textarea' ? (
            <textarea
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              id={String(id)}
              name={name}
              value={value as string}
              onChange={(e) => onChange(e)}
              rows={rows}
              placeholder={placeholder}
              className={`block w-full p-2 rounded-lg border-2 border-gray-500 focus:outline-gray-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 placeholder:text-base ${inputClass}`}
            />
          ) : (
            <input
              ref={ref as ForwardedRef<HTMLInputElement>}
              type={type}
              id={String(id)}
              name={name}
              value={value as string}
              onChange={(e) => onChange(e)}
              placeholder={placeholder}
              className={`w-full p-2 rounded-md sm:rounded-lg border-2 border-gray-500 focus:outline-gray-950 ${inputClass}`}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Input;
