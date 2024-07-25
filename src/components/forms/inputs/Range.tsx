import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RangeProps {
    label: string;
    value?: number;
    min: number;
    max: number;
    step?: number;
    defaultValue?: number;
    register: UseFormRegisterReturn;
}

export const Range = (props: RangeProps) => {
    const {
        label,
        value,
        min,
        max,
        step = 1,
        register,
        defaultValue,
    } = props;

    const [currentValue, setCurrentValue] = useState(value ?? defaultValue ?? min);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = Number(event.target.value);
        setCurrentValue(value);
    };

    return (
        <div>
            <label>
                {label}
            </label>
            <input
                type="range"
                value={currentValue}
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue}
                {...register}
                onInput={handleInputChange}
            />
            <output>{currentValue}</output>
        </div>
    );
}
