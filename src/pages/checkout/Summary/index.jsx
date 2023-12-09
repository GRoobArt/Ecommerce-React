const SummarySection = ({ subtotal, shipping, total }) => {
  return (
    <section className='summary content'>
      <h2 className='title'>Sumary</h2>
      <ul className='list-summary'>
        <li className='item-summary'>
          <span>
            <strong>Subtotal</strong>
          </span>
          <span>$ {subtotal}</span>
        </li>
        <li className='item-summary'>
          <span>
            <strong>Envio</strong>
          </span>
          <span>$ {shipping ?? 0}</span>
        </li>
        <li className='item-summary'>
          <span>
            <strong>Total</strong>
          </span>
          <span>$ {total}</span>
        </li>
      </ul>
    </section>
  )
}

export default SummarySection
