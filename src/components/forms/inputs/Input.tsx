import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Input.scss'; // Importar o arquivo de estilos

interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    defaultValue?: string | null; // Adicionar defaultValue como opcional
    error?: FieldError; // Adicionar a propriedade de erro
}

export const Input = (props: InputProps) => {
    const { 
        label, 
        type = "text", 
        placeholder,
        register,
        defaultValue = '', // Definir um valor padrão para defaultValue
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
            {error && <p className="error-message">{error.message}</p>} {/* Exibir a mensagem de erro */}
        </div>
    );
}
