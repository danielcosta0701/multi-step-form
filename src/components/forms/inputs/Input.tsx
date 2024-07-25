import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
    label: string,
    type?: string,
    placeholder: string,
    register: UseFormRegisterReturn,
}

export const Input = (props: InputProps) => {
    const { 
        label, 
        type = "text", 
        placeholder,
        register,
    } = props;

    return (
        <div>
            <label>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
}
