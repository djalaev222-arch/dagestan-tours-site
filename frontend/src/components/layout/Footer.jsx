import { NavLink } from 'react-router-dom'
import { IconMail, IconMapPin, IconPhone } from '../ui/icons'
import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Тропы Дагестана</span>
          <p className="footer__tagline">
            Маршруты по горам, каньонам и древним городам Дагестана с гидами из местных сёл.
          </p>
        </div>

        <nav className="footer__col" aria-label="Навигация">
          <span className="footer__col-title">Навигация</span>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/catalog">Каталог туров</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>

        <div className="footer__col">
          <span className="footer__col-title">Контакты</span>
          <a href="tel:+79280000000" className="footer__contact-line">
            <IconPhone />
            +7 (928) 000-00-00
          </a>
          <a href="mailto:info@tropy-dagestana.ru" className="footer__contact-line">
            <IconMail />
            info@tropy-dagestana.ru
          </a>
          <span className="footer__contact-line">
            <IconMapPin />
            Махачкала, ул. Даниялова, 12
          </span>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Документы</span>
          <NavLink to="/privacy">Политика конфиденциальности</NavLink>
          <NavLink to="/offer">Публичная оферта</NavLink>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Тропы Дагестана. Все права защищены.</span>
        <span>ИП Иванов И.И., ИНН 000000000000</span>
      </div>
    </footer>
  )
}
