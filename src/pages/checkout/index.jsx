import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { CartContext } from '../../context/CartContext'

import SumarySection from './Summary'
import ItemsMinicart from '../../components/Header/Minicart/item'
import Button from '../../components/Buttom'

import useSet from '../../firebase/set/useSet'

import './styles.scss'

const CheckOut = () => {
  const [success, setSuccess] = useState({})
  const { cart, addShipping } = useContext(CartContext)
  const navigate = useNavigate()

  if (cart.qty === 0) {
    navigate('/')
  }

  const CreateSale = (e) => {
    e.preventDefault()

    addShipping()

    const { email, name, lastname, country } = e.target

    const data = {
      email: email.value,
      name: name.value,
      lastname: lastname.value,
      country: country.value,
      products: cart.products,
      subtotal: cart.subtotal,
      shipping: cart.shipping,
      total: cart.total,
    }

    useSet('sales', data)
    setSuccess(data)
  }

  return (
    <main className='checkout-page'>
      <h1 className='title'>CheckOut</h1>
      {!success && (
        <section className='forms'>
          <h2 className='title'>Envio</h2>
          <form className='' onSubmit={CreateSale}>
            <fieldset className='fieldset'>
              <label className='field' htmlFor='email'>
                <span className='title'>Email</span>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                />
              </label>
            </fieldset>
            <fieldset className='fieldset'>
              <label className='field' htmlFor='name'>
                <span className='title'>Name</span>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                />
              </label>
              <label className='field' htmlFor='lastname'>
                <span className='title'>Last Name</span>
                <input
                  type='text'
                  name='lastname'
                  id='lastname'
                  placeholder='Last Name'
                  required
                />
              </label>
            </fieldset>
            <fieldset className='fieldset'>
              <label className='field' htmlFor='country'>
                <span className='title'>Country</span>
                <input
                  type='text'
                  name='country'
                  id='country'
                  placeholder='Country'
                  required
                />
              </label>
            </fieldset>
            <Button type={'submit'} className={'fill'} style={'primary'}>
              Comprar
            </Button>
          </form>
        </section>
      )}
      {success && (
        <section className={'success'}>
          <h1 className='title'>Gracias por tu compra</h1>
          <p className='subtitle'>
            Hemos enviado un correo a {success.email} con los detalles de tu
            compra
          </p>
          <h2 className='subtitle'>
            Hola {`${success.name} ${success.lastname}`}
          </h2>
          <Button
            type={'button'}
            className={'fill'}
            style={'primary'}
            action={() => navigate('/')}>
            Volver al inicio
          </Button>
        </section>
      )}
      <SumarySection
        subtotal={cart.subtotal}
        shipping={cart.shipping}
        total={cart.total}
      />
      <section className='products'>
        <h2 className='title'>Productos</h2>
        <ul className='list-products'>
          {cart.qty > 0 && <ItemsMinicart items={cart.products} />}
        </ul>
      </section>
    </main>
  )
}
export default CheckOut
