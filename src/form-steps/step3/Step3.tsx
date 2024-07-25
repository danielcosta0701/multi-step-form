import React from 'react';

const Step3 = ({ prevStep, nextStep }) => {
  return (
    <>
      <div>
        <button onClick={prevStep}>Anterior</button>
        <p>step 3</p>
        <button onClick={nextStep}>Próximo</button>
      </div>
    </>
  );
};

export default Step3;
