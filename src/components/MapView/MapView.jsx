import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapView.css'

/**
 * Mapa reutilizable con filtros por categoría.
 *
 * Props:
 *   - places: array de lugares { id, name, category, lat, lng, description }
 *   - categories: objeto { categoryKey: { label, color, short } }
 *   - center: [lat, lng] (por defecto Madrid)
 *   - zoom: número (por defecto 12)
 *   - selectedId: id del sitio actualmente seleccionado (null si ninguno).
 *                 El pin correspondiente se resalta visualmente.
 *   - onSelectPlace: (place) => void  → se invoca al clicar un pin
 */


function buildIcon(config, selected = false) {
  return L.divIcon({
    className: 'map-marker',
    html: `
      <div class="map-marker__pin ${selected ? 'is-selected' : ''}" style="background:${config.color}">
        <span>${config.short}</span>
      </div>`,
    iconSize: [30, 38],
    iconAnchor: [15, 38],
  })
}

function MapView({
  places = [],
  categories = {},
  center = [40.4168, -3.7038],
  zoom = 12,
  selectedId = null,
  onSelectPlace,
}) {
  const [active, setActive] = useState(() =>
    Object.fromEntries(Object.keys(categories).map((k) => [k, true]))
  )

  const iconCache = useMemo(() => {
    const normal = {}
    const highlighted = {}
    for (const [key, config] of Object.entries(categories)) {
      normal[key] = buildIcon(config, false)
      highlighted[key] = buildIcon(config, true)
    }
    return { normal, highlighted }
  }, [categories])

  const toggle = (cat) => setActive((prev) => ({ ...prev, [cat]: !prev[cat] }))

  const visiblePlaces = places.filter((p) => active[p.category])

  return (
    <div className="map-view">
      {/* === Filtros de categorías === */}
      <div className="map-view__filters">
        {Object.entries(categories).map(([key, config]) => (
          <button
            key={key}
            type="button"
            onClick={() => toggle(key)}
            className={
              'map-filter' + (active[key] ? ' map-filter--active' : '')
            }
            style={{ '--cat-color': config.color }}
          >
            <span className="map-filter__dot" />
            <span className="map-filter__label">{config.label}</span>
          </button>
        ))}
      </div>

      {/* === Mapa === */}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="map-view__container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {visiblePlaces.map((place) => {
          const isSelected = place.id === selectedId
          const icon = isSelected
            ? iconCache.highlighted[place.category]
            : iconCache.normal[place.category]
          return (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={icon}
              eventHandlers={{
                click: () => onSelectPlace?.(place),
              }}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}

export default MapView