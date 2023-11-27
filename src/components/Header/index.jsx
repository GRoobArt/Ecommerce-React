import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import Minicart from './Minicart'
import NavBar from './Navbar'
import AsideMinicart from './Minicart/aside'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { ICONS_BLACK, LOGOS } from '../../helpers/parth'

import './style.scss'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [state, setState] = useState(false)
  const [minicartState, setMinicartState] = useState(false)

  const { cart } = useContext(CartContext)

  useEffect(() => {
    fetch('/data/cagegories.json')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const ChangetState = () => {
    setState(!state)
  }

  const openCart = () => {
    setMinicartState(!minicartState)
    console.log('Open Cart')
    console.log(cart)
  }

  return (
    <>
      <header className={`header ${state ? 'open' : 'close'}`}>
        <NavLink className={'brand'} to='/'>
          <img
            className='icon imagotipo'
            src={`${LOGOS}/imagotipo-color.svg`}
            alt=''
          />
          {state && (
            <img
              className='icon logotipo'
              src={`${LOGOS}/logotipo-color.svg`}
              alt=''
            />
          )}
        </NavLink>
        <Minicart
          img={`${ICONS_BLACK}/minicart.svg`}
          state={state}
          content={cart}
          action={openCart}
        />
        <nav className='container'>
          <NavBar list={categories} state={state} />
        </nav>
        <button className='changet-status' type='buttom' onClick={ChangetState}>
          <img
            className={`${!state ? 'open' : 'close'} icon`}
            src={`${ICONS_BLACK}/arrow.svg`}
            alt=''
          />
        </button>
      </header>

      <AsideMinicart status={minicartState} content={cart} state={state} />
    </>
  )
}
export default Header
