import { Button } from '../components/ui/Button'
import './not-found-page.css'

export function NotFoundPage() {
  return (
    <div className="container not-found-page">
      <h1 className="section-title not-found-page__title">Страница не найдена</h1>
      <p className="section-lede not-found-page__lede">Возможно, тур переехал в другой раздел каталога.</p>
      <Button to="/catalog" withArrow>
        Перейти в каталог
      </Button>
    </div>
  )
}
