import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import './about-page.css'

const GUIDES = [
  { name: 'Ахмед, Гуниб', focus: 'История и крепости', years: 11 },
  { name: 'Патимат, Хунзах', focus: 'Природные маршруты и водопады', years: 6 },
  { name: 'Расул, Дербент', focus: 'Старый город и ремёсла', years: 8 },
  { name: 'Заур, Южный Дагестан', focus: 'Треккинг и высокогорье', years: 9 }
]

export function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <Reveal className="about-page__intro">
          <span className="eyebrow">О компании</span>
          <h1 className="section-title">Начали с одного маршрута по Сулакскому каньону</h1>
          <p className="section-lede">
            В 2017 году мы возили друзей и знакомых на своих машинах — без сайта, без каталога, по одному маршруту.
            Сейчас у нас 26 туров и команда гидов, каждый — из своего района Дагестана. Мы всё ещё сами проезжаем
            каждый маршрут перед тем, как поставить его в каталог.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="about-page__block">
          <h2>Как мы подбираем маршруты</h2>
          <p>
            Новый тур появляется в каталоге только после того, как кто-то из команды проехал его целиком: проверил
            дорогу, договорился с гостевым домом, нашёл, где остановиться на обед. Если маршрут неудобен зимой или
            после дождя — мы отмечаем это в описании, а не убираем в мелкий шрифт.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="about-page__guides">
          <h2>Гиды</h2>
          <div className="about-page__guides-grid">
            {GUIDES.map((guide) => (
              <div key={guide.name} className="about-page__guide-card">
                <h3>{guide.name}</h3>
                <p>{guide.focus}</p>
                <span>{guide.years} лет в горах</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="about-page__cta">
          <h2>Остались вопросы?</h2>
          <p>Напишите нам — расскажем, какой маршрут подойдёт под ваши даты и физическую подготовку.</p>
          <Button to="/contacts" size="lg" withArrow>
            Связаться с нами
          </Button>
        </Reveal>
      </div>
    </div>
  )
}
