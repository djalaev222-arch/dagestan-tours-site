import { useEffect, useState } from 'react'
import { fetchTours } from '../api/client'

export function useTours(filters) {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    setError(null)

    fetchTours(filters, { signal: controller.signal })
      .then((body) => {
        if (!controller.signal.aborted) {
          setTours(body.data)
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          setError(err.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)])

  return { tours, isLoading, error }
}
