import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'
import { IconArrowRight } from '../ui/icons'

const ITEMS = [
  {
    title: 'Гиды из местных сёл',
    text: 'Ведут маршруты по своим районам — Дубки, Гуниб, Хунзах. Знают, где сесть на закат и куда не стоит ехать после дождя.',
    tag: 'локальная команда'
  },
  {
    title: 'Маршрут не по кругу',
    text: 'Не возим по одной и той же связке «каньон — водопад — рынок». В каждом туре есть точка, до которой самостоятельно не доедешь.',
    tag: 'авторские треки'
  },
  {
    title: 'Внедорожник там, где нужен',
    text: 'На серпантины и грунтовки — УАЗ или Delica, а не большой автобус. Дорога здесь часть маршрута, а не потерянное время.',
    tag: 'проходимость'
  },
  {
    title: 'На связи до и после',
    text: 'Отвечаем в мессенджере в день заявки, помогаем с билетами и жильём в Махачкале до начала маршрута и после него.',
    tag: 'сопровождение'
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
            <p className="approach__lede">
              Мы не перепродаём чужие туры. Каждый маршрут в списке мы прошли сами —
              знаем сезоны, состояние дорог и людей в аулах, и отвечаем за то, как пройдёт поездка.
            </p>
            <Link to="/catalog" className="link-line approach__link">
              Смотреть все 26 маршрутов
              <IconArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <ol className="approach__list">
          {ITEMS.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.06} className="approach__item">
              <span className="approach__ghost" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="approach__body">
                <span className="approach__tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="approach__rule" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
