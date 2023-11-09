import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import Minicart from './Minicart'
import NavBar from './Navbar'

import { ICONS_BLACK, LOGOS } from '../../helpers/parth'

import './style.scss'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [state, setState] = useState(false)
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

  return (
    <header className={`header ${state ? 'open' : 'close'}`}>
      <NavLink className={'brand'} to='/'>
        <img className='icon' src={`${LOGOS}/imagotipo-color.svg`} alt='' />
      </NavLink>
      <Minicart img={`${ICONS_BLACK}/minicart.svg`} state={state} />
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
  )
}
export default Header
