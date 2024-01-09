import React, { forwardRef, ForwardedRef } from 'react';

interface CheckBoxProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    name?: string;
    id?: string;
    placeholder: string;
}

const CheckBox: React.ForwardRefRenderFunction<HTMLInputElement, CheckBoxProps> = (
    { isChecked, setIsChecked, className, id, name, placeholder },
    ref: ForwardedRef<HTMLInputElement>
) => {

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className="flex gap-2 h-6 items-center mt-4">
            <input
                ref={ref}
                id={id}
                name={name}
                type="checkbox"
                checked={isChecked || false} 
                onChange={onCheck}
                className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer ${className}`}
            />
            <p className='text-[0.85rem] font-inter'>{placeholder}</p>
        </div>
    );
};

export default forwardRef(CheckBox);
