import React from 'react'
import ReactDOM from 'react-dom/client'
import MultiStepFormProvider from './contexts/MultiStepFormContext.tsx'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MultiStepFormProvider>
      <App />
    </MultiStepFormProvider>
  </React.StrictMode>,
)
