// Con -> react-leaflet

import { useState } from 'react'
import MapView from '../../components/MapView/MapView.jsx'
import { CATEGORIES, PLACES, MAP_CENTER, MAP_ZOOM } from '../SitiosInteres/sitiosData.js'
import './SitiosInteres.css'

function SitiosInteres() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="sitios">
      <MapView
        places={PLACES}
        categories={CATEGORIES}
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        selectedId={selected?.id}
        onSelectPlace={setSelected}
      />

      <article className="sitios-info">
        {selected ? (
          <>
            <div
              className="sitios-info__avatar"
              style={{ background: CATEGORIES[selected.category]?.color }}
            >
              <span>{CATEGORIES[selected.category]?.short}</span>
            </div>

            <div className="sitios-info__text">
              <h3 className="sitios-info__name">{selected.name}</h3>
              <p className="sitios-info__category">
                {CATEGORIES[selected.category]?.label}
              </p>
              {selected.description && (
                <p className="sitios-info__desc">{selected.description}</p>
              )}
              <a
                className="sitios-info__link"
                href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar →
              </a>
            </div>
          </>
        ) : (
          <p className="sitios-info__empty">
            Haz clic en un sitio del mapa para ver sus detalles.
          </p>
        )}
      </article>
    </div>
  )
}

export default SitiosInteres