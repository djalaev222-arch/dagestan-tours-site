import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTours } from '../hooks/useTours'
import { FilterPanel } from '../components/catalog/FilterPanel'
import { TourCard } from '../components/tours/TourCard'
import { Reveal } from '../components/ui/Reveal'
import './catalog-page.css'

const DEFAULT_FILTERS = { q: '', type: '', difficulty: '', maxPrice: 26000 }

export function CatalogPage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [debounced, setDebounced] = useState({ q: DEFAULT_FILTERS.q, maxPrice: DEFAULT_FILTERS.maxPrice })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced({ q: filters.q, maxPrice: filters.maxPrice })
    }, 300)
    return () => clearTimeout(timeoutId)
  }, [filters.q, filters.maxPrice])

  const apiFilters = useMemo(
    () => ({
      q: debounced.q || undefined,
      type: filters.type || undefined,
      difficulty: filters.difficulty || undefined,
      maxPrice: debounced.maxPrice
    }),
    [debounced, filters.type, filters.difficulty]
  )

  const { tours, isLoading, error } = useTours(apiFilters)

  return (
    <div className="catalog-page">
      <div className="container">
        <Reveal className="catalog-page__head">
          <p className="mono-label mono-label--accent">Каталог маршрутов</p>
          <h1 className="catalog-page__title">Маршруты по Дагестану</h1>
          <p className="section-lede">
            От однодневных выездов к бархану Сарыкум до многодневного треккинга на Шалбуздаг. Фильтруйте по типу,
            сложности и бюджету.
          </p>
        </Reveal>

        <div className="catalog-page__layout">
          <aside>
            <FilterPanel filters={filters} onChange={setFilters} resultCount={tours.length} isLoading={isLoading} />
          </aside>

          <div className="catalog-page__results">
            {error && <p className="catalog-page__state catalog-page__state--error">{error}</p>}
            {!isLoading && !error && tours.length === 0 && (
              <div className="catalog-page__empty">
                <p>Под эти условия маршрутов не нашлось.</p>
                <button type="button" onClick={() => setFilters(DEFAULT_FILTERS)} className="link-line">
                  Сбросить фильтры
                </button>
              </div>
            )}

            <div className="catalog-page__grid" data-loading={isLoading ? 'true' : undefined}>
              {isLoading
                ? [0, 1, 2, 3, 4, 5].map((i) => <div key={i} className="catalog-page__skeleton" />)
                : (
                  <AnimatePresence mode="popLayout">
                    {tours.map((tour) => (
                      <motion.div
                        key={tour.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <TourCard tour={tour} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
