import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Input.scss';

interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    defaultValue?: string | null;
    error?: FieldError;
    mask?: string;
}

export const Input = (props: InputProps) => {
    const { 
        label, 
        type = "text", 
        placeholder,
        register,
        defaultValue = '',
        error,
    } = props;

    return (
        <div className={`input-container ${error ? 'error' : ''}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue || ''}
                {...register}
                className={error ? 'error' : ''}
            />
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
}
