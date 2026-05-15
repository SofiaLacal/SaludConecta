import './DatosFiltrados.css'

function DatosFiltrados() {
  return (
    <div className="datos-filtrados">
      <div className="datos-filtrados__filters">
        <button className="filter-select" type="button">
          <span>Busca por género</span>
          <span className="filter-select__icon">▾</span>
        </button>
        <button className="filter-select" type="button">
          <span>Busca por edad</span>
          <span className="filter-select__icon">▾</span>
        </button>
      </div>

      <div className="datos-filtrados__placeholder">
        {/* Aquí irán los gráficos más adelante */}
      </div>
    </div>
  )
}

export default DatosFiltrados