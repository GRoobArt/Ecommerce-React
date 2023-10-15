import iconCart from '../../../assets/icon/cart.svg'
import './styles.scss'

const CartWidget = () => {
  return (
    <div className='cart-content'>
      <img className='cart-icon' src={iconCart} alt='MiniCart' />

      <div className='count'>
        <span>0</span>
      </div>
    </div>
  )
}

export default CartWidget
