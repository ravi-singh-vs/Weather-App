import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import HomePageContext from './context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePageContext>
      <App />
    </HomePageContext>
  </React.StrictMode>,
)
