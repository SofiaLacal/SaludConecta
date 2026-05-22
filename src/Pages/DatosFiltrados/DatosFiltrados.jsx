import { useState } from 'react'
import Filter from '../../components/Filter/Filter.jsx'
import './DatosFiltrados.css'

// Opciones para los filtros — EJEMPLO PARA ADAPTAR CON DATOS REALES
const GENERO_OPTIONS = [
  { value: 'hombre', label: 'Hombre' },
  { value: 'mujer', label: 'Mujer' },
]

const EDAD_OPTIONS = [
  { value: '50-60', label: 'De 50 a 60 años' },
  { value: '60-70', label: 'De 60 a 70 años' },
]

function DatosFiltrados() {
  const [genero, setGenero] = useState('')
  const [edad, setEdad] = useState('')

  return (
    <div className="datos-filtrados">
      <div className="datos-filtrados__filters">
        <Filter
          value={genero}
          onChange={setGenero}
          placeholder="Busca por género"
          options={GENERO_OPTIONS}
        />
        <Filter
          value={edad}
          onChange={setEdad}
          placeholder="Busca por edad"
          options={EDAD_OPTIONS}
        />
      </div>

      <div className="datos-filtrados__placeholder">
        {/* Los gráficos se renderizarán aquí en función de
            { genero, edad } cuando los conectemos a datos reales */}
      </div>
    </div>
  )
}

export default DatosFiltrados