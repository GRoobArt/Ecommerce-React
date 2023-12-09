import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'

import db from './db'

export const useCollection = (doc, params) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const collect = collection(db, doc)

    if (params) {
      const param = params.split('=')

      const QueryCollect = query(
        collect,
        where(param[0], 'array-contains', param[1])
      )

      getDocs(QueryCollect).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setLoading(false)
        setProducts(products)
      })
    } else {
      getDocs(collect).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setLoading(false)
        setProducts(products)
      })
    }
  }, [doc, params])

  return [products, loading]
}

export default useCollection
