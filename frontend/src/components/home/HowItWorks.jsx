import { Reveal } from '../ui/Reveal'

const STEPS = [
  { title: 'Выбираете маршрут', text: 'Смотрите каталог, фильтруете по типу и сложности — от однодневных выездов до многодневного треккинга.' },
  { title: 'Оставляете заявку', text: 'Указываете дату и количество туристов — отвечаем в мессенджере или по телефону в течение часа.' },
  { title: 'Подтверждаем детали', text: 'Согласуем даты, состав группы и место сбора, отправляем список вещей под конкретный маршрут.' },
  { title: 'Едем в горы', text: 'Встречаем группу, везём по маршруту и остаёмся на связи до самого возвращения в Махачкалу.' }
]

export function HowItWorks() {
  return (
    <section className="section how">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Как это устроено</span>
          <h2 className="section-title">От заявки до маршрута — четыре шага</h2>
        </Reveal>

        <ol className="how__timeline">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 0.1} className="how__step">
              <span className="how__step-number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
