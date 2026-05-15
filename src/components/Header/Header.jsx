import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import './Header.css'
 
const NAV_ITEMS = [
  { to: '/presentacion', label: 'Presentación' },
  { to: '/farmacopea', label: 'Farmacopea' },
  { to: '/datos-filtrados', label: 'Datos filtrados' },
  { to: '/salud-y-consejos', label: 'Salud y Consejos' },
  { to: '/sitios-de-interes', label: 'Sitios de interés' },
]
 
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
 
      <nav className="header__nav" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'header__link' + (isActive ? ' header__link--active' : '')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
 
export default Header