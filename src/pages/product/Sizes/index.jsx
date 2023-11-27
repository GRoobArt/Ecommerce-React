import { useState } from 'react'
import './styles.scss'

const Sizes = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState('')

  const handleSize = (size) => {
    setSelectedSize(size)
  }

  return (
    <div className='sizes-container'>
      {sizes &&
        sizes.map((size) => (
          <div
            key={size}
            className={`sizes ${selectedSize === size ? 'selected' : ''}`}>
            <input
              required
              type='radio'
              id={`size-${size}`}
              name='size'
              value={size}
              className='size-radio-button'
            />
            <label onClick={() => handleSize(size)} htmlFor={`size-${size}`}>
              {size}
            </label>
          </div>
        ))}
    </div>
  )
}

export default Sizes
