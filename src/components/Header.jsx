import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--open' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 4L23.5 10.5L30.5 7L27 14L34 16L27 18.5L30.5 25L23.5 22L20 28.5L16.5 22L9.5 25L13 18.5L6 16L13 14L9.5 7L16.5 10.5L20 4Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
              <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">Romelima</span>
            <span className="header__logo-tagline">Gastronomía Peruana</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <a href="#inicio" className="header__link">
            <svg className="header__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"/>
            </svg>
            Inicio
          </a>
          <span className="header__nav-dot" />
          <a href="#carta" className="header__link">
            <svg className="header__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Carta
          </a>
          <span className="header__nav-dot" />
          <a href="#nosotros" className="header__link">
            <svg className="header__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Nosotros
          </a>
          <span className="header__nav-dot" />
          <a href="#contacto" className="header__link">
            <svg className="header__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a href="#reservas" className="header__cta">
          <svg className="header__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Reservar
        </a>

        {/* Burger */}
        <button
          className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}>
        <div className="header__mobile-inner">
          <div className="header__mobile-logo">
            <svg viewBox="0 0 40 40" fill="none" width="48" height="48">
              <path d="M20 4L23.5 10.5L30.5 7L27 14L34 16L27 18.5L30.5 25L23.5 22L20 28.5L16.5 22L9.5 25L13 18.5L6 16L13 14L9.5 7L16.5 10.5L20 4Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
              <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
          <nav className="header__mobile-nav">
            <a href="#inicio" onClick={closeMenu}>Inicio</a>
            <a href="#carta" onClick={closeMenu}>Carta</a>
            <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </nav>
          <a href="#reservas" className="header__mobile-cta" onClick={closeMenu}>
            Reservar Mesa
          </a>
          <div className="header__mobile-info">
            <a href="tel:+56912345678">+56 9 1234 5678</a>
            <span>Santiago, Chile</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
