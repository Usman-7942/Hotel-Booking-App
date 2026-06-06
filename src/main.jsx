import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { HotelProvider } from './assets/Components/Pages/ContextApi/ContextApi.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <HotelProvider>
         <App />
      </HotelProvider>
   </BrowserRouter>
)
