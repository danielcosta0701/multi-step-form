import React from 'react';
import InputMask from 'react-input-mask';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import './Input.scss';

interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  defaultValue?: string | null;
  error?: FieldError;
  mask?: string; // Adiciona a propriedade mask
}

export const Input = (props: InputProps) => {
  const { 
    label, 
    type = "text", 
    placeholder,
    register,
    defaultValue = '',
    error,
    mask, // Desestrutura a nova propriedade mask
  } = props;

  const InputElement = mask ? (
    <InputMask
      mask={mask}
      defaultValue={defaultValue || ''}
      {...register}
      className={error ? 'error' : ''}
    >
      {(inputProps) => <input type={type} placeholder={placeholder} {...inputProps} />}
    </InputMask>
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue || ''}
      {...register}
      className={error ? 'error' : ''}
    />
  );

  return (
    <div className={`input-container ${error ? 'error' : ''}`}>
      <label>
        {label}
      </label>
      {InputElement}
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}
