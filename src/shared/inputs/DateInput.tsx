import React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

interface DateInputProps {
    dateValue: {
        startDate: Date | null;
        endDate: Date | null;
    };
    setDateValue: React.Dispatch<React.SetStateAction<{
        startDate: Date | null;
        endDate: Date | null;
    }>>;
    labelText?: string;
    labelFor?: string;
    labelClass?: string;
    error?: any;
    isRequired: boolean;
    showShortCuts?: boolean;

}

const DateInput: React.FC<DateInputProps> = ({ dateValue, setDateValue, labelFor, labelText, error, labelClass, isRequired, showShortCuts = false }) => {

    const handleValueChange = (newValue: any) => {
        setDateValue(newValue);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between">
                {labelText && (
                    <label htmlFor={labelFor} className={`text-sm font-medium leading-6 flex gap-1 text-black ${labelClass}`}>
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
            <Datepicker
                value={dateValue}
                onChange={handleValueChange}
                useRange={false}
                asSingle={true}
                placeholder='Enter your date of birth'
                startFrom={new Date()}
                showShortcuts={showShortCuts}
                showFooter={true}
                containerClassName="relative mt-2 border-2 border-gray-500 focus:outline-gray-950 rounded-lg px-4 py-2"
                primaryColor={"amber"}
                toggleClassName="absolute top-0 bg-hunyadi_yellow-500 rounded-r-md text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                inputClassName={"!p-0 focus:outline-none"}
                popoverDirection={'down'}
            />
        </div>
    )
}

export default DateInput;