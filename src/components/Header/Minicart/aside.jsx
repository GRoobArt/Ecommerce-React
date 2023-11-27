import { PRODUCTS } from '../../../helpers/parth'
import { useNavigate } from 'react-router-dom'

import './aside.scss'

const AsideMinicart = ({ state, content, status }) => {
  const navigate = useNavigate()

  const OpenNavigate = (patch) => {
    navigate(`${patch}`)
  }

  return (
    <aside
      className={`minicart ${state ? 'open' : 'close'} ${
        status ? 'view' : 'notView'
      }`}>
      <div className='head'>
        <h2 className='title'>
          Minicart <span>$ {content.total}</span>
        </h2>
      </div>
      <div className='content'>
        <ul className='list-products'>
          {content.products.map(
            ({
              id,
              name,
              url,
              size,
              color,
              amount,
              id_categorie,
              qty,
              img,
            }) => (
              <li
                className='product'
                key={id}
                onClick={() => {
                  OpenNavigate(
                    `categorie/${id_categorie}/product/${url}`.toLowerCase()
                  )
                }}>
                <img
                  className='img'
                  src={`${PRODUCTS}/1/${img.img}`}
                  alt={name}
                />
                <div className='info'>
                  <h3 className='name'>{name}</h3>
                  <p className='color'>
                    Color: <span>{color}</span>
                  </p>
                  <p className='size'>
                    Size: <span>{size}</span>
                  </p>
                  <p className='qty'>
                    Qty: <span>{qty}</span>
                  </p>
                </div>
                <span className='price'>$ {amount}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className='footer'></div>
    </aside>
  )
}

export default AsideMinicart
