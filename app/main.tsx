import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './layout'
import Home from './page'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>,
)
