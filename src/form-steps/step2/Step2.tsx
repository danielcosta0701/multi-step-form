import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../../components/forms/inputs/Select';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/buttons/Button';
import { Range } from '../../components/forms/inputs/Range';
import { INSTALLMENTS_MOCK } from '../../mocks/mocks';
import { showInstallmentsTableModal } from '../../utils/InstallmentsTableModal';
import { showSuccessToast } from '../../utils/ToastSucess';

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
    reset,
    formState: { errors, isValid }, // Obter erros e validade do formulário
  } = useForm<FormStep2>({ mode: 'onChange' }); // Modo 'onChange' para validar conforme o usuário preenche

  const loanAmount = parseFloat(watch('loan_amount', '0')); // Default para '0'
  const numberOfInstallments = parseFloat(watch('number_of_installments', '0')); // Default para '0'

  const onSubmit: SubmitHandler<FormStep2> = (data) => {
    const obj = {
      loan_amount: data.loan_amount,
      interest_rate: interestRate,
      number_of_installments: data.number_of_installments,
    };

    setFormData((prevFormData: GeneralFormData) => ({ ...prevFormData, ...obj }));
    showSuccessToast('Operação realizada com sucesso!');
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
            defaultValue={formData.number_of_installments}
            register={register("number_of_installments", { required: "Número de parcelas é obrigatório." })}
            error={errors.number_of_installments} // Passar erro para o Select
          />
          <Range
            label="Valor"
            defaultValue={formData.loan_amount || 0}
            min={0}
            max={100}
            step={10}
            register={register("loan_amount", { required: "Valor é obrigatório." })}
            error={errors.loan_amount} // Passar erro para o Range
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

        <div>Total: R$ {totalValue}</div>
      </div>
    </>
  );
}
