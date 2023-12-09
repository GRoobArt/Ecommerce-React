import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

import Button from '../../Buttom'
import ItemsMinicart from './item'

import './aside.scss'

const AsideMinicart = ({ state, content, status }) => {
  const navigate = useNavigate()

  const { removeToCard, empyToCart } = useContext(CartContext)

  return (
    <aside
      className={`minicart ${state ? 'open' : 'close'} ${
        status ? 'view' : 'notView'
      }`}>
      <div className='head'>
        <h2 className='title'>
          Minicart <span>$ {content.subtotal}</span>
        </h2>
      </div>
      <div className='content'>
        <ul className='list-products'>
          {content.qty > 0 && (
            <ItemsMinicart items={content.products} action={removeToCard} />
          )}
          {content.qty === 0 && (
            <li className='product'>
              <div className='info'>
                <h3 className='name'>No hay productos</h3>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className='footer'>
        {content.qty > 0 && (
          <>
            <Button
              type='button'
              style='secondary fill empycart'
              action={() => {
                empyToCart()
              }}>
              Vaciar Carro
            </Button>
            <Button
              type='button'
              style='primary fill payment'
              action={() => {
                navigate('/checkout')
              }}>
              Ir a Pagar
            </Button>
          </>
        )}
      </div>
    </aside>
  )
}

export default AsideMinicart
