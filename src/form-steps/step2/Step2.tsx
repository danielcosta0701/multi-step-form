import React from 'react';
import { Input } from '../../components/forms/inputs/Input';
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { useForm } from "react-hook-form"
import { StepProps } from '../../types/Types';

// interface FormStep2 {
//   loanAmount: number;
//   interestRate: number;
//   numberOfInstallments: number;
// }

const Step2 = (props: StepProps) => {
  const { prevStep, nextStep } = props;
  const { formData, setFormData} = useMultiStepForm();

  // const {
  //   register,
  //   reset,
  //   setValue,
  //   handleSubmit,
  //   formState: { 
  //     errors 
  //   }
  // } = useForm<FormStep2>();

  // const onSubmit = () => {

  // };

  return (
    <>
      <div>
        <button onClick={prevStep}>Anterior</button>
        <p>step 2</p>
        <button onClick={nextStep}>Próximo</button>
      </div>
    </>
  );
};

export default Step2;
