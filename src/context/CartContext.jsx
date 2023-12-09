import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContentProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
    qty: 0,
  })

  const products = cart.products

  const addToCard = (product) => {
    console.log('add To Cart')
    let productExist = cart.products.find((item) => item.id === product.id)

    if (!productExist) {
      setCart({
        products: [...cart.products, product],
        subtotal:
          Number(cart.subtotal) + Number(product.amount) * Number(product.qty),
        total:
          Number(cart.subtotal) + Number(product.amount) * Number(product.qty),
        qty: Number(cart.qty) + Number(product.qty),
      })
    } else {
      if (productExist.size === product.size) {
        setCart({
          ...cart,
          qty: Number(cart.qty) + Number(product.qty),
          subtotal:
            Number(cart.subtotal) +
            Number(product.amount) * Number(product.qty),
          total:
            Number(cart.subtotal) +
            Number(product.amount) * Number(product.qty),
        })
        productExist.qty = Number(productExist.qty) + Number(product.qty)
      } else {
        setCart({
          ...cart,
          qty: Number(cart.qty) + Number(product.qty),
          subtotal:
            Number(cart.subtotal) +
            Number(product.amount) * Number(product.qty),
          total:
            Number(cart.subtotal) +
            Number(product.amount) * Number(product.qty),
        })
        productExist.qty = Number(productExist.qty) + Number(product.qty)
        productExist.size += `, ${product.size}`
      }
    }
  }

  const removeToCard = (id) => {
    const productExist = cart.products.find((item) => item.id === id)
    if (!productExist) {
      return console.log('No existe el producto')
    } else {
      console.log('Si existe el producto')
      setCart({
        ...cart,
        qty: Number(cart.qty) - Number(productExist.qty),
        total:
          Number(cart.total) -
          Number(productExist.amount) * Number(productExist.qty),
        products: cart.products.filter((item) => item.id !== id),
      })

      console.log('Eliminar Product', productExist)
    }
  }

  const empyToCart = () => {
    setCart({
      products: [],
      total: 0,
      qty: 0,
    })
  }

  const addShipping = () => {
    setCart({
      ...cart,
      shipping: 10,
      total: Number(cart.total) + 10,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCard,
        removeToCard,
        empyToCart,
        addShipping,
      }}>
      {children}
    </CartContext.Provider>
  )
}
