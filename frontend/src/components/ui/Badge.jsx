const TYPE_LABELS = {
  nature: 'Природа',
  history: 'История',
  trekking: 'Треккинг',
  beach: 'Побережье'
}

const DIFFICULTY_LABELS = {
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Сложный'
}

export function TypeBadge({ type }) {
  return <span className={`badge badge--${type}`}>{TYPE_LABELS[type] || type}</span>
}

export function DifficultyBadge({ difficulty }) {
  return (
    <span className={`badge badge--difficulty-${difficulty}`}>{DIFFICULTY_LABELS[difficulty] || difficulty}</span>
  )
}
