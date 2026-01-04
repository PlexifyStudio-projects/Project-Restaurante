import { useState, useEffect, useRef } from 'react'
import './Historia.css'

// Lo que nos hace diferentes
const diferenciadores = [
  {
    icon: 'map',
    title: 'Directo de Lima',
    description: 'Recetas auténticas que Romel trajo desde Perú, preparadas como allá.'
  },
  {
    icon: 'flame',
    title: 'Pasión en cada plato',
    description: 'No es solo comida, es el sabor de casa que queremos compartir contigo.'
  },
  {
    icon: 'star',
    title: 'Ingredientes frescos',
    description: 'Seleccionamos lo mejor cada día para que cada bocado sea perfecto.'
  },
  {
    icon: 'heart',
    title: 'Hecho con amor',
    description: 'Cocinamos como si fuera para nuestra propia familia. Siempre.'
  }
]

// Iconos SVG
const Icons = {
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  quote: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  )
}

// Componente de card diferenciador
const DiferenciaCard = ({ item, index, isVisible }) => (
  <div
    className={`diferencia-card ${isVisible ? 'diferencia-card--visible' : ''}`}
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="diferencia-card__icon">
      {Icons[item.icon]}
    </div>
    <h4 className="diferencia-card__title">{item.title}</h4>
    <p className="diferencia-card__desc">{item.description}</p>
    <div className="diferencia-card__glow"></div>
  </div>
)

function Historia() {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = {
    intro: useRef(null),
    story: useRef(null),
    diferencias: useRef(null),
    quote: useRef(null)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }))
        }
      })
    }, observerOptions)

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="historia">
      {/* Fondo con partículas */}
      <div className="historia__bg">
        <div className="historia__particles">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}></span>
          ))}
        </div>
      </div>

      {/* Hero de Historia */}
      <div
        ref={sectionRefs.intro}
        className={`historia__intro ${visibleSections.intro ? 'historia__intro--visible' : ''}`}
      >
        <div className="historia__intro-content">
          <span className="historia__eyebrow">Conoce</span>
          <h2 className="historia__title">Nuestra Historia</h2>
          <div className="historia__title-line">
            <span></span>
            <svg className="historia__title-icon" viewBox="0 0 44 44" fill="none">
              <path d="M22 8C22 8 18 10 18 14C18 16 19 18 20 20C21 22 21 24 21 26C21 28 20 30 20 32C20 34 21 36 22 36C23 36 24 34 24 32C24 30 23 28 23 26C23 24 23 22 24 20C25 18 26 16 26 14C26 10 22 8 22 8Z" fill="currentColor" opacity="0.9"/>
              <path d="M22 8C22 8 21 6 21 5C21 4 21.5 3 22 3C22.5 3 23 4 23 5C23 6 22 8 22 8Z" fill="currentColor" opacity="0.7"/>
            </svg>
            <span></span>
          </div>
          <p className="historia__subtitle">
            Un sueño peruano que cobra vida en Chile
          </p>
        </div>
      </div>

      {/* Sección Principal */}
      <div className="historia__container">
        <div
          ref={sectionRefs.story}
          className={`historia__story ${visibleSections.story ? 'historia__story--visible' : ''}`}
        >
          <div className="historia__story-images">
            <div className="historia__image historia__image--main">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                alt="Romel en la cocina"
                loading="lazy"
              />
              <div className="historia__image-overlay">
                <span>Romel</span>
                <small>Fundador</small>
              </div>
            </div>
            <div className="historia__image historia__image--secondary">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                alt="Interior de Romelima"
                loading="lazy"
              />
            </div>
            <div className="historia__image historia__image--accent">
              <img
                src="https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&q=80"
                alt="Ceviche peruano"
                loading="lazy"
              />
            </div>
            <div className="historia__badge">
              <span className="historia__badge-number">2025</span>
              <span className="historia__badge-text">Un nuevo<br/>comienzo</span>
            </div>
          </div>

          <div className="historia__story-content">
            <h3 className="historia__story-title">
              De Lima a tu mesa
            </h3>

            <div className="historia__story-text">
              <p>
                <span className="drop-cap">M</span>e llamo Romel, y como buen peruano,
                crecí rodeado de los sabores que hoy quiero compartir contigo. El ceviche
                de mi abuela, el lomo saltado de las fiestas familiares, el aroma del ají
                amarillo que llenaba la cocina de mi casa en Lima.
              </p>
              <p>
                Cuando llegué a Chile, lo que más extrañaba era eso: el sabor de casa.
                Y pensé, ¿por qué no traer ese pedacito de Perú aquí? No para hacer
                "comida peruana adaptada", sino la de verdad, la que me enseñaron
                en casa, la que se hace con tiempo y con cariño.
              </p>
              <p>
                En <strong>Romelima</strong> vas a encontrar eso: un lugar para disfrutar
                de un buen ceviche, un lomo saltado como corresponde, y pasarla bien.
                Las puertas están abiertas, la mesa está lista. Solo falta que vengas.
              </p>
            </div>

            <div className="historia__signature">
              <span className="historia__signature-name">Romel</span>
              <span className="historia__signature-title">Fundador de Romelima</span>
            </div>
          </div>
        </div>

        {/* Lo que nos hace diferentes */}
        <div
          id="por-que-elegirnos"
          ref={sectionRefs.diferencias}
          className={`historia__diferencias ${visibleSections.diferencias ? 'historia__diferencias--visible' : ''}`}
        >
          <div className="diferencias__header">
            <span className="diferencias__label">Por qué elegirnos</span>
            <h3 className="diferencias__title">Lo que nos hace diferentes</h3>
          </div>

          <div className="diferencias__grid">
            {diferenciadores.map((item, index) => (
              <DiferenciaCard
                key={item.title}
                item={item}
                index={index}
                isVisible={visibleSections.diferencias}
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          ref={sectionRefs.quote}
          className={`historia__quote ${visibleSections.quote ? 'historia__quote--visible' : ''}`}
        >
          <div className="quote__bg"></div>
          <div className="quote__content">
            <span className="quote__icon">{Icons.quote}</span>
            <blockquote className="quote__text">
              No vine a Chile a abrir un restaurante. Vine a compartir mi casa,
              mi familia, mis recuerdos. Y la mejor forma que conozco de hacer
              eso es a través de la comida.
            </blockquote>
            <div className="quote__author">
              <div className="quote__author-info">
                <span className="quote__author-name">Romel</span>
                <span className="quote__author-title">Fundador & Chef</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="historia__cta">
          <p className="historia__cta-text">
            Estamos recién comenzando esta aventura y queremos que seas parte de ella.
          </p>
          <a href="#menu" className="historia__cta-btn">
            Descubre nuestra carta
          </a>
        </div>
      </div>
    </section>
  )
}

export default Historia
