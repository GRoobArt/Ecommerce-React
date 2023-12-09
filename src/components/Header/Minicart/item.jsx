import { useNavigate } from 'react-router-dom'

import { PRODUCTS, ICONS_BLACK } from '../../../helpers/parth'

import Button from '../../Buttom'

const ItemsMinicart = ({ items, action }) => {
  const navigate = useNavigate()

  const OpenNavigate = (patch) => {
    navigate(`${patch}`)
  }

  return (
    <>
      {items.map(({ id, img, name, color, size, qty, amount }) => (
        <li className='product' key={id}>
          <img
            onClick={() => {
              OpenNavigate(`/product/${id}`)
            }}
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
          {action && (
            <Button
              className={'link remove'}
              icon
              action={() => {
                action(id)
              }}>
              <img className='icon' src={`${ICONS_BLACK}/remove.svg`} alt='' />
            </Button>
          )}
        </li>
      ))}
    </>
  )
}

export default ItemsMinicart
