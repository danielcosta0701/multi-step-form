import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/buttons/Button';
import { Range } from '../../components/forms/inputs/Range';
import { INSTALLMENTS_MOCK } from '../../mocks/mocks';

interface FormStep2 {
  loan_amount: null,
  interest_rate: null,
  number_of_installments: null,
}

export default function Step2 (props: StepProps) {
    const { prevStep, nextStep } = props;
    const { formData, setFormData} = useMultiStepForm();
     
    const {
        register,
        reset,
        handleSubmit,
        // formState: {
        //     errors
        // }
    } = useForm<FormStep2>();

    const onSubmit: SubmitHandler<FormStep2> = (data) => {
        const obj = {
          loan_amount: data.loan_amount,
          interest_rate: data.interest_rate,
          number_of_installments: data.number_of_installments,
        }
        
        setFormData((prevFormData: GeneralFormData) => ({...prevFormData, ...obj }));
        nextStep();
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>    
                    <Select 
                        label="Número de parcelas"
                        options={INSTALLMENTS_MOCK}
                        placeholder="Escolha o número de parcelas"
                        register={{...register("number_of_installments", {required: true })}}
                    />
                    <Range 
                      label="Valor"
                      min={100}
                      max={20000}
                      step={100}
                      register={{...register("loan_amount", {required: true })}}
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
