import { tours, getTourById, filterTours } from '../data/tours'

const API_URL = import.meta.env.VITE_API_URL
const hasBackend = Boolean(API_URL)

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const body = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(body?.error || 'Не удалось выполнить запрос')
  }

  return body
}

// Небольшая задержка, чтобы состояния загрузки в UI были честными и без мигания.
function delay(value, ms = 220) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}

export function fetchTours(filters = {}, options = {}) {
  if (hasBackend) {
    const params = new URLSearchParams(
      Object.entries(filters).filter(([, value]) => value !== undefined && value !== '')
    )
    const query = params.toString()
    return request(`/tours${query ? `?${query}` : ''}`, options)
  }

  const result = filterTours(filters)
  return delay({ data: result, total: result.length })
}

export function fetchTourById(id, options = {}) {
  if (hasBackend) {
    return request(`/tours/${id}`, options)
  }

  const tour = getTourById(id)
  if (!tour) {
    return delay(Promise.reject(new Error('Тур не найден')))
  }
  return delay({ data: tour })
}

export function createBooking(payload) {
  if (hasBackend) {
    return request('/bookings', { method: 'POST', body: JSON.stringify(payload) })
  }
  return Promise.reject(new NoBackendError())
}

export function createContactRequest(payload) {
  if (hasBackend) {
    return request('/contacts', { method: 'POST', body: JSON.stringify(payload) })
  }
  return Promise.reject(new NoBackendError())
}

// Когда бэкенд не подключён (например, статический деплой на GitHub Pages),
// формы предлагают написать напрямую в мессенджер.
export class NoBackendError extends Error {
  constructor() {
    super('no-backend')
    this.name = 'NoBackendError'
    this.isNoBackend = true
  }
}

export { hasBackend, tours }
