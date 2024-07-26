import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/Button/Button';
import { Range } from '../../components/forms/inputs/Range/Range';
import { Select } from '../../components/forms/inputs/Select/Select';
import { INSTALLMENTS_MOCK } from '../../mocks/mocks';
import { showInstallmentsTableModal } from '../../utils/InstallmentsTableModal';
import { showSuccessToast } from '../../utils/ToastSucess';

interface FormStep2 {
  loan_amount: number | string | null;
  interest_rate: number | null;
  number_of_installments: number | string | null;
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
    reset,
    formState: { errors, isValid }, 
  } = useForm<FormStep2>({ mode: 'onChange' }); 

  const loanAmount = parseFloat(watch('loan_amount') as string);
  const numberOfInstallments = parseFloat(watch('number_of_installments') as string);

  const onSubmit: SubmitHandler<FormStep2> = (data) => {
    const obj = {
      loan_amount: data.loan_amount,
      interest_rate: interestRate,
      number_of_installments: data.number_of_installments,
    };

    setFormData((prevFormData: GeneralFormData) => ({ ...prevFormData, ...obj }));
    showSuccessToast('Valores enviados');
    nextStep();
  };

  useEffect(() => {
    const installment = INSTALLMENTS_MOCK.find(option => option.value === numberOfInstallments);
    
    if (installment) {
      setInterestRate(installment.interest);
      const total = loanAmount + (loanAmount * installment.interest / 100);
      setTotalValue(total);
    } else {
      setInterestRate(0);
      setTotalValue(loanAmount);
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
            defaultValue={formData.number_of_installments}
            register={register("number_of_installments", { required: "Número de parcelas é obrigatório." })}
            error={errors.number_of_installments}
          />
          <Range
            label="Valor"
            defaultValue={formData.loan_amount || 0}
            min={0}
            max={100}
            step={10}
            register={register("loan_amount", { required: "Valor é obrigatório." })}
            error={errors.loan_amount}
          />
          
          <Button onClick={() => reset()} variant="outlined">
            <Button.Text>Limpar</Button.Text>
          </Button>

          <Button onClick={prevStep} variant="outlined">
            <Button.Text>Anterior</Button.Text>
          </Button>

          <Button type="submit" disabled={!isValid}>
            <Button.Text>Próximo</Button.Text>
          </Button>

          <Button onClick={showInstallmentsTableModal} variant="outlined">
            <Button.Text>Apresentar Tabela de Juros</Button.Text>
          </Button>
        </form>

        <div>Total: R$ {totalValue.toFixed(2)}</div>
      </div>
    </>
  );
}
