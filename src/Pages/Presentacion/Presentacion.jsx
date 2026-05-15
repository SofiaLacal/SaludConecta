import './Presentacion.css'

const CARDS = [
  {
    title: 'Información de la Web',
    body: 'En esta página vas a encontrar información acerca de qué es SaludConecta',
    links: ['Más info', 'Más info'],
  },
  {
    title: 'Información de la App móvil',
    body: 'Aplicación pensada para dispositivos móviles',
    links: ['Aquí QR’s', 'QR informativos de la App en Google Play o Apple Store'],
  },
  {
    title: 'Información de la app gadget',
    body: 'Con posibilidad de conectar a Smart Watches para mayor control de constates y de recordatorios',
    links: ['Más info', 'Aquí QR’s'],
  },
]

function Presentacion() {
  return (
    <div className="presentacion">
      <section className="presentacion__cards">
        {CARDS.map((card) => (
          <article key={card.title} className="info-card">
            <header className="info-card__header">
              <h2>{card.title}</h2>
            </header>
            <div className="info-card__body">
              <p className="info-card__text">{card.body}</p>
              <ul className="info-card__links">
                {card.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="presentacion__partners">
        <h3 className="partners__title">
          Información de cofares, caixa, Nebrija, FP Empresa
        </h3>
        <p className="partners__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellat
          eos quaerat? Iure perspiciatis, nam doloremque suscipit laborum quisquam
          optio odit veritatis eius fuga reprehenderit in sunt, deserunt quasi
          quibusdam expedita inventore! Quo assumenda vero aliquid qui natus odio
          dicta doloremque quia libero temporibus harum officiis minima atque
          esse a, consequuntur nisi. Quo iusto consequatur blanditiis veniam odit
          consectetur voluptate?
        </p>
        <p className="partners__logos-title">
          LOGOS COFARES, CAIXA, NEBRIJA, FP EMPRESA
        </p>
        <div className="partners__logos">
          <div className="partners__logo-slot">CaixaBank<br/>dualiza</div>
          <div className="partners__logo-slot">INSTITUTO<br/>NEBRIJA</div>
          <div className="partners__logo-slot">COFARES</div>
          <div className="partners__logo-slot">FP Empresa</div>
        </div>
      </section>
    </div>
  )
}

export default Presentacion