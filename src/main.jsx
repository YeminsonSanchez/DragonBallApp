import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import DragonBallApp from './DragonBallApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DragonBallApp />
    </BrowserRouter>
  </React.StrictMode>,
)
