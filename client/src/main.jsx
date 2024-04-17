import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../src/assets/css/style.css'
import App from './App.jsx'
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
        position="bottom-center"
        reverseOrder={true}
    />
  </React.StrictMode>,
)
