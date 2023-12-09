import { useState } from 'react'
import usePetition from '../../hooks/usePetition'
import useSet from '../../firebase/set/useSet'
import Button from '../../components/Buttom'

const AddProduct = () => {
  const [product, setProduct] = usePetition('/data/products.json')
  const [count, setCount] = useState(0)

  const AddProductDB = () => {
    console.log('add product', count)
    if (count < product.length) {
      setCount(count + 1)
      // useSet('products', product[count])
    } else {
      console.log('no hay mas productos')
    }
  }

  return (
    <div>
      <h1>Add Product</h1>
      <Button action={AddProductDB}>Crear Product</Button>
    </div>
  )
}

export default AddProduct
