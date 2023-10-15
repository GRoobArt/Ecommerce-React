import Header from './components/layout/Header'

const LayoutHome = ({ theme, layout, children }) => {
  const Theme = theme || 'light'
  const Layout = layout || 'default'

  return (
    <>
      <Header theme={Theme} />
      <main className={`${Theme} content-${Layout}`}>{children}</main>
    </>
  )
}

export default LayoutHome
