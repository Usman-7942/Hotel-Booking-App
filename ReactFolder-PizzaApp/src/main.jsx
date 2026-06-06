import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './assets/Pages/CartContext/CartContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>
)
