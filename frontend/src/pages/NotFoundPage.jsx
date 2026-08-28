import { Button } from '../components/ui/Button'
import './not-found-page.css'

export function NotFoundPage() {
  return (
    <div className="container not-found-page">
      <p className="mono-label mono-label--accent">Ошибка 404</p>
      <h1 className="not-found-page__title">Страница потерялась в горах</h1>
      <p className="not-found-page__lede">Возможно, маршрут переехал в другой раздел каталога.</p>
      <Button to="/catalog" withArrow>
        Смотреть маршруты
      </Button>
    </div>
  )
}
