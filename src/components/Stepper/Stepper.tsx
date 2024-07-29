import './Stepper.scss';

interface Step {
  title: string;
}

interface StepperProps {
  currentStep: number;
  steps: Step[];
}

const Stepper = (props: StepperProps) => {
  const { currentStep, steps } = props;

  const progressWidth = `${(currentStep / (steps.length - 1)) * 100}%`;

  return (
    <div className="stepper">
      <div className="stepper-line" />
      <div className="stepper-progress" style={{ width: progressWidth }} />
      <div className="stepper-titles">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep >= index ? 'active' : ''}`}
          >
            <div className="step-details">
              <h3>{`${index + 1}. ${step.title}`}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Stepper };
