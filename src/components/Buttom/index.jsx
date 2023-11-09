import './styles.scss'

const Button = ({ children, style, action, icon, className }) => {
  return (
    <button
      onClick={action}
      className={`action ${className} ${style} ${icon ? 'icon' : ''}`}>
      {children}
    </button>
  )
}

export default Button
