import Compose from 'components/compose/Compose'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from 'App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Compose>
    <App />
    <ToastContainer />
  </Compose>,
)
