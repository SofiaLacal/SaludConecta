import './Farmacopea.css'

const IMAGES = Array.from({ length: 10 }, (_, i) => i + 1)

function Farmacopea() {
  return (
    <div className="farmacopea">
      <aside className="farmacopea__sidebar">
        <div className="filtros">
          <h2 className="filtros__title">FILTROS</h2>
        </div>
        <div className="filtros__panel" />
      </aside>

      <div className="farmacopea__content">
        <div className="farmacopea__grid">
          {IMAGES.map((n) => (
            <div key={n} className="img-tile">
              <span className="img-tile__label">IMAGEN</span>
            </div>
          ))}
        </div>

        <hr className="farmacopea__divider" />

        <div className="farmacopea__search">
          <svg
            className="farmacopea__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder=""
            className="farmacopea__search-input"
          />
        </div>

        <div className="farmacopea__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellat eos quaerat? Iure perspiciatis, nam doloremque suscipit
            laborum quisquam optio odit veritatis eius fuga
            <br />
            reprehenderit in sunt, deserunt quasi quibusdam expedita inventore!
            Quo assumenda vero aliquid qui natus odio dicta doloremque quia
            libero temporibus harum officiis minima atque
            <br />
            esse a, consequuntur nisi. Quo iusto consequatur blanditiis veniam
            odit consectetur voluptate?
          </p>
          <p className="farmacopea__filter-label">FILTRO MEDICAMENTOS</p>
        </div>
      </div>
    </div>
  )
}

export default Farmacopea