import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContentProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
    qty: 0,
  })

  const [products, setProducts] = useState(cart.products)

  const addToCard = (product) => {
    const productExist = cart.products.find(
      (product) => product.id === product.id
    )

    if (!productExist) {
      setCart({
        products: [...cart.products, product],
        total:
          Number(cart.total) + Number(product.amount) * Number(product.qty),
        qty: Number(cart.qty) + Number(product.qty),
      })
    } else {
      setCart({
        ...cart,
        qty: Number(cart.qty) + Number(product.qty),
        total:
          Number(cart.total) + Number(product.amount) * Number(product.qty),
      })
      productExist.qty = Number(productExist.qty) + Number(product.qty)
    }

    console.log('Agregar Product')
  }

  const removeToCard = (product) => {
    const productExist = cart.products.find(
      (product) => product.id === product.id
    )

    cart.products.splice(productExist, 1)

    console.log('Eliminar Product')
  }

  return (
    <CartContext.Provider value={{ cart, products, addToCard, removeToCard }}>
      {children}
    </CartContext.Provider>
  )
}
