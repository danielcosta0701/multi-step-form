import React from 'react';
import { useForm } from "react-hook-form"
import { Input } from '../../components/forms/inputs/Input';
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/Types';

// interface FormStep1 {
//     name: string,
//     surname: string,
//     phone: string,
//     email: string,
//     gender: number,
//     document_cpf: string,
// }

const Step1 = (props: StepProps) => {
    const { prevStep, nextStep } = props;
    
    // const {
    //     register,
    //     reset,
    //     setValue,
    //     handleSubmit,
    //     formState: {
    //         errors
    //     }
    // } = useForm<FormStep1>();

    // const onSubmit = () => {

    // };

    return (
        <>
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" />

                <input type="text" />
            </form> */}

            <button onClick={prevStep}>Anterior</button>
            <p>step 1</p>
            <button onClick={nextStep}>Próximo</button>
        </div>
        </>
    );
};

export default Step1;
