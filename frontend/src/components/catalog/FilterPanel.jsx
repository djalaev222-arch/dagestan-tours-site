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
  { value: 'easy', label: 'Легкий' },
  { value: 'medium', label: 'Средний' },
  { value: 'hard', label: 'Сложный' }
]

export function FilterPanel({ filters, onChange }) {
  const update = (patch) => onChange({ ...filters, ...patch })

  return (
    <div className="filter-panel">
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
        <label htmlFor="filter-type">Тип тура</label>
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
        <label htmlFor="filter-price">Бюджет до, ₽</label>
        <input
          id="filter-price"
          type="range"
          min="4000"
          max="26000"
          step="500"
          value={filters.maxPrice}
          onChange={(event) => update({ maxPrice: event.target.value })}
        />
        <span className="filter-panel__price-value">{Number(filters.maxPrice).toLocaleString('ru-RU')} ₽</span>
      </div>

      <button
        type="button"
        className="filter-panel__reset"
        onClick={() => onChange({ q: '', type: '', difficulty: '', maxPrice: 26000 })}
      >
        Сбросить фильтры
      </button>
    </div>
  )
}
