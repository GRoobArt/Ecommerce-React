import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './pages/App'
import Home from './pages/home'
import Categorie from './pages/categorie'
import Product from './pages/product'
import Checkout from './pages/checkout'
import SuccessPage from './pages/checkout/success'

import { CartContentProvider } from './context/CartContext'

import './global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContentProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path=':url/:id' element={<Categorie />} />
          <Route path='product/:id' element={<Product />} />
        </Route>
        <Route path='checkout' element={<Checkout />}>
          <Route path=':id' element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartContentProvider>
)
