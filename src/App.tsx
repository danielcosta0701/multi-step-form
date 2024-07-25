import './App.scss';
import { useState } from 'react';
import Step1 from './form-steps/step1/Step1';
import Step2 from './form-steps/step2/Step2';
import Step3 from './form-steps/step3/Step3';
import { useMultiStepForm } from './contexts/MultiStepFormContext';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useMultiStepForm();

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const steps = [
    <Step1 
      key="step1" 
      prevStep={prevStep}
      nextStep={nextStep}
    />,
    <Step2 
      key="step2" 
      prevStep={prevStep}
      nextStep={nextStep}
    />,
    <Step3 
      key="step3" 
      prevStep={prevStep}
      nextStep={nextStep}
    />
  ];

  return (
    <>
      <div>
        {steps[currentStep]}
      </div>
    </>
  );
}

export default App;
