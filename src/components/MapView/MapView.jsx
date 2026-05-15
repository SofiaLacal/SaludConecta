import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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
 *   - onSelectPlace: (place) => void  → se invoca al clicar un pin
 */

function buildIcon(config) {
  return L.divIcon({
    className: 'map-marker',
    html: `
      <div class="map-marker__pin" style="background:${config.color}">
        <span>${config.short}</span>
      </div>`,
    iconSize: [30, 38],
    iconAnchor: [15, 38],
    popupAnchor: [0, -34],
  })
}

function MapView({
  places = [],
  categories = {},
  center = [40.4168, -3.7038],
  zoom = 12,
  onSelectPlace,
}) {
  const [active, setActive] = useState(() =>
    Object.fromEntries(Object.keys(categories).map((k) => [k, true]))
  )

  const icons = useMemo(() => {
    const map = {}
    for (const [key, config] of Object.entries(categories)) {
      map[key] = buildIcon(config)
    }
    return map
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
        {visiblePlaces.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={icons[place.category]}
            eventHandlers={{
              click: () => onSelectPlace?.(place),
            }}
          >
            <Popup>
              <div className="map-popup">
                <strong className="map-popup__name">{place.name}</strong>
                <em className="map-popup__category">
                  {categories[place.category]?.label}
                </em>
                {place.description && (
                  <p className="map-popup__desc">{place.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView