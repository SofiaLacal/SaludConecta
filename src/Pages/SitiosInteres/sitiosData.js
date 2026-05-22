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
  // === HOSPITALES (AMPLIAR SI NECESARIO) ===
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

  // === CENTROS DE SALUD (AMPLIAR SI NECESARIO) ===
  {
    id: 10,
    name: 'Centro de Salud Legazpi',
    category: 'centroSalud',
    lat: 40.389657,
    lng: -3.691572,
    description: 'C. de la Antracita, 2',
  },
  {
    id: 11,
    name: 'Centro de Salud Paseo Imperial',
    category: 'centroSalud',
    lat: 40.401899,
    lng: -3.71441,
    description: 'C. Toledo, 180, 28005',
  },
  {
    id: 12,
    name: 'Centro de Salud Andrés Mellado',
    category: 'centroSalud',
    lat: 40.4296,
    lng: -3.7180,
    description: 'C. Andrés Mellado, 37',
  },
  {
    id: 13,
    name: 'Centro de Salud Ciudad Jardín',
    category: 'centroSalud',
    lat: 40.448802,
    lng: -3.670621,
    description: 'C. de Pantoja, 3',
  },
  {
    id: 14,
    name: 'Centro de Salud Barrio del Pilar',
    category: 'centroSalud',
    lat: 40.479886,
    lng: -3.702428,
    description: 'C. de Finisterre, 18',
  },

  // === CENTROS DE ESPECIALIDADES (AMPLIAR SI NECESARIO) ===
  {
    id: 20,
    name: 'C.E. Pontones',
    category: 'especialidades',
    lat: 40.4356,
    lng: -3.6373,
    description: 'Ronda de Segovia, 52',
  },
  {
    id: 21,
    name: 'C.E. Hermanos García Noblejas',
    category: 'especialidades',
    lat: 40.426586,
    lng: -3.668583,
    description: 'C. Doctor Esquerdo 45',
  },

  // === CENTROS DE DÍA (AMPLIAR SI NECESARIO) ===
  {
    id: 30,
    name: 'Centro de Día Pirámides',
    category: 'centroDia',
    lat: 40.404885,
    lng: -3.709947,
    description: 'C. de Melilla 5',
  },
  {
    id: 31,
    name: 'Centro de Día Salus Mayores Ríos Rosas',
    category: 'centroDia',
    lat: 40.445817,
    lng: -3.701495,
    description: 'C. de Alenza, 3',
  },
  {
    id: 32,
    name: 'Centro de Día Para Mayores El Bosque',
    category: 'centroDia',
    lat: 40.42397,
    lng: -3.666196,
    description: 'C. de Los Peñascales, 14',
  },

  // === PARQUES (AMPLIAR SI NECESARIO ===
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
    description: 'Zona biosaludable con aparatos para hacer ejercicio al aire libre',
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