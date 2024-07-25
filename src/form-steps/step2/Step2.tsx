import { useEffect, useState } from 'react';
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
  interest_rate: number | null;
  number_of_installments: number | null;
  total_value: number | string;
}

export default function Step2(props: StepProps) {
  const { prevStep, nextStep } = props;
  const { formData, setFormData } = useMultiStepForm();
  const [totalValue, setTotalValue] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);

  const { 
    register, 
    handleSubmit, 
    watch, 
    reset 
  } = useForm<FormStep2>();

  const loanAmount = parseFloat(watch('loan_amount'));
  const numberOfInstallments = parseFloat(watch('number_of_installments'));

  const onSubmit: SubmitHandler<FormStep2> = (data) => {
    const obj = {
      loan_amount: data.loan_amount,
      interest_rate: interestRate,
      number_of_installments: data.number_of_installments,
    };

    setFormData((prevFormData: GeneralFormData) => ({ ...prevFormData, ...obj }));
    nextStep();
  };

  useEffect(() => {
    const installment = INSTALLMENTS_MOCK.find(option => option.value === numberOfInstallments);
    
    if (installment) {
      setInterestRate(installment.interest);
      const total = loanAmount + (loanAmount * installment.interest / 100);
      setTotalValue(total.toFixed(2));
    } else {
      setInterestRate(0);
      setTotalValue(loanAmount.toFixed(2));
    }

  }, [loanAmount, numberOfInstallments]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            label="Número de parcelas"
            options={INSTALLMENTS_MOCK}
            placeholder="Escolha o número de parcelas"
            register={{ ...register("number_of_installments", { required: true }) }}
          />
          <Range
            label="Valor"
            defaultValue={0}
            min={0}
            max={100}
            step={10}
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

      <div>Total: R$ {totalValue}</div>
    </>
  );
}
