const Minicart = ({ img, state }) => {
  return (
    <div className='cart-content'>
      <div className='content'>
        <img className='icon' src={img} alt='minicart' />
        <div className='count'>
          <span>0</span>
        </div>
      </div>
      {state && (
        <div className='amount'>
          <span className='currency'>$</span>
          <span className=''>0</span>
        </div>
      )}
    </div>
  )
}

export default Minicart
