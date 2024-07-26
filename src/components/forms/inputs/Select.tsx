import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Select.scss'; // Importar o arquivo de estilos

interface Option {
    id: number;
    value: number | string;
    label: string;
}

interface SelectProps {
    label: string;
    value?: number | string;
    placeholder: string;
    options: Option[];
    register: UseFormRegisterReturn;
    error?: FieldError; // Adicionar a propriedade de erro
}

export const Select = (props: SelectProps) => {
    const { 
        label, 
        value,
        placeholder, 
        options,
        register,
        error
    } = props;

    return (
        <div className={`select-container ${error ? 'error' : ''}`}>
            <label>
                {label}
            </label>
            <select
                value={value}
                defaultValue=""
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
            {error && <p className="error-message">{error.message}</p>} {/* Exibir a mensagem de erro */}
        </div>
    );
}
