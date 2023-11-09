import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './pages/App.jsx'
import Home from './pages/Home'
import Categorie from './pages/categorie'
import Product from './pages/Product'

import './global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='categorie/:id'>
          <Route index element={<Categorie />} />
          <Route path='product/:id' element={<Product />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
