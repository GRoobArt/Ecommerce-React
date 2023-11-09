import Header from '../Header'

import './style.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
