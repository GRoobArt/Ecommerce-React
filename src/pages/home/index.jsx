import useCollection from '../../firebase/useCollection'
import Cards from '../../components/Cards'
import Spline from '@splinetool/react-spline'

import './styles.scss'

const Home = () => {
  const [products, loading] = useCollection('products')

  return (
    <main className='main-content home-page'>
      <section className='title'>
        <h1>NexaStep</h1>
      </section>
      <section>
        <h1>All Product</h1>
        {/* <article>
          <Spline scene='https://prod.spline.design/IXQ0XGTHwipo9Gkz/scene.splinecode' />
        </article> */}
        <article className='list-product'>
          {!loading &&
            products.map(
              ({ id, name, amount, is_favorite, id_categorie, imgs }) => (
                <Cards
                  key={id}
                  url={`product/${id}`}
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
