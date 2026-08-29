import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import './about-page.css'

const GUIDES = [
  { name: 'Ахмед', place: 'Гуниб', focus: 'История и крепости', years: 11 },
  { name: 'Патимат', place: 'Хунзах', focus: 'Плато и водопады', years: 6 },
  { name: 'Расул', place: 'Дербент', focus: 'Старый город и ремёсла', years: 8 },
  { name: 'Заур', place: 'Южный Дагестан', focus: 'Треккинг и высокогорье', years: 9 }
]

const PRINCIPLES = [
  { title: 'Сначала едем сами', text: 'Маршрут попадает в каталог только после того, как команда прошла его целиком.' },
  { title: 'Честно про дорогу', text: 'Если трасса тяжёлая зимой или после дождя — пишем это в описании, а не мелким шрифтом.' },
  { title: 'Малые группы', text: 'Гид успевает поговорить с каждым, и не приходится ждать отставших.' }
]

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero bleed-top">
        <div className="about-hero__media" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}photos/shalbuzdag-slopes.jpg`} alt="" width="1920" height="1282" />
          <div className="about-hero__scrim" />
        </div>
        <div className="container about-hero__inner">
          <p className="mono-label about-hero__kicker">С 2017 года · Махачкала</p>
          <h1 className="about-hero__title">Команда проводников по горному Дагестану</h1>
        </div>
      </section>

      <div className="container about-page__body">
        <Reveal className="about-page__intro">
          <p>
            Начинали в 2017 году с друзей и одной машины. Сейчас — 26 проверенных маршрутов и гиды из своих районов
            Дагестана. Каждый маршрут по-прежнему проходим сами, прежде чем поставить в каталог.
          </p>
        </Reveal>

        <section className="about-page__section">
          <Reveal>
            <p className="mono-label mono-label--accent">Как мы работаем</p>
            <h2 className="about-page__h2">Три правила, которые не меняем</h2>
          </Reveal>
          <ol className="about-page__principles">
            {PRINCIPLES.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.06}>
                <span className="about-page__pr-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="about-page__pr-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="about-page__section">
          <Reveal>
            <h2 className="about-page__h2">Гиды</h2>
          </Reveal>
          <div className="about-page__guides">
            {GUIDES.map((guide, index) => (
              <Reveal key={guide.name} delay={index * 0.05} className="about-page__guide">
                <span className="mono-label">{guide.place}</span>
                <h3>{guide.name}</h3>
                <p>{guide.focus}</p>
                <span className="about-page__guide-years">{guide.years} лет в горах</span>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="about-page__cta">
          <h2>Остались вопросы?</h2>
          <p>Напишите нам — расскажем, какой маршрут подойдёт под ваши даты и физическую форму.</p>
          <Button to="/contacts" size="lg" withArrow>
            Написать нам
          </Button>
        </Reveal>
      </div>
    </div>
  )
}
