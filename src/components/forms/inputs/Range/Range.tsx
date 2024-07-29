import { useState } from 'react';
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
    className?: string;
    format?: boolean;
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
        className,
        format = false
    } = props;

    const [currentValue, setCurrentValue] = useState(value ?? defaultValue ?? min);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = Number(event.target.value);
        setCurrentValue(value);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const displayValue = format ? formatCurrency(currentValue) : currentValue;

    return (
        <div className={`range-container ${className}`}>
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
            <output>{displayValue}</output>
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
}
