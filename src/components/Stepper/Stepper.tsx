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

  return (
    <div className="stepper">
      <div className="stepper-titles">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index ? 'active' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-details">
              <h3>{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Stepper };
