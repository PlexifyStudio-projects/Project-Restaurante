import { useState, useEffect, useCallback } from 'react'
import './Menu.css'

// Número de WhatsApp del restaurante
const WHATSAPP_NUMBER = '56912345678'

// Menú organizado por categorías
const menuCategories = [
  {
    id: 'ceviches',
    name: 'Ceviches & Tiraditos',
    subtitle: 'Frescura del mar peruano',
    icon: 'fish',
    dishes: [
      { id: 1, name: 'Ceviche Clásico Limeño', desc: 'Corvina del día marinada en leche de tigre, cebolla morada, ají limo, choclo y camote glaseado', price: '14.990', featured: true },
      { id: 2, name: 'Ceviche Mixto del Mar', desc: 'Pescado, pulpo, camarón y calamar en leche de tigre especial con rocoto', price: '18.990' },
      { id: 3, name: 'Tiradito Nikkei', desc: 'Finas láminas de salmón premium con salsa de maracuyá y sésamo tostado', price: '16.990' },
      { id: 4, name: 'Ceviche de Conchas Negras', desc: 'Conchas negras de Tumbes con cebolla, ají y limón. Edición limitada', price: '24.990', featured: true },
      { id: 5, name: 'Leche de Tigre Clásica', desc: 'El elixir peruano en copa con trozos de pescado, canchita y chifles', price: '9.990' },
      { id: 6, name: 'Tiradito de Pulpo', desc: 'Láminas de pulpo con salsa de olivo, ají amarillo y aceite de ajonjolí', price: '17.990' },
    ]
  },
  {
    id: 'entradas',
    name: 'Entradas',
    subtitle: 'Para comenzar con tradición',
    icon: 'appetizer',
    dishes: [
      { id: 7, name: 'Causa Limeña Tricolor', desc: 'Torre de papa amarilla con tres rellenos: pollo, atún y pulpo', price: '12.990', featured: true },
      { id: 8, name: 'Anticuchos de Corazón', desc: 'Tres brochetas marinadas 24h en ají panca con papas doradas', price: '13.990' },
      { id: 9, name: 'Papa a la Huancaína', desc: 'Papas andinas en crema de ají amarillo, queso fresco y galleta', price: '8.990' },
      { id: 10, name: 'Choros a la Chalaca', desc: 'Mejillones frescos con salsa chalaca de cebolla, tomate y culantro', price: '11.990' },
      { id: 11, name: 'Tequeños de Lomo Saltado', desc: 'Crujientes tequeños rellenos de lomo saltado con guacamole', price: '10.990' },
      { id: 12, name: 'Tamales Criollos', desc: 'Dos tamales de maíz rellenos de pollo con salsa criolla', price: '9.990' },
    ]
  },
  {
    id: 'clasicos',
    name: 'Platos Clásicos',
    subtitle: 'Lo mejor de la cocina peruana',
    icon: 'classic',
    dishes: [
      { id: 13, name: 'Lomo Saltado Tradicional', desc: 'Lomo fino salteado al wok con tomate, cebolla, ají amarillo y papas fritas', price: '19.990', featured: true },
      { id: 14, name: 'Ají de Gallina', desc: 'Pollo deshilachado en cremosa salsa de ají amarillo con arroz y papa', price: '15.990' },
      { id: 15, name: 'Arroz con Mariscos', desc: 'Arroz cremoso con camarones, calamares, pulpo y langostinos', price: '22.990', featured: true },
      { id: 16, name: 'Seco de Cordero', desc: 'Estofado de cordero en cilantro y chicha de jora con frejoles', price: '18.990' },
      { id: 17, name: 'Tacu Tacu con Lomo', desc: 'Tortilla de arroz y frejoles coronada con lomo fino al jugo', price: '21.990' },
      { id: 18, name: 'Arroz Chaufa Especial', desc: 'Arroz salteado con pollo, cerdo char siu, langostinos y huevo', price: '17.990' },
    ]
  },
  {
    id: 'fondos',
    name: 'Platos de Fondo',
    subtitle: 'Tradición en cada bocado',
    icon: 'main',
    dishes: [
      { id: 19, name: 'Pescado a lo Macho', desc: 'Corvina frita bañada en salsa de mariscos al ají colorado', price: '24.990', featured: true },
      { id: 20, name: 'Tallarines Verdes', desc: 'Pasta al pesto de albahaca peruana con bistec a la plancha', price: '16.990' },
      { id: 21, name: 'Arroz con Pato', desc: 'Arroz verde con pato confitado, cilantro y cerveza negra', price: '23.990' },
      { id: 22, name: 'Carapulcra', desc: 'Guiso ancestral de papa seca con cerdo y especias andinas', price: '17.990' },
      { id: 23, name: 'Cau Cau', desc: 'Mondongo guisado con papa amarilla, ají y hierbabuena', price: '14.990' },
      { id: 24, name: 'Pollo a la Brasa', desc: 'Medio pollo marinado al carbón con papas fritas y ensalada', price: '16.990' },
    ]
  },
  {
    id: 'especialidades',
    name: 'Especialidades del Chef',
    subtitle: 'Creaciones exclusivas de la casa',
    icon: 'star',
    dishes: [
      { id: 25, name: 'Pachamanca a la Olla', desc: 'Cerdo, pollo y cordero con papas nativas y habas. Para 2 personas', price: '45.990', featured: true },
      { id: 26, name: 'Chupe de Camarones', desc: 'Sopa cremosa de camarones gigantes con queso y huevo pochado', price: '26.990' },
      { id: 27, name: 'Jalea Mixta', desc: 'Fritura de pescado, calamar, pulpo y langostinos con yuca frita', price: '28.990', featured: true },
      { id: 28, name: 'Rocoto Relleno', desc: 'Rocoto relleno de carne especiada gratinado con pastel de papa', price: '17.990' },
      { id: 29, name: 'Sudado de Corvina', desc: 'Corvina cocida al vapor en caldo de tomate, cebolla y cilantro', price: '19.990' },
      { id: 30, name: 'Parihuela', desc: 'Sopa marina con pescado, mariscos, cangrejo y ají panca', price: '24.990' },
    ]
  },
  {
    id: 'ninos',
    name: 'Menú Infantil',
    subtitle: 'Para los pequeños de la casa',
    icon: 'kids',
    dishes: [
      { id: 31, name: 'Mini Lomo Saltado', desc: 'Versión suave de lomo saltado con papas fritas. Sin picante', price: '11.990' },
      { id: 32, name: 'Nuggets de Pescado', desc: 'Corvina empanizada con yuca frita y crema huancaína suave', price: '9.990' },
      { id: 33, name: 'Arroz con Pollo Jr', desc: 'Arroz verde con pollo deshuesado y verduras', price: '10.990' },
    ]
  },
  {
    id: 'postres',
    name: 'Postres',
    subtitle: 'Dulces tradicionales',
    icon: 'dessert',
    dishes: [
      { id: 34, name: 'Suspiro a la Limeña', desc: 'Manjar blanco con merengue italiano al oporto y canela', price: '7.990', featured: true },
      { id: 35, name: 'Picarones con Miel', desc: 'Donuts de camote y zapallo con miel de chancaca', price: '8.990' },
      { id: 36, name: 'Arroz con Leche', desc: 'Cremoso arroz con leche y mazamorra morada', price: '7.490' },
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas Sin Alcohol',
    subtitle: 'Refrescos tradicionales',
    icon: 'drink',
    dishes: [
      { id: 37, name: 'Chicha Morada', desc: 'Refresco de maíz morado con piña, membrillo y canela', price: '4.490' },
      { id: 40, name: 'Inca Kola', desc: 'La bebida dorada del Perú. Original y refrescante', price: '2.990' },
      { id: 41, name: 'Jugo de Maracuyá', desc: 'Jugo natural de maracuyá fresco y dulce', price: '3.990' },
      { id: 42, name: 'Emoliente', desc: 'Bebida caliente de hierbas andinas con miel y limón', price: '3.490' },
    ]
  },
  {
    id: 'cocteles',
    name: 'Cócteles & Licores',
    subtitle: 'Tragos con espíritu peruano',
    icon: 'cocktail',
    dishes: [
      { id: 38, name: 'Pisco Sour', desc: 'Pisco, limón, jarabe, clara de huevo y amargo de angostura', price: '8.990', featured: true },
      { id: 39, name: 'Chilcano de Maracuyá', desc: 'Pisco Italia con maracuyá, ginger ale y limón', price: '7.990' },
      { id: 43, name: 'Algarrobina', desc: 'Pisco, jarabe de algarrobina, leche, canela y huevo', price: '8.490' },
      { id: 44, name: 'Capitán', desc: 'Pisco y vermouth rojo, servido con twist de naranja', price: '7.490' },
      { id: 45, name: 'Machu Picchu', desc: 'Pisco, licor de menta, granadina y jugo de naranja', price: '8.990' },
    ]
  },
]

// Función para abrir WhatsApp
const openWhatsApp = (itemName, price) => {
  const message = encodeURIComponent(`¡Hola! Deseo pedir:\n\n${itemName}\nPrecio: $${price}\n\n¿Está disponible?`)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}

// Iconos de categoría
const CategoryIcon = ({ type }) => {
  const icons = {
    fish: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 12c3-7 13-7 15 0-2 7-12 7-15 0z"/>
        <circle cx="17" cy="12" r="1" fill="currentColor"/>
        <path d="M2 12s1.5-2 3-2-1.5 2-3 2 1.5 2 3 2-3-2-3-2"/>
      </svg>
    ),
    appetizer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="17" rx="9" ry="4"/>
        <path d="M3 17v-2a9 4 0 1 1 18 0v2"/>
        <path d="M12 6V3M9 8L7 5M15 8l2-3"/>
      </svg>
    ),
    classic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
    main: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="14" rx="9" ry="5"/>
        <path d="M3 14c0-4 4-8 9-8s9 4 9 8"/>
        <circle cx="12" cy="14" r="3"/>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    kids: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/>
      </svg>
    ),
    dessert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14l-2 9H7l-2-9z"/>
        <path d="M5 12c0-4 3-7 7-7s7 3 7 7"/>
        <path d="M12 5V3"/>
        <circle cx="12" cy="3" r="1" fill="currentColor"/>
      </svg>
    ),
    drink: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 21h8M12 15v6M5 3h14l-3 12H8L5 3z"/>
        <path d="M6 6h12"/>
      </svg>
    ),
    cocktail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 22h8M12 17v5M6 2l6 15 6-15H6z"/>
        <circle cx="12" cy="8" r="2"/>
      </svg>
    ),
  }
  return icons[type] || icons.main
}

// Ornamento de esquina
const CornerOrnament = ({ position }) => (
  <svg className={`corner-ornament corner-ornament--${position}`} viewBox="0 0 80 80" fill="none">
    <path d="M5 40 Q5 5 40 5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M8 40 Q8 8 40 8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <circle cx="40" cy="5" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="5" cy="40" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
)

// Separador decorativo
const Divider = ({ className = '' }) => (
  <svg className={`menu-divider ${className}`} viewBox="0 0 160 20" fill="none">
    <path d="M0 10 L45 10" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M115 10 L160 10" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M50 10 Q65 3 80 10 Q95 17 110 10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <circle cx="80" cy="10" r="2.5" fill="currentColor" opacity="0.7"/>
  </svg>
)

// Icono WhatsApp
const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function Menu() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [touchStart, setTouchStart] = useState(null)

  const totalPages = menuCategories.length

  const goToPage = useCallback((newPage) => {
    if (isLoading || newPage === currentPage) return
    if (newPage < 0) newPage = totalPages - 1
    if (newPage >= totalPages) newPage = 0

    setIsLoading(true)

    setTimeout(() => {
      setCurrentPage(newPage)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }, 200)
  }, [isLoading, currentPage, totalPages])

  // Touch handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (!touchStart) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      goToPage(diff > 0 ? currentPage + 1 : currentPage - 1)
    }
    setTouchStart(null)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToPage(currentPage + 1)
      if (e.key === 'ArrowLeft') goToPage(currentPage - 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPage, currentPage])

  const currentCategory = menuCategories[currentPage]

  return (
    <section id="menu" className="menu-section">
      {/* Fondo beige elegante */}
      <div className="menu-section__bg"></div>

      <div className="menu-section__container">
        {/* Header */}
        <header className="menu-section__header">
          <span className="menu-section__eyebrow">Descubre</span>
          <h2 className="menu-section__title">Nuestra Carta</h2>
          <Divider className="menu-section__divider" />
          <p className="menu-section__subtitle">
            Sabores auténticos del Perú, preparados con pasión y tradición
          </p>
        </header>

        {/* Tabs de categorías */}
        <nav className="menu-tabs">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              className={`menu-tab ${i === currentPage ? 'menu-tab--active' : ''}`}
              onClick={() => goToPage(i)}
            >
              <span className="menu-tab__icon">
                <CategoryIcon type={cat.icon} />
              </span>
              <span className="menu-tab__name">{cat.name}</span>
            </button>
          ))}
        </nav>

        {/* Libro */}
        <div
          className="menu-book"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botón anterior */}
          <button className="menu-nav menu-nav--prev" onClick={() => goToPage(currentPage - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* El libro */}
          <div className="book">
            {/* Sombra */}
            <div className="book__shadow"></div>

            {/* Lomo */}
            <div className="book__spine"></div>

            {/* Páginas apiladas izquierda */}
            <div className="book__stacked-pages book__stacked-pages--left"></div>

            {/* Páginas apiladas derecha */}
            <div className="book__stacked-pages book__stacked-pages--right"></div>

            {/* Página actual */}
            <div className={`book__page ${isLoading ? 'book__page--loading' : ''}`}>
              <div className="menu-page">
                <div className="menu-page__paper"></div>

                <CornerOrnament position="top-left" />
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />
                <CornerOrnament position="bottom-right" />

                <div className="menu-page__border"></div>

                {/* Contenido */}
                <div className="menu-page__content">
                  {/* Header de categoría */}
                  <div className="category-header">
                    <span className="category-header__icon">
                      <CategoryIcon type={currentCategory.icon} />
                    </span>
                    <h3 className="category-header__title">{currentCategory.name}</h3>
                    <p className="category-header__subtitle">{currentCategory.subtitle}</p>
                    <div className="category-header__line"></div>
                  </div>

                  {/* Items del menú */}
                  <div className={`menu-items ${currentCategory.dishes.length <= 4 ? 'menu-items--few' : ''}`}>
                    {currentCategory.dishes.map((item) => (
                      <article key={item.id} className={`menu-item ${item.featured ? 'menu-item--featured' : ''}`}>
                        <div className="menu-item__header">
                          {item.featured && <span className="menu-item__badge">★</span>}
                          <h4 className="menu-item__name">{item.name}</h4>
                          <span className="menu-item__line"></span>
                          <span className="menu-item__price">${item.price}</span>
                        </div>
                        <p className="menu-item__desc">{item.desc}</p>
                        <div className="menu-item__footer">
                          <button
                            className="menu-item__order"
                            onClick={() => openWhatsApp(item.name, item.price)}
                          >
                            <WhatsAppIcon />
                            <span>Pedir</span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Número de página elegante */}
                <div className="menu-page__pagination">
                  <div className="menu-page__pagination-inner">
                    <span className="menu-page__pagination-current">{currentPage + 1}</span>
                    <span className="menu-page__pagination-separator"></span>
                    <span className="menu-page__pagination-total">{totalPages}</span>
                  </div>
                </div>
              </div>

              {/* Overlay de carga */}
              {isLoading && (
                <div className="book__loading-overlay">
                  <div className="book__loading-spinner"></div>
                </div>
              )}
            </div>
          </div>

          {/* Botón siguiente */}
          <button className="menu-nav menu-nav--next" onClick={() => goToPage(currentPage + 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Paginación */}
        <nav className="menu-pagination">
          <div className="menu-pagination__dots">
            {menuCategories.map((_, i) => (
              <button
                key={i}
                className={`menu-pagination__dot ${i === currentPage ? 'menu-pagination__dot--active' : ''}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="menu-cta">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Me gustaría hacer una reserva en Romelima')}`}
            className="menu-cta__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>Reservar Mesa</span>
          </a>
        </div>

        <p className="menu-hint">Usa ← → o desliza para navegar</p>
      </div>
    </section>
  )
}

export default Menu
