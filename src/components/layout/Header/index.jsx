import NavBar from '../NavBar'
import CartWidget from '../../moleculas/Minicart'
import TesoroLogo from '/logo.png'
import './styles.scss'

const Header = ({ theme }) => {
  return (
    <header className={`${theme} header-content`}>
      <div className='logo'>
        <a href='/'>
          <img src={TesoroLogo} alt='Tesoro Vintage' />
        </a>
      </div>
      <NavBar />
      <CartWidget />
    </header>
  )
}

export default Header
