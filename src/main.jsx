import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} ></RouterProvider>
  </StrictMode>,
)
