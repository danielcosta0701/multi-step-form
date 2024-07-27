import './App.scss';
import { useState } from 'react';
import Step1 from './form-steps/step1/Step1';
import Step2 from './form-steps/step2/Step2';
import Step3 from './form-steps/step3/Step3';
import { Box } from './components/Box/Box';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Container } from './components/Container/Container';
import { Stepper } from './components/Stepper/Stepper';
import logo from '../src/assets/logo.webp';
import carouselImage1 from '../src/assets/background.webp';
import carouselImage2 from '../src/assets/background.webp';
import carouselImage3 from '../src/assets/background.webp';

function App() {
  const [currentStep, setCurrentStep] = useState(2);

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
      title: "Valores",
      description: "Escolha o valor e a melhor opção para você.",
      content: <Step2 prevStep={prevStep} nextStep={nextStep} />
    },
    {
      title: "Sucesso",
      description: "Sua solicitação foi enviada.",
      content: <Step3 prevStep={prevStep} nextStep={nextStep} />
    }
  ];

  const carouselImages = [
    carouselImage1,
    carouselImage2,
    carouselImage3
  ];

  const backgroundImage = `url(${carouselImages[currentStep]})`;

  return (
    <div className="app-container">
      <Header logo={<img src={logo} alt="Logo" />} />

      <Container>
        <Container.Left style={{ backgroundImage }}>
          <></>
        </Container.Left>

        <Container.Right>
          <Box>
            <h3>
              {currentStep === 0
                ? "Solicitar crédito" 
                : currentStep === 1 
                ? "Escolha o valor" 
                : currentStep === 2
                ? "Agora falta pouco!" 
                : ""
              }
            </h3>
            <Stepper 
              currentStep={currentStep} 
              steps={steps.map(step => ({
                title: step.title,
                description: step.description
              }))} 
            />
            {steps[currentStep].content}
          </Box>
        </Container.Right>
      </Container>

      <Footer text="Desenvolvido por Daniel Costa" />
    </div>
  );
}

export default App;
