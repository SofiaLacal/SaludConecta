// Con -> react-leaflet

import MapView from '../../components/MapView/MapView.jsx'
import { CATEGORIES, PLACES, MAP_CENTER, MAP_ZOOM } from './sitiosData.js'
import './SitiosInteres.css'

function SitiosInteres() {
  return (
    <div className="sitios">
      <MapView
        places={PLACES}
        categories={CATEGORIES}
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
      />
    </div>
  )
}

export default SitiosInteres