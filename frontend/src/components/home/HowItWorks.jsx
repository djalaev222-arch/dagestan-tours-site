import { Reveal } from '../ui/Reveal'

const STEPS = [
  { title: 'Выбираете маршрут', text: 'Смотрите каталог, фильтруете по типу и сложности.' },
  { title: 'Оставляете заявку', text: 'Пишете даты и число человек — отвечаем в течение часа.' },
  { title: 'Согласуем детали', text: 'Подтверждаем место сбора, присылаем список вещей под погоду.' },
  { title: 'Едем в горы', text: 'Встречаем группу и ведём по маршруту до возвращения в Махачкалу.' }
]

export function HowItWorks() {
  return (
    <section className="section how">
      <div className="container">
        <Reveal className="section-head">
          <p className="mono-label mono-label--accent">Как всё устроено</p>
          <h2 className="section-title">Четыре шага до выезда</h2>
        </Reveal>

        <ol className="how__path">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.08} className="how__step">
              <span className="how__step-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="how__step-rule" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
