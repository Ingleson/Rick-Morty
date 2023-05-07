import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GeneralProvider from './context/GeneralContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
)
