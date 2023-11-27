import usePetition from '../../hooks/usePetition'
import Cards from '../../components/Cards'

import './styles.scss'

const Home = () => {
  const [products, setProducts] = usePetition('/data/products.json')

  return (
    <main className='main-content home-page'>
      <section className='title'>
        <h1>NexaStep</h1>
      </section>
      <section>
        <h1>All Product</h1>

        <article className='list-product'>
          {products &&
            products.map(
              ({ id, name, amount, is_favorite, id_categorie, url, imgs }) => (
                <Cards
                  key={id}
                  url={`categorie/${id_categorie}/product/${url}`.toLowerCase()}
                  name={name}
                  amount={amount}
                  favorite={is_favorite}
                  categorie={id_categorie}
                  imgs={imgs}
                />
              )
            )}
        </article>
      </section>
    </main>
  )
}

export default Home
