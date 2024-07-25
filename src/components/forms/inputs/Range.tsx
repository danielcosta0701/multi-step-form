import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RangeProps {
    label: string;
    value?: number;
    min: number;
    max: number;
    step?: number;
    defaultValue?: number;
    register: UseFormRegisterReturn;
    onInput?: React.ChangeEventHandler<HTMLInputElement>;
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
        onInput,
    } = props;

    return (
        <div>
            <label>
                {label}
            </label>
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue}
                {...register}
                onInput={onInput}
            />
            <output>{value}</output>
        </div>
    );
}
