import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Select.scss';

interface Option {
    id: number;
    value: number | string;
    label: string;
}

interface SelectProps {
    label: string;
    value?: number | string;
    placeholder: string;
    defaultValue: string | number | null;
    options: Option[];
    register: UseFormRegisterReturn;
    error?: FieldError;
    className?: string;
}

export const Select = (props: SelectProps) => {
    const { 
        label, 
        value,
        placeholder, 
        options,
        defaultValue,
        register,
        error,
        className
    } = props;

    return (
        <div className={`select-container ${error ? 'error' : ''} ${className}`}>
            <label>
                {label}
            </label>
            <select
                value={value}
                defaultValue={defaultValue || ''}
                {...register}
                className={error ? 'error' : ''}
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
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
}
