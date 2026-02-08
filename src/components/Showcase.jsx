import { useEffect, useRef, useState } from 'react'
import './Showcase.css'

const dishes = [
  {
    id: 1,
    name: 'Ceviche Clásico Limeño',
    desc: 'Corvina del día marinada en leche de tigre, cebolla morada, ají limo, choclo serrano y camote glaseado.',
    price: '14.990',
    image: 'https://www.shutterstock.com/image-photo/peruvian-ceviche-clasico-traditional-dish-600nw-2603574673.jpg',
    tag: 'Emblema de la casa'
  },
  {
    id: 2,
    name: 'Lomo Saltado',
    desc: 'Lomo fino salteado al wok con tomate, cebolla roja, ají amarillo, sillao y papas fritas doradas.',
    price: '19.990',
    image: 'https://t4.ftcdn.net/jpg/05/54/03/61/360_F_554036111_6LolCXOF3RUnghsqGdbM2DF3hVByV5X2.jpg',
    tag: 'Clásico peruano'
  },
  {
    id: 3,
    name: 'Pisco Sour',
    desc: 'Pisco quebranta, limón de pica, jarabe de goma, clara de huevo y bitter de angostura.',
    price: '8.990',
    image: 'https://media.istockphoto.com/id/149455390/photo/cocktail-from-chile-and-peru-pisco-sour.jpg?s=612x612&w=0&k=20&c=sP4KGp42hu2x_yBk9DqyO_ft9A1Nt6iWpeQ_iRcX8Ds=',
    tag: 'Cóctel insignia'
  },
  {
    id: 4,
    name: 'Arroz con Mariscos',
    desc: 'Arroz cremoso con camarones, langostinos, calamares y pulpo en salsa de ají panca.',
    price: '22.990',
    image: 'https://www.eatperu.com/wp-content/uploads/2020/12/arroz-con-mariscos-recipe.jpeg',
    tag: 'Del mar a tu mesa'
  }
]

function Showcase() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="showcase" ref={ref}>
      <div className="showcase__header">
        <span className="section-eyebrow">Especialidades</span>
        <h2 className="section-title">Platos Estrella</h2>
        <p className="showcase__subtitle">
          Los sabores que definen nuestra identidad gastronómica
        </p>
      </div>

      <div className={`showcase__grid ${visible ? 'showcase__grid--visible' : ''}`}>
        {dishes.map((dish, i) => (
          <article
            key={dish.id}
            className="showcase__card"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="showcase__card-image">
              <img src={dish.image} alt={dish.name} loading="lazy" />
              <div className="showcase__card-overlay">
                <span className="showcase__card-tag">{dish.tag}</span>
              </div>
            </div>
            <div className="showcase__card-body">
              <h3 className="showcase__card-name">{dish.name}</h3>
              <p className="showcase__card-desc">{dish.desc}</p>
              <div className="showcase__card-footer">
                <span className="showcase__card-price">${dish.price}</span>
                <a
                  href={`https://wa.me/56912345678?text=${encodeURIComponent(`Hola! Me interesa el ${dish.name}`)}`}
                  className="showcase__card-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Showcase
