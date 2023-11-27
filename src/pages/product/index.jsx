import { useParams } from 'react-router-dom'
import usePetition from '../../hooks/usePetition'
import { useState, useContext } from 'react'

import Gallery from './Gallery'
import Button from '../../components/Buttom'
import Review from '../../components/Review'
import Sizes from './Sizes'
import QtyControl from './Qty'
import { CartContext } from '../../context/CartContext'

import './styles.scss'

const Product = () => {
  const { id } = useParams()

  const { addToCard, cart } = useContext(CartContext)

  const [products, setProducts] = usePetition('/data/products.json')

  const product = products && products.find((product) => product.id === id)

  const handleSubmit = (e) => {
    e.preventDefault()
    addToCard({
      id: product.id,
      name: product.name,
      url: product.url,
      id_categorie: product.id_categorie,
      size: e.target.size.value,
      color: product.color,
      amount: product.amount,
      qty: e.target.qty.value,
      img: product.imgs[0],
    })
  }

  const [qty, setQty] = useState(1)

  const handleQty = (type) => {
    if (type === 'add') {
      setQty(qty + 1)
    } else if (type === 'subtract' && qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <main className='main-content product-page'>
      {product && (
        <>
          <section className='info-product'>
            <Gallery imgs={product.imgs} alt={product.name} />
          </section>
          <section className='sidebar-product'>
            <article className='head'>
              <div className='info'>
                <div className='title'>
                  <h1>{product.name}</h1>
                  <p>$ {product.amount}</p>
                </div>
              </div>
              <Review content={product.review} />
            </article>
            <article className='content'>
              <p className='colors-select'>
                <strong>Color:</strong> <span>{product.color}</span>
              </p>
              <form onSubmit={handleSubmit}>
                <fieldset className='options-products'>
                  <legend>Talla</legend>
                  <Sizes sizes={product.size} />
                </fieldset>
                <fieldset className='submit-add-to-cart'>
                  <QtyControl qty={qty} action={handleQty} />
                  <Button type='submit' style='primary fill addcart'>
                    Agregar al carrito
                  </Button>
                </fieldset>
              </form>
            </article>
          </section>
        </>
      )}
    </main>
  )
}

export default Product
