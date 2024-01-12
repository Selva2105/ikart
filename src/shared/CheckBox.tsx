import React from 'react';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  className?: string;
  id?: string;
  name?: string;
  placeholder: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  onChange,
  className,
  id,
  name,
  placeholder,
}) => {
  const onCheck = () => {
    onChange(!isChecked);
  };

  return (
    <div className="flex gap-2 h-6 items-center mt-4">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onCheck}
        className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer ${className}`}
      />
      <label htmlFor={id} className="text-[0.85rem] font-inter">
        {placeholder}
      </label>
    </div>
  );
};

export default CheckBox;
