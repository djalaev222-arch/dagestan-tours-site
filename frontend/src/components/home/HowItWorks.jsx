import { Reveal } from '../ui/Reveal'

const STEPS = [
  { title: 'Выбираете маршрут', text: 'Смотрите каталог, фильтруете по типу и сложности — от однодневных выездов до многодневного треккинга.' },
  { title: 'Оставляете заявку', text: 'Указываете даты и число человек. Отвечаем в мессенджере или по телефону в течение часа.' },
  { title: 'Согласуем детали', text: 'Подтверждаем даты и место сбора, отправляем список вещей под конкретный маршрут и погоду.' },
  { title: 'Едем в горы', text: 'Встречаем группу, ведём по маршруту и остаёмся на связи до возвращения в Махачкалу.' }
]

export function HowItWorks() {
  return (
    <section className="section how">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">От заявки до маршрута — четыре шага</h2>
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
