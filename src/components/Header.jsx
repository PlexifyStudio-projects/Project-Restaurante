import { useState, useEffect } from 'react'
import './Header.css'

// Logo SVG elegante - Diseño premium de restaurante peruano
const LogoIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Marco circular */}
    <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="1.5"/>

    {/* Plato estilizado */}
    <ellipse cx="22" cy="28" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>

    {/* Tenedor izquierdo */}
    <g>
      <path d="M15 11 L15 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M13.5 11 L13.5 16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M16.5 11 L16.5 16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M15 20 L15 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </g>

    {/* Cuchara derecha */}
    <g>
      <ellipse cx="29" cy="13" rx="2.5" ry="3.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <path d="M29 16.5 L29 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </g>

    {/* Vapor */}
    <path d="M20 22 Q21 20 22 22 Q23 24 24 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
  </svg>
)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
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
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <LogoIcon className="header__logo-icon" />
          <div className="header__logo-text">
            <span className="header__logo-name">Romelima</span>
            <span className="header__logo-tagline">Gastronomía Peruana</span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a href="#inicio" className="header__nav-link">
                <svg className="header__nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="header__nav-link">
                <svg className="header__nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#menu" className="header__nav-link">
                <svg className="header__nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"/>
                  <path d="M3 12h18"/>
                  <path d="M3 18h18"/>
                </svg>
                Carta
              </a>
            </li>
            <li>
              <a href="#por-que-elegirnos" className="header__nav-link">
                <svg className="header__nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Por qué elegirnos
              </a>
            </li>
            <li>
              <a href="#contacto" className="header__nav-link">
                <svg className="header__nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón Reserva Desktop */}
        <a href="#reservas" className="header__cta">
          Reservar Mesa
        </a>

        {/* Hamburger Button */}
        <button
          className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          <ul className="header__mobile-list">
            <li><a href="#inicio" className="header__mobile-link" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#nosotros" className="header__mobile-link" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#menu" className="header__mobile-link" onClick={closeMenu}>Carta</a></li>
            <li><a href="#por-que-elegirnos" className="header__mobile-link" onClick={closeMenu}>Por qué elegirnos</a></li>
            <li><a href="#contacto" className="header__mobile-link" onClick={closeMenu}>Contacto</a></li>
          </ul>
          <a href="#reservas" className="header__mobile-cta" onClick={closeMenu}>
            Reservar Mesa
          </a>
          <div className="header__mobile-contact">
            <a href="tel:+56912345678" className="header__mobile-phone">
              +56 9 1234 5678
            </a>
            <div className="header__mobile-social">
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
