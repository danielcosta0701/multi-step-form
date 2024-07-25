import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
    id: number,
    value: number | string;
    label: string;
}

interface SelectProps {
    label: string,
    value?: number | string,
    placeholder: string,
    options: Option[],
    register: UseFormRegisterReturn,
    onInput?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select = (props: SelectProps) => {
    const { 
        label, 
        value,
        placeholder, 
        options,
        register,
        onInput
    } = props;

    return (
        <div>
            <label>
                {label}
            </label>
            <select
                value={value}
                defaultValue=""
                {...register}
                onInput={onInput}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                
                {options && options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
