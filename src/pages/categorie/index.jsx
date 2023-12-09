import { useParams } from 'react-router-dom'

import Cards from '../../components/Cards'

import './styles.scss'
import useCollection from '../../firebase/useCollection'
import useDoc from '../../firebase/useDoc'

const Categorie = () => {
  const { id, url } = useParams()

  const [categorie, loadingCategorie] = useDoc('categorie', id)
  const [products, loadingProducts] = useCollection(
    'products',
    `id_categorie=${url}`
  )

  return (
    <main className='main-content categorie-page'>
      <section className='head'>
        {!loadingCategorie && <h1>{categorie.name}</h1>}
      </section>
      <section className='list'>
        {!loadingProducts &&
          products.map(
            ({ id, name, amount, is_favorite, id_categorie, imgs }) => (
              <Cards
                key={id}
                url={`/product/${id}`}
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
