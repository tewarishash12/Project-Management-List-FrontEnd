import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedValues, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionChange = (e) => {
        const value = e.target.value;
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter(item => item !== value)
            : [...selectedValues, value];
        onChange(newSelectedValues);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="border p-2 w-full text-left"
            >
                {selectedValues.length ? `${selectedValues.length} selected` : 'Select Team Members'}
            </button>
            {isOpen && (
                <div className="absolute border bg-white w-full mt-1 z-10">
                    {options.map(option => (
                        <label key={option._id} className="block p-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value={option._id}
                                checked={selectedValues.includes(option._id)}
                                onChange={handleOptionChange}
                                className="mr-2"
                            />
                            {option.username}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
