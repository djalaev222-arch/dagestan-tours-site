import { NavLink } from 'react-router-dom'
import { CONTACTS } from '../booking/contactLinks'
import { IconMail, IconMapPin, IconPhone } from '../ui/icons'
import './footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const creditsHref = `${import.meta.env.BASE_URL}photos/CREDITS.md`

  return (
    <footer className="footer">
      <div className="container footer__top">
        <p className="footer__wordmark">Тропы&nbsp;Дагестана</p>
        <p className="footer__tagline">
          Авторские маршруты по горам, каньонам и древним городам Дагестана с гидами из местных сёл.
        </p>
      </div>

      <div className="container footer__grid">
        <nav className="footer__col" aria-label="Навигация">
          <span className="footer__col-title mono-label">Разделы</span>
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/catalog">Маршруты</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>

        <div className="footer__col">
          <span className="footer__col-title mono-label">Связь</span>
          <a href={`tel:+${CONTACTS.phoneDigits}`} className="footer__line">
            <IconPhone />
            {CONTACTS.phoneText}
          </a>
          <a href={`mailto:${CONTACTS.email}`} className="footer__line">
            <IconMail />
            {CONTACTS.email}
          </a>
          <span className="footer__line">
            <IconMapPin />
            {CONTACTS.address}
          </span>
        </div>

        <div className="footer__col">
          <span className="footer__col-title mono-label">Документы</span>
          <NavLink to="/privacy">Политика конфиденциальности</NavLink>
          <NavLink to="/offer">Публичная оферта</NavLink>
          <a href={creditsHref} target="_blank" rel="noreferrer">
            Авторы фотографий
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Тропы Дагестана</span>
        <span>ИП Иванов И. И., ИНН 000000000000</span>
        <span>Фото: Wikimedia Commons, CC BY-SA</span>
      </div>
    </footer>
  )
}
