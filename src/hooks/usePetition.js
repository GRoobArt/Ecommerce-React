import { useState, useEffect } from 'react'

const usePetition = (endpoint) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
      })
  }, [endpoint])

  return [data, loading]
}

export default usePetition
