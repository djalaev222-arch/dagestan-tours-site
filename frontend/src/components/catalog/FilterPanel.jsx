import './filter-panel.css'

const TYPES = [
  { value: '', label: 'Все типы' },
  { value: 'nature', label: 'Природа' },
  { value: 'history', label: 'История' },
  { value: 'trekking', label: 'Треккинг' },
  { value: 'beach', label: 'Побережье' }
]

const DIFFICULTIES = [
  { value: '', label: 'Любая' },
  { value: 'easy', label: 'Лёгкий' },
  { value: 'medium', label: 'Средний' },
  { value: 'hard', label: 'Сложный' }
]

const RESET = { q: '', type: '', difficulty: '', maxPrice: 26000 }

export function FilterPanel({ filters, onChange, resultCount, isLoading }) {
  const update = (patch) => onChange({ ...filters, ...patch })
  const isDirty = filters.q || filters.type || filters.difficulty || Number(filters.maxPrice) !== RESET.maxPrice

  return (
    <div className="filter-panel">
      <div className="filter-panel__count mono-label">
        {isLoading ? 'поиск…' : `${resultCount} ${plural(resultCount)}`}
      </div>

      <div className="filter-panel__field">
        <label htmlFor="filter-search">Поиск</label>
        <input
          id="filter-search"
          type="search"
          placeholder="Название или регион"
          value={filters.q}
          onChange={(event) => update({ q: event.target.value })}
        />
      </div>

      <div className="filter-panel__field">
        <label htmlFor="filter-type">Тип маршрута</label>
        <select id="filter-type" value={filters.type} onChange={(event) => update({ type: event.target.value })}>
          {TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-panel__field">
        <label htmlFor="filter-difficulty">Сложность</label>
        <select
          id="filter-difficulty"
          value={filters.difficulty}
          onChange={(event) => update({ difficulty: event.target.value })}
        >
          {DIFFICULTIES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-panel__field">
        <label htmlFor="filter-price">
          Бюджет до <span className="filter-panel__price-value">{Number(filters.maxPrice).toLocaleString('ru-RU')} ₽</span>
        </label>
        <input
          id="filter-price"
          type="range"
          min="4000"
          max="26000"
          step="500"
          value={filters.maxPrice}
          onChange={(event) => update({ maxPrice: event.target.value })}
        />
      </div>

      {isDirty && (
        <button type="button" className="filter-panel__reset link-line" onClick={() => onChange(RESET)}>
          Сбросить фильтры
        </button>
      )}
    </div>
  )
}

function plural(n) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'маршрут'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'маршрута'
  return 'маршрутов'
}
