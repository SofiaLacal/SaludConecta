import { useState } from 'react'
import Filter from '../../components/Filter/Filter.jsx'
import './SaludConsejos.css'

const GENERO_OPTIONS = [
  { value: 'hombre', label: 'Hombre' },
  { value: 'mujer', label: 'Mujer' },
]

const EDAD_OPTIONS = [
  { value: '50-60', label: 'De 50 a 60 años' },
  { value: '60-70', label: 'De 60 a 70 años' },
]

// El tercer filtro está abierto -- POR SI SE QUIERE AÑADIR OTRO FILTRO
const X_OPTIONS = [
  { value: 'opcion1', label: 'Opción 1' },
  { value: 'opcion2', label: 'Opción 2' },
]

function SaludConsejos() {
  const [genero, setGenero] = useState('')
  const [edad, setEdad] = useState('')
  const [x, setX] = useState('')

  return (
    <div className="salud-consejos">
      {/* === Mascota === */}
      <div className="salud-consejos__mascot">
        <img
          src="public/mascota.png"
          alt="Mascota Salud Conecta"
          className="salud-consejos__mascot-img"
        />
      </div>

      <div className="salud-consejos__content">
        {/* === Filtros superiores === */}
        <div className="salud-consejos__filters">
          <Filter
            size="sm"
            value={genero}
            onChange={setGenero}
            placeholder="Busca por género"
            options={GENERO_OPTIONS}
          />
          <Filter
            size="sm"
            value={edad}
            onChange={setEdad}
            placeholder="Busca por edad"
            options={EDAD_OPTIONS}
          />
          <Filter
            size="sm"
            value={x}
            onChange={setX}
            placeholder="Busca por X"
            options={X_OPTIONS}
          />
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