import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NavigationProvider from './context/NavigationProvider.tsx'
import LanguageProvider from './context/LanguageProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
