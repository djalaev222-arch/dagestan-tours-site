import { useEffect, useState } from 'react'
import { fetchTourById } from '../api/client'

export function useTour(id) {
  const [tour, setTour] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    setError(null)

    fetchTourById(id, { signal: controller.signal })
      .then((body) => {
        if (!controller.signal.aborted) {
          setTour(body.data)
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
  }, [id])

  return { tour, isLoading, error }
}
