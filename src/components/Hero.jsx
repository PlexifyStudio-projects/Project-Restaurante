import './Hero.css'

// Iconos SVG elegantes para el hero
const PlateIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

// Logo decorativo para el hero
const HeroLogo = () => (
  <svg width="28" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 8C22 8 18 10 18 14C18 16 19 18 20 20C21 22 21 24 21 26C21 28 20 30 20 32C20 34 21 36 22 36C23 36 24 34 24 32C24 30 23 28 23 26C23 24 23 22 24 20C25 18 26 16 26 14C26 10 22 8 22 8Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M22 8C22 8 21 6 21 5C21 4 21.5 3 22 3C22.5 3 23 4 23 5C23 6 22 8 22 8Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path d="M20 7C20 7 17 6 15 7C13 8 12 10 13 11C14 12 16 11 18 10C20 9 20 7 20 7Z" fill="currentColor" opacity="0.5"/>
    <path d="M24 7C24 7 27 6 29 7C31 8 32 10 31 11C30 12 28 11 26 10C24 9 24 7 24 7Z" fill="currentColor" opacity="0.5"/>
  </svg>
)

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <span className="hero__subtitle">Bienvenidos a</span>
        <h1 className="hero__title">Romelima</h1>

        <div className="hero__decorator">
          <span className="hero__decorator-line"></span>
          <span className="hero__decorator-icon">
            <HeroLogo />
          </span>
          <span className="hero__decorator-line"></span>
        </div>

        <p className="hero__description">
          Auténtica gastronomía peruana en el corazón de Chile.<br />
          Una experiencia culinaria que despierta los sentidos.
        </p>

        <div className="hero__buttons">
          <a href="#menu" className="btn btn-primary">
            Ver Carta
          </a>
          <a href="#reservas" className="btn btn-outline">
            Reservar Mesa
          </a>
        </div>

        <div className="hero__features">
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <PlateIcon />
            </span>
            <span className="hero__feature-text">Cocina de Autor</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <LeafIcon />
            </span>
            <span className="hero__feature-text">Ingredientes Frescos</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <StarIcon />
            </span>
            <span className="hero__feature-text">Recetas de Casa</span>
          </div>
        </div>
      </div>

      <a href="#menu" className="hero__scroll">
        <span>Descubre más</span>
        <div className="hero__scroll-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </a>
    </section>
  )
}

export default Hero
