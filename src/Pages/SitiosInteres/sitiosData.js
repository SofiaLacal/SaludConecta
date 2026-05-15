export const CATEGORIES = {
  hospital: {
    label: 'Hospitales',
    color: '#FF5F5D',
    short: 'H',
  },
  centroSalud: {
    label: 'Centros de salud',
    color: '#3F7C85',
    short: 'CS',
  },
  especialidades: {
    label: 'Centros de especialidades',
    color: '#00CCBF',
    short: 'CE',
  },
  centroDia: {
    label: 'Centros de día',
    color: '#747E7E',
    short: 'CD',
  },
  parque: {
    label: 'Parques',
    color: '#5FAA60',
    short: 'P',
  },
  parqueEjercicio: {
    label: 'Parques con ejercicios',
    color: '#2E7D32',
    short: 'PE',
  },
}

export const PLACES = [
  // === HOSPITALES (datos reales) ===
  {
    id: 1,
    name: 'Hospital Universitario La Paz',
    category: 'hospital',
    lat: 40.4762,
    lng: -3.6916,
    description: 'P.º de la Castellana, 261',
  },
  {
    id: 2,
    name: 'Hospital 12 de Octubre',
    category: 'hospital',
    lat: 40.3742,
    lng: -3.6948,
    description: 'Av. de Córdoba, s/n',
  },
  {
    id: 3,
    name: 'Hospital Gregorio Marañón',
    category: 'hospital',
    lat: 40.4203,
    lng: -3.6679,
    description: 'C. del Dr. Esquerdo, 46',
  },
  {
    id: 4,
    name: 'Hospital Clínico San Carlos',
    category: 'hospital',
    lat: 40.4395,
    lng: -3.7193,
    description: 'C. del Prof. Martín Lagos, s/n',
  },
  {
    id: 5,
    name: 'Hospital Universitario Ramón y Cajal',
    category: 'hospital',
    lat: 40.4878,
    lng: -3.6878,
    description: 'M-607, km. 9, 100',
  },
  {
    id: 6,
    name: 'Hospital La Princesa',
    category: 'hospital',
    lat: 40.4287,
    lng: -3.6800,
    description: 'C. de Diego de León, 62',
  },

  // === CENTROS DE SALUD (EJEMPLOS — sustituir por datos reales) ===
  {
    id: 10,
    name: 'C.S. Las Cortes',
    category: 'centroSalud',
    lat: 40.4163,
    lng: -3.7012,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 11,
    name: 'C.S. Goya',
    category: 'centroSalud',
    lat: 40.4243,
    lng: -3.6770,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 12,
    name: 'C.S. Argüelles',
    category: 'centroSalud',
    lat: 40.4296,
    lng: -3.7180,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 13,
    name: 'C.S. Chamberí',
    category: 'centroSalud',
    lat: 40.4358,
    lng: -3.7044,
    description: 'Ejemplo — sustituir por dato real',
  },

  // === CENTROS DE ESPECIALIDADES (EJEMPLOS) ===
  {
    id: 20,
    name: 'C.E. Hermanos García Noblejas',
    category: 'especialidades',
    lat: 40.4356,
    lng: -3.6373,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 21,
    name: 'C.E. Vicente Soldevilla',
    category: 'especialidades',
    lat: 40.3994,
    lng: -3.6620,
    description: 'Ejemplo — sustituir por dato real',
  },

  // === CENTROS DE DÍA (EJEMPLOS) ===
  {
    id: 30,
    name: 'Centro de Día Municipal Chamberí',
    category: 'centroDia',
    lat: 40.4380,
    lng: -3.7060,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 31,
    name: 'Centro de Día San Blas',
    category: 'centroDia',
    lat: 40.4317,
    lng: -3.6275,
    description: 'Ejemplo — sustituir por dato real',
  },
  {
    id: 32,
    name: 'Centro de Día Tetuán',
    category: 'centroDia',
    lat: 40.4596,
    lng: -3.7000,
    description: 'Ejemplo — sustituir por dato real',
  },

  // === PARQUES (datos reales) ===
  {
    id: 40,
    name: 'Parque del Retiro',
    category: 'parque',
    lat: 40.4153,
    lng: -3.6843,
    description: 'Patrimonio Mundial de la UNESCO',
  },
  {
    id: 41,
    name: 'Casa de Campo',
    category: 'parque',
    lat: 40.4180,
    lng: -3.7484,
    description: 'El mayor parque público de Madrid',
  },
  {
    id: 42,
    name: 'Madrid Río',
    category: 'parque',
    lat: 40.3970,
    lng: -3.7180,
    description: 'Paseo lineal por la ribera del Manzanares',
  },
  {
    id: 43,
    name: 'Parque del Oeste',
    category: 'parque',
    lat: 40.4322,
    lng: -3.7196,
    description: 'Parque histórico con rosaleda',
  },

  // === PARQUES CON EJERCICIOS / ZONAS BIOSALUDABLES ===
  {
    id: 50,
    name: 'Parque de Berlín',
    category: 'parqueEjercicio',
    lat: 40.4595,
    lng: -3.6709,
    description: 'Zona biosaludable con aparatos para mayores',
  },
  {
    id: 51,
    name: 'Parque Tierno Galván',
    category: 'parqueEjercicio',
    lat: 40.3873,
    lng: -3.6792,
    description: 'Circuito biosaludable',
  },
  {
    id: 52,
    name: 'Parque Juan Carlos I',
    category: 'parqueEjercicio',
    lat: 40.4621,
    lng: -3.6094,
    description: 'Aparatos biosaludables y circuito deportivo',
  },
  {
    id: 53,
    name: 'Parque de la Cuña Verde de O\'Donnell',
    category: 'parqueEjercicio',
    lat: 40.4204,
    lng: -3.6378,
    description: 'Aparatos para mayores y circuito de salud',
  },
]

// Centro y zoom inicial del mapa (Madrid)
export const MAP_CENTER = [40.4168, -3.7038]
export const MAP_ZOOM = 12