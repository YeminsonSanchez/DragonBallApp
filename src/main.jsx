import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import DragonBallProvider from './context/DragonBallContext'
import DragonBallApp from './DragonBallApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DragonBallProvider>
      <BrowserRouter>
        <DragonBallApp />
      </BrowserRouter>
    </DragonBallProvider>
  </React.StrictMode>,
)
