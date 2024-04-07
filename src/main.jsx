import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Sign from './sign.jsx';
import Card2 from './../src/card2.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
