import './Logo.css'

function Logo() {
  return (
    <div className="logo">
      <svg
        viewBox="0 0 120 110"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__svg"
        aria-label="Salud Conecta"
      >
        {/* Mitad izquierda del corazón (coral) */}
        <path
          d="M60 95 C 60 95, 18 70, 18 40 C 18 22, 32 12, 45 12 C 53 12, 58 18, 60 24 L 60 95 Z"
          fill="#d97770"
        />
        {/* Mitad derecha del corazón (azul/teal) */}
        <path
          d="M60 95 C 60 95, 102 70, 102 40 C 102 22, 88 12, 75 12 C 67 12, 62 18, 60 24 L 60 95 Z"
          fill="#7ba9b8"
        />
        {/* Pequeño detalle como hoja */}
        <path
          d="M75 8 Q 82 4, 88 10 Q 84 14, 78 14 Z"
          fill="#7ba9b8"
        />
      </svg>
      <div className="logo__text">
        <span className="logo__salud">Salud</span>
        <span className="logo__conecta">conecta</span>
      </div>
    </div>
  )
}

export default Logo