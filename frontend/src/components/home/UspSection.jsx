import { Reveal } from '../ui/Reveal'

const ITEMS = [
  {
    title: 'Гиды из местных сёл',
    text: 'Ведут маршруты по своим районам — Дубки, Гуниб, Хунзах. Знают, где сесть на закат и куда не стоит ехать после дождя.'
  },
  {
    title: 'Маршрут не по кругу',
    text: 'Не возим по одной и той же связке «каньон — водопад — рынок». В каждом туре есть точка, до которой самостоятельно не доедешь.'
  },
  {
    title: 'Внедорожник там, где нужен',
    text: 'На серпантины и грунтовки — УАЗ или Delica, а не большой автобус. Дорога здесь часть маршрута, а не потерянное время.'
  },
  {
    title: 'На связи до и после',
    text: 'Отвечаем в мессенджере в день заявки, помогаем с билетами и жильём в Махачкале до начала маршрута и после него.'
  }
]

export function UspSection() {
  return (
    <section className="section approach">
      <div className="container approach__grid">
        <div className="approach__aside">
          <Reveal>
            <p className="mono-label mono-label--accent">Почему с нами</p>
            <h2 className="approach__title">Не турагрегатор, а команда проводников</h2>
          </Reveal>
        </div>

        <ol className="approach__list">
          {ITEMS.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.06} className="approach__item">
              <span className="approach__index">{String(index + 1).padStart(2, '0')}</span>
              <div className="approach__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
