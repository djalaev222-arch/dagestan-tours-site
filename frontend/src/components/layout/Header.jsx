import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { IconMenu, IconPhone } from '../ui/icons'
import './header.css'

const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог туров' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" onClick={() => setIsMenuOpen(false)}>
          <span className="header__logo-mark">ТД</span>
          <span className="header__logo-text">
            Тропы
            <br />
            Дагестана
          </span>
        </NavLink>

        <nav className="header__nav" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <a href="tel:+79280000000" className="header__phone">
            <IconPhone />
            +7 (928) 000-00-00
          </a>
          <Button to="/catalog" size="md">
            Оставить заявку
          </Button>
        </div>

        <button
          className="header__burger"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <IconMenu isOpen={isMenuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="header__mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Мобильная навигация"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="header__mobile-link" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a href="tel:+79280000000" className="header__mobile-link header__mobile-link--phone">
              <IconPhone />
              +7 (928) 000-00-00
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
