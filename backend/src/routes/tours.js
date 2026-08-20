import { Router } from 'express'
import { tours, getTourById } from '../data/tours.js'

export const toursRouter = Router()

toursRouter.get('/', (req, res) => {
  const { type, difficulty, region, maxPrice, q } = req.query

  let result = tours

  if (type) {
    result = result.filter((tour) => tour.type === type)
  }
  if (difficulty) {
    result = result.filter((tour) => tour.difficulty === difficulty)
  }
  if (region) {
    result = result.filter((tour) => tour.region.toLowerCase().includes(String(region).toLowerCase()))
  }
  if (maxPrice) {
    const max = Number(maxPrice)
    if (!Number.isNaN(max)) {
      result = result.filter((tour) => tour.priceFrom <= max)
    }
  }
  if (q) {
    const query = String(q).toLowerCase()
    result = result.filter(
      (tour) => tour.title.toLowerCase().includes(query) || tour.region.toLowerCase().includes(query)
    )
  }

  res.json({ data: result, total: result.length })
})

toursRouter.get('/:id', (req, res) => {
  const tour = getTourById(req.params.id)
  if (!tour) {
    return res.status(404).json({ error: 'Тур не найден' })
  }
  res.json({ data: tour })
})
