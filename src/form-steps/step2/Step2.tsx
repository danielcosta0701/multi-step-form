import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/buttons/Button';
import { Range } from '../../components/forms/inputs/Range';
import { INSTALLMENTS_MOCK } from '../../mocks/mocks';

interface FormStep2 {
  loan_amount: number;
  interest_rate: number | null; // Adjust type to number for interest_rate
  number_of_installments: number | null;
  total_value: string;
}

export default function Step2(props: StepProps) {
  const { prevStep, nextStep } = props;
  const { formData, setFormData } = useMultiStepForm();
  const [totalValue, setTotalValue] = useState<number | string>(0);
  const [interestRate, setInterestRate] = useState<number | null>(0);

  const {
    register,
    reset,
    handleSubmit,
    getValues,
  } = useForm<FormStep2>();

  const handleTotalValueChange = () => {
    const numberOfInstallments = getValues('number_of_installments');

    let interest = 0;
    switch (numberOfInstallments) {
      case 1:
        interest = 10;
        break;
      case 2:
        interest = 15;
        break;
      case 3:
        interest = 20;
        break;
      case 4:
        interest = 25;
        break;
      case 5:
        interest = 30;
        break;
      case 6:
        interest = 35;
        break;
      case 7:
        interest = 40;
        break;
      case 8:
        interest = 45;
        break;
      case 9:
        interest = 50;
        break;
      case 10:
        interest = 55;
        break;
      case 11:
        interest = 57.5;
        break;
      case 12:
        interest = 60;
        break;
      default:
        interest = 0;
        break;
    }

    setInterestRate(interest);

    const loanAmount = getValues('loan_amount');
    const total = loanAmount + (loanAmount * interest / 100);
    setTotalValue(total);
  };

  const onSubmit: SubmitHandler<FormStep2> = (data) => {
    const obj = {
      loan_amount: data.loan_amount,
      interest_rate: interestRate,
      number_of_installments: data.number_of_installments,
    };

    setFormData((prevFormData: GeneralFormData) => ({ ...prevFormData, ...obj }));
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
            onChange={handleTotalValueChange}
            register={{ ...register("number_of_installments", { required: true }) }}
          />
          <Range
            label="Valor"
            min={100}
            max={1000}
            step={100}
            onInput={(handleTotalValueChange)}
            register={{ ...register("loan_amount", { required: true }) }}
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

      <div>{totalValue}</div>
    </>
  );
}
