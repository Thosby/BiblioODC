import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './account.jsx';
import Card2 from './../src/card2.jsx';

const router = createBrowserRouter([
  {
    path: "/connexion",
    element: <Account/>
  },
  {
    path: "/",
    element: <Card2/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>
)
