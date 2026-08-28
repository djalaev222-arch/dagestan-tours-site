import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { IconMenu, IconPhone } from '../ui/icons'
import './header.css'

const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Маршруты' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' }
]

const PHONE_HREF = 'tel:+79280000000'
const PHONE_TEXT = '+7 928 000-00-00'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" aria-label="Тропы Дагестана, на главную">
          <span className="header__logo-mark">ТД</span>
          <span className="header__logo-text">Тропы Дагестана</span>
        </NavLink>

        <nav className="header__nav" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <a href={PHONE_HREF} className="header__phone">
            <IconPhone />
            {PHONE_TEXT}
          </a>
          <Button to="/contacts" size="sm">
            Написать нам
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Мобильная навигация"
          >
            <div className="header__mobile-links">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink to={link.to} end={link.to === '/'} className="header__mobile-link">
                    <span className="header__mobile-index">{String(index + 1).padStart(2, '0')}</span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <a href={PHONE_HREF} className="header__mobile-phone">
              <IconPhone />
              {PHONE_TEXT}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
