import { useState, useEffect, useRef } from 'react'
import './Historia.css'

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
  )
}

function Historia() {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = {
    hero: useRef(null),
    story: useRef(null),
    gallery: useRef(null),
    diferencias: useRef(null),
    quote: useRef(null)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.dataset.section]: true }))
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

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
      {/* Ambient bg */}
      <div className="historia__ambient" />

      {/* Hero intro */}
      <div
        ref={sectionRefs.hero}
        className={`historia__hero ${visibleSections.hero ? 'historia__hero--visible' : ''}`}
      >
        <span className="section-eyebrow">Conoce</span>
        <h2 className="section-title">Nuestra Historia</h2>
        <div className="section-line">
          <span />
          <svg viewBox="0 0 44 44" fill="none">
            <path d="M22 8C22 8 18 10 18 14C18 16 19 18 20 20C21 22 21 24 21 26C21 28 20 30 20 32C20 34 21 36 22 36C23 36 24 34 24 32C24 30 23 28 23 26C23 24 23 22 24 20C25 18 26 16 26 14C26 10 22 8 22 8Z" fill="currentColor" opacity="0.9"/>
          </svg>
          <span />
        </div>
        <p className="historia__hero-sub">
          Un sueño peruano que cobra vida en Chile
        </p>
      </div>

      {/* Full-width gallery strip */}
      <div
        ref={sectionRefs.gallery}
        className={`historia__gallery ${visibleSections.gallery ? 'historia__gallery--visible' : ''}`}
      >
        <div className="historia__gallery-track">
          <div className="historia__gallery-item historia__gallery-item--tall">
            <img
              src="https://media.istockphoto.com/id/1220200250/es/foto/chef-cocinando-verduras-en-sart%C3%A9n.jpg?s=612x612&w=0&k=20&c=_8wA1IEQwfx9roStLFzhudyYFXDvbwU2sd09LhgtU7I="
              alt="Chef cocinando con fuego"
              loading="lazy"
            />
          </div>
          <div className="historia__gallery-item">
            <img
              src="https://media.istockphoto.com/id/939051976/es/foto/vista-de-elegante-caf%C3%A9-vac%C3%ADa-con-dispuestas-mesas-y-sillas-para-los-visitantes.jpg?s=612x612&w=0&k=20&c=l6AIx-3B5CHvYxoYpzV_7zEJHUsEBWlnQqOsXDPf9LY="
              alt="Interior del restaurante"
              loading="lazy"
            />
          </div>
          <div className="historia__gallery-item historia__gallery-item--tall">
            <img
              src="https://www.shutterstock.com/image-photo/beautiful-table-setting-family-christmas-260nw-2447143015.jpg"
              alt="Mesa elegante con velas"
              loading="lazy"
            />
          </div>
          <div className="historia__gallery-item">
            <img
              src="https://thumbs.dreamstime.com/b/comida-futurista-moderna-con-efectos-de-realidad-aumentados-delicioso-plato-gourmet-vino-negro-sobre-copas-en-segundo-plano-cena-385336947.jpg"
              alt="Plato gourmet"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="historia__container">
        <div
          ref={sectionRefs.story}
          className={`historia__story ${visibleSections.story ? 'historia__story--visible' : ''}`}
        >
          <div className="historia__story-images">
            <div className="historia__img historia__img--main">
              <img
                src="https://img.freepik.com/foto-gratis/chef-cocinando-cocina-mientras-lleva-ropa-profesional_23-2151208327.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Romel en la cocina"
                loading="lazy"
              />
              <div className="historia__img-label">
                <span>Romel</span>
                <small>Fundador</small>
              </div>
            </div>
            <div className="historia__img historia__img--side">
              <img
                src="https://www.shutterstock.com/image-photo/chef-preparing-flambe-dish-on-600nw-2087759398.jpg"
                alt="Ambiente del restaurante"
                loading="lazy"
              />
            </div>
            <div className="historia__year-badge">
              <span className="historia__year-number">2025</span>
              <span className="historia__year-text">Un nuevo<br/>comienzo</span>
            </div>
          </div>

          <div className="historia__story-content">
            <h3 className="historia__story-title">De Lima a tu mesa</h3>
            <div className="historia__story-text">
              <p>
                <span className="historia__drop">M</span>e llamo Romel, y como buen peruano,
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
              <span className="historia__signature-role">Fundador de Romelima</span>
            </div>
          </div>
        </div>

        {/* Diferencias */}
        <div
          id="por-que-elegirnos"
          ref={sectionRefs.diferencias}
          className={`historia__diferencias ${visibleSections.diferencias ? 'historia__diferencias--visible' : ''}`}
        >
          <div className="historia__diferencias-header">
            <span className="section-eyebrow">Por qué elegirnos</span>
            <h3 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Lo que nos hace diferentes
            </h3>
          </div>

          <div className="historia__diferencias-grid">
            {diferenciadores.map((item, i) => (
              <div
                key={item.title}
                className={`historia__card ${visibleSections.diferencias ? 'historia__card--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="historia__card-icon">
                  {Icons[item.icon]}
                </div>
                <h4 className="historia__card-title">{item.title}</h4>
                <p className="historia__card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          ref={sectionRefs.quote}
          className={`historia__quote ${visibleSections.quote ? 'historia__quote--visible' : ''}`}
        >
          <svg className="historia__quote-icon" viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="historia__quote-text">
            No vine a Chile a abrir un restaurante. Vine a compartir mi casa,
            mi familia, mis recuerdos. Y la mejor forma que conozco de hacer
            eso es a través de la comida.
          </blockquote>
          <div className="historia__quote-author">
            <span className="historia__quote-name">Romel</span>
            <span className="historia__quote-role">Fundador & Chef</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Historia
