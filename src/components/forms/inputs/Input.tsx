import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Input.scss'; // Importar o arquivo de estilos

interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError; // Adicionar a propriedade de erro
}

export const Input = (props: InputProps) => {
    const { 
        label, 
        type = "text", 
        placeholder,
        register,
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
                {...register}
            />
            {error && <p className="error-message">{error.message}</p>} {/* Exibir a mensagem de erro */}
        </div>
    );
}
