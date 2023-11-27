const Minicart = ({ img, state, content, action }) => {
  return (
    <div className='cart-content' onClick={action}>
      <div className='content'>
        <img className='icon' src={img} alt='minicart' />
        <div className='count'>
          <span>{content.qty}</span>
        </div>
      </div>
      {state && (
        <div className='amount'>
          <span className='currency'>$</span>
          <span className=''>{content.total}</span>
        </div>
      )}
    </div>
  )
}

export default Minicart
