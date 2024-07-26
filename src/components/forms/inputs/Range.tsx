import React, { useState } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Range.scss';

interface RangeProps {
    label: string;
    value?: number;
    min: number;
    max: number;
    step?: number;
    defaultValue?: number;
    register: UseFormRegisterReturn;
    error?: FieldError;
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
        error,
    } = props;

    const [currentValue, setCurrentValue] = useState(value ?? defaultValue ?? min);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = Number(event.target.value);
        setCurrentValue(value);
    };

    return (
        <div className="range-container">
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
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
}
