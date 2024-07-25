import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MultiStepFormProvider from './contexts/MultiStepFormContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MultiStepFormProvider>
      <App />
    </MultiStepFormProvider>
  </React.StrictMode>,
)
