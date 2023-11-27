import Button from '../../../components/Buttom'
import { ICONS_WHITE } from '../../../helpers/parth'

import './styles.scss'

const QtyControl = ({ qty, action }) => {
  return (
    <div className='qty-control'>
      <Button
        className='qty-subtract'
        action={(e) => {
          e.preventDefault()
          action('subtract')
        }}
        style='primary'
        icon>
        <img
          className='icon'
          src={`${ICONS_WHITE}/subtract.svg`}
          alt='subtract'
        />
      </Button>
      <input
        className='qty'
        type='text'
        id='qty'
        name='qty'
        required
        value={qty}
      />
      <Button
        className='qty-add'
        action={(e) => {
          e.preventDefault()
          action('add')
        }}
        style='primary'
        icon>
        <img className='icon' src={`${ICONS_WHITE}/add.svg`} alt='subtract' />
      </Button>
    </div>
  )
}

export default QtyControl
