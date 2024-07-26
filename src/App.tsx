import './App.scss';
import { useState } from 'react';
import Step1 from './form-steps/step1/Step1';
import Step2 from './form-steps/step2/Step2';
import Step3 from './form-steps/step3/Step3';
import { useMultiStepForm } from './contexts/MultiStepFormContext';
import { Box } from './components/Box/Box';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Container } from './components/Containers/Container/Container';
import { LeftContainer } from './components/Containers/LeftContainer/LeftContainer';
import { RightContainer } from './components/Containers/RightContainer/RightContainer';
import { Stepper } from './components/Stepper/Stepper'; // Importar o Stepper

function App() {
  const [currentStep, setCurrentStep] = useState(2);
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
    {
      title: "Dados Pessoais",
      description: "Preencha seus dados pessoais.",
      content: <Step1 prevStep={prevStep} nextStep={nextStep} />
    },
    {
      title: "Endereço",
      description: "Forneça o seu endereço.",
      content: <Step2 prevStep={prevStep} nextStep={nextStep} />
    },
    {
      title: "Confirmação",
      description: "Revise e confirme suas informações.",
      content: <Step3 prevStep={prevStep} nextStep={nextStep} />
    }
  ];

  const boxVariant = currentStep === steps.length - 1 ? "filled" : "outlined";

  return (
    <>
      <main>
        <Header logo={<img src="" alt="Logo" />} />

        <Container>
          <LeftContainer>
            left side
          </LeftContainer>

          <RightContainer>
            <Box variant={boxVariant}>
              <Stepper 
                currentStep={currentStep} 
                steps={steps.map(step => ({
                  title: step.title,
                  description: step.description
                }))} 
              />
              {steps[currentStep].content}
            </Box>
          </RightContainer>
        </Container>

        <Footer text="© 2024 My Website. All rights reserved." />
      </main>
    </>
  );
}

export default App;
