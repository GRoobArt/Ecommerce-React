import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Cards from '../../components/Cards'

import './styles.scss'
import usePetition from '../../hooks/usePetition'

const Categorie = () => {
  const { id } = useParams()

  const [categories, setCategories] = usePetition('/data/cagegories.json')
  const [products, setProducts] = usePetition('/data/products.json')
  const categorie =
    categories && categories.find((categorie) => categorie.id === id)
  const listProduct =
    products && products.filter((product) => product.id_categorie === id)

  return (
    <main className='main-content categorie-page'>
      <section className='head'>
        {categorie && <h1>{categorie.name}</h1>}
      </section>
      <section className='list'>
        {listProduct &&
          listProduct.map(
            ({ id, name, amount, is_favorite, id_categorie, url, imgs }) => (
              <Cards
                key={id}
                url={url}
                name={name}
                amount={amount}
                favorite={is_favorite}
                categorie={id_categorie}
                imgs={imgs}
              />
            )
          )}
      </section>
    </main>
  )
}

export default Categorie
