import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <Reveal>
          <h2>Не нашли подходящий маршрут?</h2>
          <p>Опишите, что хотите увидеть — соберём индивидуальный тур по Дагестану под ваши даты и группу.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button to="/contacts" size="lg" variant="subtle" withArrow>
            Написать нам
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
