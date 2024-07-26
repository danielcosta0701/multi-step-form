import React from 'react';
import './Stepper.scss';

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  currentStep: number;
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="stepper">
      <div className="stepper-titles">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index ? 'active' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            {currentStep === index && (
              <div className="step-details">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Stepper };
