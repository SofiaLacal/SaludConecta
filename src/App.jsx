import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout.jsx'
import Presentacion from '../src/Pages/Presentacion/Presentacion.jsx'
import Farmacopea from '../src/Pages/Farmacopea/Farmacopea.jsx'
import DatosFiltrados from '../src/Pages/DatosFiltrados/DatosFiltrados.jsx'
import SaludConsejos from '../src/Pages/SaludConsejos/SaludConsejos.jsx'
import SitiosInteres from '../src/Pages/SitiosInteres/SitiosInteres.jsx'

 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/presentacion" replace />} />
        <Route path="presentacion" element={<Presentacion />} />
        <Route path="farmacopea" element={<Farmacopea />} />
        <Route path="datos-filtrados" element={<DatosFiltrados />} />
        <Route path="salud-y-consejos" element={<SaludConsejos />} />
        <Route path="sitios-de-interes" element={<SitiosInteres />} />
      </Route>
    </Routes>
  )
}
 
export default App