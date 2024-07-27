import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { Button } from '../../components/Button/Button';
import './Step3.scss';

export default function Step3(props: StepProps) {
    const { prevStep } = props;
    const { formData } = useMultiStepForm();

    const {
        name,
        surname,
        phone,
        email,
        gender,
        document_cpf,
        loan_amount,
        interest_rate,
        number_of_installments
    } = formData;

    return (
        <div className="step3-container">
            <div className="thank-you-message">
                <p>
                    Recebemos suas informações e estamos analisando sua solicitação.
                    Nossa equipe entrará em contato com você em breve para fornecer mais detalhes.
                </p>
            </div>
            <div className="request-data">
                <h5>Dados da Solicitação</h5>
                <div className="data-list-container">
                    <ul className="data-list">
                        <li><strong>Nome:</strong> {name ?? 'Não informado'}</li>
                        <li><strong>Sobrenome:</strong> {surname ?? 'Não informado'}</li>
                        <li><strong>Telefone:</strong> {phone ?? 'Não informado'}</li>
                        <li><strong>Email:</strong> {email ?? 'Não informado'}</li>
                        <li><strong>Gênero:</strong> {gender ?? 'Não informado'}</li>
                        <li><strong>CPF:</strong> {document_cpf ?? 'Não informado'}</li>
                        <li><strong>Valor do Empréstimo:</strong> {loan_amount ?? 'Não informado'}</li>
                        <li><strong>Taxa de Juros:</strong> {interest_rate ?? 'Não informado'}</li>
                        <li><strong>Número de Parcelas:</strong> {number_of_installments ?? 'Não informado'}</li>
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
