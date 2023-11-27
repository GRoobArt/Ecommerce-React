import './styles.scss'

const Button = ({ children, style, action, icon, className, type }) => {
  return (
    <button
      type={`${type || 'button'}`}
      onClick={action}
      className={`action ${className || ''} ${style || ''} ${
        icon ? 'icon' : ''
      }`}>
      {children}
    </button>
  )
}

export default Button
