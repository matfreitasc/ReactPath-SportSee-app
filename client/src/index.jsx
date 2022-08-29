import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ThemeProvider } from './context/ThemeContext'
import './styles/index.css'
import { Route, Routes, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </ThemeProvider>
  </HashRouter>
)
