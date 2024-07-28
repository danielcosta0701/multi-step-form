import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Input.scss';
import ReactInputMask from 'react-input-mask';

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
        defaultValue = "",
        error,
        mask
    } = props;

    return (
        <div className={`input-container ${error ? 'error' : ''}`}>
            <label>
                {label}
            </label>
            {mask ? (
                <ReactInputMask
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue || ""}
                    {...register}
                    className={error ? "error" : ""}
                    mask={mask}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue || ""}
                    {...register}
                    className={error ? "error'" : ""}
                />
            )}
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
}
