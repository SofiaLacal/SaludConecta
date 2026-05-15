import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">
        © 2026 Salud Conecta . Todos los derechos reservados
      </p>
      <ul className="footer__partners">
        <li>Caixa Dualiza</li>
        <li aria-hidden="true">|</li>
        <li>COFARES</li>
        <li aria-hidden="true">|</li>
        <li>Institutos Nebrija</li>
        <li aria-hidden="true">|</li>
        <li>FP Empresa</li>
      </ul>
    </footer>
  )
}

export default Footer