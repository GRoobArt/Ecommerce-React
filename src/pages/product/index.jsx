import { useParams } from 'react-router-dom'
import usePetition from '../../hooks/usePetition'
import { useState } from 'react'

import Gallery from './gallery'
import { ICONS_WHITE } from '../../helpers/parth'
import Button from '../../components/Buttom'

import './styles.scss'

const Product = () => {
  const { id } = useParams()
  const [products, setProducts] = usePetition('/data/products.json')
  const product = products && products.find((product) => product.id === id)
  const { name, imgs, amount, is_favorite } = product || {
    name: 'Cargando...',
    imgs: [],
    amount: 0,
    is_favorite: false,
  }

  const [IsFavorite, setIsFavorite] = useState(is_favorite)

  const handleFavorite = () => {
    setIsFavorite(!IsFavorite)
  }

  return (
    <main className='main-content product-page'>
      {product && (
        <>
          <section className='info-product'>
            <Gallery imgs={imgs} alt={name} />
          </section>
          <section className='sidebar-product'>
            <article className='head'>
              <div className='info'>
                <h1>{name}</h1>
                <p>$ {amount}</p>
              </div>
              <div>
                <Button
                  action={handleFavorite}
                  style='secondary'
                  icon
                  className='favorite'>
                  <img
                    className='icon'
                    src={`${ICONS_WHITE}/favorite${
                      IsFavorite ? '' : '-off'
                    }.svg`}
                    alt='favorite'
                  />
                </Button>
              </div>
            </article>
            <article className='content'></article>
          </section>
        </>
      )}
    </main>
  )
}

export default Product
