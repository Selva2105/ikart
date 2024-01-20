import React, { useState, ChangeEvent, forwardRef, ForwardedRef } from 'react';

interface DropdownProps {
  options: string[];
  labelText?: string;
  labelFor?: string;
  isRequired: boolean;
  labelClass?: string;
  error?: any;
  className?: string;
  dropDownClass?: string;
  onChange?: (event: ChangeEvent<HTMLButtonElement>) => void;
}

const Dropdown: React.ForwardRefRenderFunction<HTMLButtonElement, DropdownProps> = (
  {
    options,
    labelFor,
    labelText,
    isRequired,
    error,
    labelClass,
    className,
    dropDownClass,
    onChange = () => {},
  },
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('+91');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange({
      target: {
        value: option,
        name: labelFor,
      },
    } as ChangeEvent<HTMLButtonElement>);
  };

  return (
    <div className="relative inline-block text-start w-full space-y-2">
      <div className="flex justify-between">
        {labelText && (
          <label
            htmlFor={labelFor}
            className={`text-sm sm:text-base font-medium leading-6 flex gap-1 text-black ${labelClass}`}
          >
            {labelText}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
        )}
        {error && (
          <label
            htmlFor={labelFor}
            className={`block text-sm font-medium leading-6 text-red-500 ${labelClass}`}
          >
            {error}
          </label>
        )}
      </div>
      <div>
        <button
          ref={ref}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex justify-start w-full rounded-md border-2 border-gray-500 focus:outline-gray-950 shadow-sm px-4 py-2 bg-white text-sm ${className}`}
        >
          {selectedOption}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${dropDownClass}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Dropdown);
