import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const heroImages = [
  'https://intriper.com/wp-content/uploads/2024/06/los-50-mejores-restaurantes-del-mundo-2024-ranking-mundial-scaled.jpg',
  'https://www.justroyalbcn.com/wp-content/uploads/2025/01/los-mejores-restaurantes-del-mundo-que-hacer-y-que-probar-scaled.jpg',
  'https://media.gq.com.mx/photos/649219f548a0450eaa6683fe/16:9/w_2560%2Cc_limit/Mejores-restaurantes-del-mundo-2023.jpg',
]

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentImage(prev => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    // Preload images
    const promises = heroImages.map(src => {
      return new Promise(resolve => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve
        img.src = src
      })
    })
    Promise.all(promises).then(() => setImagesLoaded(true))
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return
    const interval = setInterval(nextImage, 6000)
    return () => clearInterval(interval)
  }, [imagesLoaded, nextImage])

  return (
    <section id="inicio" className="hero">
      {/* Background images with crossfade */}
      <div className="hero__images">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`hero__image ${i === currentImage ? 'hero__image--active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      {/* Grain texture overlay */}
      <div className="hero__grain" />

      {/* Decorative corner frames */}
      <div className="hero__frame hero__frame--tl" />
      <div className="hero__frame hero__frame--tr" />
      <div className="hero__frame hero__frame--bl" />
      <div className="hero__frame hero__frame--br" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-line" />
          <span className="hero__badge-text">Gastronomía Peruana de Autor</span>
          <span className="hero__badge-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Rome</span>
          <span className="hero__title-line hero__title-line--accent">lima</span>
        </h1>

        <p className="hero__desc">
          Una experiencia culinaria que honra las raíces del Perú,<br />
          reinterpretada con pasión en el corazón de Santiago.
        </p>

        <div className="hero__actions">
          <a href="#carta" className="btn btn-outline">
            Descubrir la Carta
          </a>
          <a href="#reservas" className="btn btn-primary">
            Reservar Mesa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>

      {/* Image indicators */}
      <div className="hero__indicators">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator ${i === currentImage ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrentImage(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
