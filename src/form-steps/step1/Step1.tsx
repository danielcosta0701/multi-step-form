import React from 'react';
import { useForm } from "react-hook-form"
import { Input } from '../../components/forms/inputs/Input';
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/buttons/Button';
import { GENDERS_MOCK } from '../../mocks/mocks';
import { SubmitHandler } from 'react-hook-form';

interface FormStep1 {
    name: string,
    surname: string,
    phone: string,
    email: string,
    gender: number,
    document_cpf: string,
}

export default function Step1 (props: StepProps) {
    const { prevStep, nextStep } = props;
    const { formData, setFormData} = useMultiStepForm();
     
    const {
        register,
        reset,
        handleSubmit,
        // formState: {
        //     errors
        // }
    } = useForm<FormStep1>();

    const onSubmit: SubmitHandler<FormStep1> = (data) => {
        const obj = {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            document_cpf: data.document_cpf
        }
        
        setFormData((prevFormData: GeneralFormData) => ({...prevFormData, ...obj }));
        nextStep();
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        label="Nome"
                        type="text"
                        placeholder="Digite seu nome"
                        register={{...register("name", {required: true, minLength: 3, maxLength: 50})}}
                    />
                    <Input 
                        label="Sobrenome"
                        type="text"
                        placeholder="Digite seu sobrenome"
                        register={{...register("surname", {required: true, minLength: 3, maxLength: 50})}}
                    />
                    <Input 
                        label="Celular"
                        type="text"
                        placeholder="Digite seu celular"
                        register={{...register("phone", {required: true})}}
                    />
                    <Input 
                        label="E-mail"
                        type="email"
                        placeholder="Digite seu e-mail"
                        register={{...register("email", {required: true})}}
                    />
                    <Select 
                        label="Gênero"
                        options={GENDERS_MOCK}
                        placeholder="Escolha seu gênero"
                        register={{...register("gender", {required: true })}}
                    />
                    <Input 
                        label="CPF"
                        type="text"
                        placeholder="Digite seu CPF"
                        register={{...register("document_cpf", {required: true})}}
                    />

                    <Button onClick={() => reset()}>
                        <Button.Text>Limpar</Button.Text>
                    </Button>

                    <Button onClick={prevStep}>
                        <Button.Text>Anterior</Button.Text>
                    </Button>
                    
                    <Button type="submit">  
                        <Button.Text>Próximo</Button.Text>
                    </Button>
                </form>
            </div>
        </>
    );
};
