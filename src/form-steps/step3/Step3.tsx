import { StepProps } from '../../types/StepTypes';
import { Button } from '../../components/Button/Button';
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import './Step3.scss';

export default function Step3(props: StepProps) {
    const { prevStep } = props;
    const { formData } = useMultiStepForm();

    const formatCurrency = (value: number | null | string) => {
        const numericValue = typeof value === 'string' ? parseFloat(value) : value;
        return numericValue || numericValue === 0
            ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numericValue)
            : 'Não informado';
    };

    const formatGender = (gender: number | null) => {
        switch (gender) {
            case 1:
                return 'Masculino';
            case 2:
                return 'Feminino';
            case 3:
                return 'Não especificado';
            default:
                return 'Não informado';
        }
    };

    return (
        <div className="step3-container">
            <div className="thank-you-message">
                <p>
                    Recebemos suas informações e estamos analisando sua solicitação. <br />
                    Nossa equipe entrará em contato com você em breve para fornecer mais detalhes.
                </p>
            </div>
            <div className="request-data">
                <h2>Dados da Solicitação</h2>
                <div className="data-list-container">
                    <ul className="data-list">
                        <li><strong>Nome:</strong> {formData.name ?? 'Não informado'}</li>
                        <li><strong>Sobrenome:</strong> {formData.surname ?? 'Não informado'}</li>
                        <li><strong>Telefone:</strong> {formData.phone ?? 'Não informado'}</li>
                        <li><strong>Email:</strong> {formData.email ?? 'Não informado'}</li>
                        <li><strong>Gênero:</strong> {formatGender(formData.gender)}</li>
                        <li><strong>Número de Parcelas:</strong> {formData.number_of_installments ?? 'Não informado'}</li>
                        <li><strong>Taxa de Juros:</strong> {`${formData.interest_rate ?? 'Não informado'}%`}</li>
                        <li><strong>CPF:</strong> {formData.document_cpf ?? 'Não informado'}</li>
                        <li><strong>Valor do Empréstimo:</strong> {formatCurrency(formData.loan_amount)}</li>
                        <li><strong>Total a pagar:</strong> {formatCurrency(formData.total_value)}</li>
                    </ul>
                </div>
            </div>
            <div className="button-container">
                <Button onClick={prevStep} variant="outlined">
                    <Button.Text>Anterior</Button.Text>
                </Button>
            </div>
        </div>
    );
}
