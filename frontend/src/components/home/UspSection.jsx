import { Reveal } from '../ui/Reveal'

const ITEMS = [
  {
    title: 'Гиды из местных сёл',
    text: 'Ведут маршруты по своим районам — Дубки, Гуниб, Хунзах. Знают, где сесть на закат и куда не стоит ехать после дождя.'
  },
  {
    title: 'Маршрут не по шаблону',
    text: 'Не возим по одному и тому же кругу «каньон — водопад — рынок». В каждом туре есть точка, до которой самостоятельно не доедешь.'
  },
  {
    title: 'Внедорожник, когда он нужен',
    text: 'На серпантины и грунтовки — УАЗ или Delica, а не микроавтобус. Дорога — часть тура, а не проблема.'
  },
  {
    title: 'На связи до и после тура',
    text: 'Отвечаем в мессенджере в день заявки, помогаем с билетами и жильём в Махачкале до и после маршрута.'
  }
]

export function UspSection() {
  return (
    <section className="section usp">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Почему с нами</span>
          <h2 className="section-title">Не турагрегатор, а команда проводников</h2>
        </Reveal>

        <div className="usp__grid">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="usp__reveal">
              <div className="usp__card">
                <span className="usp__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
