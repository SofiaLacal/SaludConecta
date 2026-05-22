import { useState } from 'react'
import Filter from '../../components/Filter/Filter.jsx'
import './Farmacopea.css'

// Opciones de los filtros (placeholder — adaptar con los datos reales)
const CATEGORIA_OPTIONS = [
  { value: 'analgesico', label: 'Analgésico' },
  { value: 'antibiotico', label: 'Antibiótico' },
  { value: 'antihistaminico', label: 'Antihistamínico' },
  { value: 'antiinflamatorio', label: 'Antiinflamatorio' },
  { value: 'otro', label: 'Otro' },
]

const VIA_OPTIONS = [
  { value: 'oral', label: 'Oral' },
  { value: 'topica', label: 'Tópica' },
  { value: 'inhalada', label: 'Inhalada' },
  { value: 'inyectable', label: 'Inyectable' },
]

const MEDICAMENTOS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  nombre: `Medicamento ${i + 1}`,
  imagen: null,
}))

function Farmacopea() {
  // Estado de los filtros
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')
  const [via, setVia] = useState('')

  const limpiarFiltros = () => {
    setBusqueda('')
    setCategoria('')
    setVia('')
  }

  // Aquí filtraremos sobre MEDICAMENTOS cuando tengamos datos reales.
  // De momento sólo se renderiza la lista completa.
  const medicamentosVisibles = MEDICAMENTOS

  return (
    <div className="farmacopea">
      {/* === SIDEBAR DE FILTROS === */}
      <aside className="farmacopea__sidebar">
        <h2 className="filtros__title">FILTROS</h2>

        <form
          className="filtros-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="filtros-form__field">
            <label className="filtros-form__label" htmlFor="med-search">
              Buscar por nombre
            </label>
            <input
              id="med-search"
              type="search"
              className="filtros-form__input"
              placeholder="Nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="filtros-form__field">
            <label className="filtros-form__label">Categoría</label>
            <Filter
              value={categoria}
              onChange={setCategoria}
              placeholder="Selecciona..."
              options={CATEGORIA_OPTIONS}
            />
          </div>

          <div className="filtros-form__field">
            <label className="filtros-form__label">Vía de administración</label>
            <Filter
              value={via}
              onChange={setVia}
              placeholder="Selecciona..."
              options={VIA_OPTIONS}
            />
          </div>

          <div className="filtros-form__actions">
            <button
              type="submit"
              className="filtros-form__btn filtros-form__btn--apply"
            >
              Aplicar
            </button>
            <button
              type="button"
              className="filtros-form__btn filtros-form__btn--clear"
              onClick={limpiarFiltros}
            >
              Limpiar
            </button>
          </div>
        </form>
      </aside>

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="farmacopea__content">
        <div className="farmacopea__grid">
          {medicamentosVisibles.map((med) => (
            <div key={med.id} className="med-tile">
              {med.imagen ? (
                <img
                  src={med.imagen}
                  alt={med.nombre}
                  className="med-tile__img"
                />
              ) : (
                <div className="med-tile__placeholder" aria-hidden="true">
                  {/* Icono pastilla */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="9" width="18" height="6" rx="3" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                </div>
              )}
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