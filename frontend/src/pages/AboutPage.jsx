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
  'Новый маршрут появляется в каталоге только после того, как кто-то из команды проехал его целиком.',
  'Если дорога неудобна зимой или после дождя — мы пишем это в описании, а не прячем в мелкий шрифт.',
  'Группы держим маленькими: так гид успевает поговорить с каждым и не приходится ждать отставших.'
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
          <p className="mono-label tour-hero__coords">С 2017 года · Махачкала</p>
          <h1 className="about-hero__title">Начали с одного маршрута по Сулакскому каньону</h1>
        </div>
      </section>

      <div className="container about-page__body">
        <Reveal className="about-page__intro">
          <p>
            В 2017 году мы возили друзей и знакомых на своих машинах — без сайта, без каталога, по одному маршруту.
            Сейчас у нас 26 проверенных маршрутов и команда гидов, каждый — из своего района Дагестана. Мы всё ещё
            сами проезжаем каждый маршрут перед тем, как поставить его в каталог.
          </p>
        </Reveal>

        <section className="about-page__section">
          <Reveal>
            <p className="mono-label mono-label--accent">Как мы работаем</p>
            <h2 className="about-page__h2">Три правила, которые не меняем</h2>
          </Reveal>
          <ol className="about-page__principles">
            {PRINCIPLES.map((text, index) => (
              <Reveal as="li" key={text} delay={index * 0.06}>
                <span className="about-page__pr-index">{String(index + 1).padStart(2, '0')}</span>
                <p>{text}</p>
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
