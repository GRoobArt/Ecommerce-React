import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { PRODUCTS, ICONS_WHITE } from '../../helpers/parth'

import Button from '../Buttom'

import './styles.scss'

const Cards = ({ url, name, amount, favorite, imgs }) => {
  const navigate = useNavigate()

  const imgHover = imgs.find(({ tag }) => tag.includes('hover'))
  const imgPrincipal = imgs.find(({ tag }) => tag.includes('principal'))

  const [IsFavorite, setIsFavorite] = useState(favorite)

  const handleFavorite = () => {
    setIsFavorite(!IsFavorite)
  }

  const OpenProduct = (patch) => {
    navigate(`${patch}`)
  }

  return (
    <article className='card-product'>
      <div className='head'>
        <div className='card-action'>
          <Button
            action={handleFavorite}
            style='secondary'
            icon
            className='favorite'>
            <img
              className='icon'
              src={`${ICONS_WHITE}/favorite${!IsFavorite ? '' : '-off'}.svg`}
              alt='favorite'
            />
          </Button>
          <Button
            action={() => {
              OpenProduct(url)
            }}
            className='open'
            style='primary'
            icon>
            <img className='icon' src={`${ICONS_WHITE}/view.svg`} alt='open' />
          </Button>
          <Button style='secondary' icon className={'add'}>
            <img className='icon' src={`${ICONS_WHITE}/add.svg`} alt='add' />
          </Button>
        </div>
        <div className='img-content'>
          <img
            className='principal'
            src={`${PRODUCTS}/1/${imgPrincipal.img}`}
            alt={name}
          />
          <img
            className='hover'
            src={`${PRODUCTS}/1/${imgHover.img}`}
            alt={name}
          />
        </div>
      </div>
      <div className='content'>
        <h2 className='name'>{name}</h2>
        <p className='amount'>$ {amount}</p>
      </div>
    </article>
  )
}

export default Cards
