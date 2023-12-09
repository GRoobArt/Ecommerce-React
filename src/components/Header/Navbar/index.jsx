import { NavLink } from 'react-router-dom'

import { ICONS_BLACK } from '../../../helpers/parth'

const NavBar = ({ list, state }) => {
  return (
    <ul className='menu'>
      {list &&
        list.map(({ name, id, icon, url }) => (
          <li key={id} className='item'>
            <NavLink
              className={'link'}
              to={`${url}/${id}`}
              activeclassname='active'>
              <img className='icon' src={`${ICONS_BLACK}/${icon}`} alt={name} />
              {state && name}
            </NavLink>
          </li>
        ))}
    </ul>
  )
}

export default NavBar
