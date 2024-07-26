import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { Button } from '../../components/Buttons/Button';
import './Step3.scss'; // Importando o SCSS para estilizar o componente

export default function Step3(props: StepProps) {
    const { prevStep } = props;
    const { formData } = useMultiStepForm(); // Embora não seja usado aqui, pode ser útil para debug ou verificação

    return (
        <div className="step3-content">
            <h1>Obrigado!</h1>
            <p>
                Recebemos suas informações e estamos analisando sua solicitação.
                Nossa equipe entrará em contato com você em breve para fornecer mais detalhes.
            </p>
            <Button onClick={prevStep}>
                <Button.Text>Anterior</Button.Text>
            </Button>
        </div>
    );
}
