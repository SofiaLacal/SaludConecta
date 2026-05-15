import './SaludConsejos.css'

function SaludConsejos() {
  return (
    <div className="salud-consejos">
      {/* === Mascota (placeholder, se añadirá después) === */}
      <div className="salud-consejos__mascot">
        <div className="mascot-placeholder" aria-label="Mascota">
          {/* Aquí irá la mascota de la manzana */}
        </div>
      </div>

      <div className="salud-consejos__content">
        {/* === Filtros superiores === */}
        <div className="salud-consejos__filters">
          <button className="sc-filter" type="button">
            <span>Busca por género</span>
            <span className="sc-filter__icon">▾</span>
          </button>
          <button className="sc-filter" type="button">
            <span>Busca por edad</span>
            <span className="sc-filter__icon">▾</span>
          </button>
          <button className="sc-filter" type="button">
            <span>Busca por X</span>
            <span className="sc-filter__icon">▾</span>
          </button>
        </div>

        {/* === Bocadillo de diálogo === */}
        <div className="speech-bubble">
          <div className="speech-bubble__tail" />
        </div>

        {/* === Ejercicios recomendados === */}
        <section className="advice-section">
          <h3 className="advice-section__title">EJERICIOS RECOMENDADOS</h3>
          <div className="advice-section__circles">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="circle circle--teal" />
            ))}
          </div>
        </section>

        {/* === Consejos para la menopausia === */}
        <section className="advice-section">
          <h3 className="advice-section__title">CONSEJOS PARA LA MENOPAUSIA</h3>
          <div className="advice-section__circles">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="circle circle--coral" />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default SaludConsejos