import Compose from 'components/compose/Compose'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Compose>
    <App />
    <ToastContainer />
  </Compose>,
)
