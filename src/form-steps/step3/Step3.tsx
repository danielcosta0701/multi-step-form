import { StepProps } from '../../types/StepTypes';
import { Button } from '../../components/Button/Button';
import './Step3.scss';

export default function Step3(props: StepProps) {
    const { prevStep } = props;

    return (
        <div className="step3-container">
            <div className="thank-you-message">
                <p>
                    Recebemos suas informações e estamos analisando sua solicitação. <br/>
                    Nossa equipe entrará em contato com você em breve para fornecer mais detalhes.
                </p>
            </div>
            <div className="button-container">
                <Button onClick={prevStep} variant="outlined">
                    <Button.Text>Anterior</Button.Text>
                </Button>
            </div>
        </div>
    );
}
