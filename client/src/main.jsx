import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import MainHero from './components/mainHero/mainhero.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Navbar />
        <MainHero/>
    <App />
  </React.StrictMode>,
)
