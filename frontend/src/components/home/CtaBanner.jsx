import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__backdrop" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}photos/gamsutl.jpg`} alt="" loading="lazy" width="1147" height="1720" />
      </div>
      <div className="cta__scrim" aria-hidden="true" />
      <div className="container cta__inner">
        <Reveal>
          <p className="mono-label mono-label--accent">Индивидуальный маршрут</p>
          <h2 className="cta__title">Не нашли свой маршрут?</h2>
          <p className="cta__text">
            Опишите, что хотите увидеть и сколько у вас дней — соберём тур по Дагестану под ваши даты и состав группы.
          </p>
          <Button to="/contacts" size="lg" variant="primary" withArrow>
            Написать нам
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
