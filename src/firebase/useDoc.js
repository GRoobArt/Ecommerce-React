import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from './db'

export const useDoc = (collection, id) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const products = doc(db, collection, id)

    getDoc(products).then((doc) => {
      if (doc.exists()) {
        setLoading(false)
        setProduct({ id: doc.id, ...doc.data() })
      }
    })
  }, [collection, id])

  return [product, loading]
}

export default useDoc
