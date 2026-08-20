const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const body = await response.json().catch(() => null)

  if (!response.ok) {
    const message = body?.error || 'Не удалось выполнить запрос'
    throw new Error(message)
  }

  return body
}

export function fetchTours(filters = {}, options = {}) {
  const params = new URLSearchParams(
    Object.entries(filters).filter(([, value]) => value !== undefined && value !== '')
  )
  const query = params.toString()
  return request(`/tours${query ? `?${query}` : ''}`, options)
}

export function fetchTourById(id, options = {}) {
  return request(`/tours/${id}`, options)
}

export function createBooking(payload) {
  return request('/bookings', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function createContactRequest(payload) {
  return request('/contacts', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}
