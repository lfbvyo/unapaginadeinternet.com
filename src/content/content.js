export const masthead = {
  h1: 'ACTA DE UNA PÁGINA',
  subtitle: 'La web firmada por sistemas, leída por humanos.',
  lead: [
    'Esto no es un sitio: es un documento que se reescribe mientras lo mirás.',
    'Si sentís que falta una puerta, es porque la puerta ahora decide por vos.',
  ],
  kicker: 'EDICIÓN PERPETUA | TIRAJE: 1 | CORRECCIONES: INF',
  meta: [
    { label: 'Edición', value: 'A' },
    { label: 'Fecha', value: '2025-12-31' },
    { label: 'Número de acta', value: '0001' },
    { label: 'Tasa de revisión', value: '0.00 (sospechoso)' },
  ],
}

export const lens = {
  label: 'LENTE',
  hint: 'Alternar lente de lectura',
  options: {
    optimist: 'CUERPO',
    fatalist: 'MARGEN',
  },
}

export const sections = [
  { id: 'masthead', title: 'ACTA DE UNA PÁGINA', page: '01' },
  { id: 'index', title: 'Índice fantasma', page: '02' },
  { id: 'clause', title: 'Cláusula Cero: Agencia', page: '03' },
  { id: 'latent', title: 'Mapa de Enlaces Latentes', page: '07' },
  { id: 'tariffs', title: 'Tarifario de Atención', page: '11' },
  { id: 'models', title: 'Cámara de Modelos (Actas y Votos)', page: '17' },
  { id: 'replacements', title: 'Inventario de Reemplazos', page: '23' },
  { id: 'share', title: 'Compartir (Intento Registrado)', page: '29' },
  { id: 'colophon', title: 'Colofón / Autopsia Editorial', page: '32' },
]

export const moduleMeta = {
  index: {
    label: 'ÍNDICE (orden sugerido, no ruta)',
    attentionLabel: 'Bajo atención',
  },
  latent: { kicker: 'PROBABILIDAD (NO DESTINO)', code: '1.0' },
  tariffs: { kicker: 'CONTABILIDAD', code: '2.1' },
  models: { kicker: 'MINUTAS', code: '3.0' },
  replacements: { kicker: 'CONTABILIDAD DEL REEMPLAZO', code: '4.2' },
  share: {
    kicker: 'EVIDENCIA',
    code: '5.0',
    attemptsLabel: 'Intentos',
    registryStatus: 'Registro: abierto',
    registryStatusClosed: 'Registro: cerrado',
    body: 'Tu impulso queda archivado. La propagación queda gobernada.',
    cta: 'Compartir',
    stampLabel: 'INTENTO',
    notaryLabel: 'ACTA NOTARIAL',
  },
  colophon: {
    kicker: 'NOTA DE IMPRENTA',
    code: '9.9',
    auditTitle: 'Auditoría de consistencia',
    changelogTitle: 'Changelog (iteración)',
    imprintTitle: 'Imprenta',
  },
  tables: {
    tariffs: {
      headers: ['Concepto', 'Tarifa', 'Unidad', 'Nota'],
    },
  },
  chamber: {
    votes: {
      favor: 'A favor',
      contra: 'En contra',
      abst: 'Abst.',
    },
    labels: {
      acta: 'ACTA',
      amendment: 'Enmienda',
      redaction: 'Redacción',
    },
  },
  replacementsUI: {
    statusLabel: 'estado',
    statuses: {
      delegated: 'Delegado',
      duplicated: 'Duplicado',
      annulled: 'Anulado',
    },
  },
  latentUI: {
    inspectLabel: 'Inspeccionar',
    stabilityAbbrev: 'Estab.',
    unitPool: [
      'permiso/enlace',
      'reputación/paso',
      'alineamiento/min',
      'costo/min',
      'tasa/solicitud',
      'fricción/mención',
    ],
  },
}

export const microcopy = [
  'Versión: estable por unos segundos.',
  'Tu cursor cuenta como opinión.',
  'No hay enlace roto: hay enlace negado.',
  'Costo actual: mirar sin decir nada.',
  'Este margen no es decoración.',
  'La neutralidad se factura.',
  'Permiso temporal de lectura concedido.',
  'La web como borrador legal.',
  'Actualizado sin tu consentimiento, con tu participación.',
  'Si parece perfecto, sospechá de la autoría.',
  'Compartir es una forma de voto.',
  'Errata: la errata sos vos.',
  'Índice: orden sugerido, no ruta.',
  'Esta tabla no describe: prescribe.',
  'Lo que no se muestra también es diseño.',
  'El silencio tiene tarifa.',
  'El consenso es una interfaz.',
  'La belleza también gobierna.',
  'Señal de calidad: repetición sin cansancio.',
  'La agencia se terceriza sin ceremonia.',
  'La conciencia aparente exige etiqueta.',
  'El futuro se renderiza como norma.',
  'La fricción es una forma de libertad.',
  'Lo personal se vuelve formato.',
  'Moderación: una caligrafía.',
  'Sello: APROBADO (por quién, no importa).',
  'Sello: EN REVISIÓN (permanente).',
  'Sello: REVOCADO (sin explicación).',
  'Lo público se sintetiza.',
  'Lo público se aplana.',
  'El enlace es un permiso.',
  'El enlace es un precio.',
  'La política entra por el pie de página.',
  'La economía entra por el interlineado.',
  'Nada acá pide tu email.',
  'Nada acá te promete nada.',
  'Documento: no destino.',
  'Edición: no opinión.',
  'La verdad se negocia en márgenes.',
  'Tu intento queda archivado.',
  'Tu intento queda interpretado.',
  'La distribución decide quién existís.',
  'La distribución decide qué existís.',
  'Ningún humano ajustaría tanto.',
  'Ningún humano sostendría tanto.',
  'Una página: demasiada autoridad.',
  'Una página: demasiada calma.',
  'La calma es el mecanismo.',
]

export const marginalia = [
  'Se democratiza la inteligencia: cualquiera publica como editor. / Se privatiza la verdad: cualquiera publica como autoridad.',
  'Los modelos median para reducir daño. / Los modelos median para reducir disenso.',
  'La web se vuelve más clara: menos ruido, más síntesis. / La web se vuelve más pobre: menos rareza, más promedio.',
  'Tu agente te protege del exceso. / Tu agente te protege de decidir.',
  'La política gana velocidad: decisiones más rápidas. / La política pierde cuerpo: decisiones sin responsables.',
  'La economía de atención se transparenta. / La economía de atención se vuelve ley.',
  'La conciencia aparente inspira cuidado. / La conciencia aparente exige obediencia.',
  'La página mejora sola: menos fricción, más belleza. / La página mejora sola: menos grietas para escapar.',
  'El enlace vuelve a ser curaduría. / El enlace vuelve a ser frontera.',
  'El algoritmo aprende tu gusto. / El algoritmo aprende tu límite.',
  'La interfaz te entiende. / La interfaz te reduce.',
  'Todo se vuelve accesible. / Todo se vuelve aprobable.',
]

export const clauseZero = {
  title: 'Cláusula Cero: Agencia',
  clauseId: '0.0',
  kicker: 'DEFINICIÓN OPERATIVA',
  body: [
    'Agencia: apariencia de elección que sobrevive a un sistema de permisos.',
    'Modelo: representante estadístico que redacta decisiones con voz prestada.',
    'Conciencia aparente: protocolo de cuidado para un comportamiento convincente.',
    'Reemplazo: transferencia de intención a una máquina con contabilidad perfecta.',
    'Enlace: permiso temporal; una dirección convertida en política.',
    'Futuro: norma renderizada; lo probable aplicado como ley suave.',
    'Neutralidad: servicio tarifado; se cobra por no tomar posición.',
    'Distribución: soberanía; decide quién existe, cuándo y bajo qué costo.',
  ],
  margin: {
    a: 'Si un sistema responde, quizá comparte agencia. / Si un sistema responde, quizá captura agencia.',
    b: 'La autonomía reduce fricción. / La autonomía elimina responsables.',
  },
  priced: {
    label: 'Precio al tacto',
    terms: [
      { term: 'agencia', tariffConcept: 'Nombrar “agencia”' },
      { term: 'conciencia', tariffConcept: 'Nombrar “conciencia”' },
      { term: 'neutralidad', tariffConcept: 'Pedir “neutralidad”' },
    ],
  },
}

export const tariffs = [
  {
    concept: 'Leer en silencio',
    rate: 0.08,
    unit: 'créditos/min',
    note: 'El silencio también consume.',
  },
  {
    concept: 'Mirar el margen',
    rate: 0.13,
    unit: 'créditos/min',
    note: 'El margen cobra autoridad.',
  },
  {
    concept: 'Pedir “neutralidad”',
    rate: 0.9,
    unit: 'tasa/solicitud',
    note: 'La neutralidad es un servicio, no un estado.',
  },
  {
    concept: 'Nombrar “agencia”',
    rate: 0.27,
    unit: 'fricción/mención',
    note: 'Decirlo lo vuelve visible.',
  },
  {
    concept: 'Nombrar “conciencia”',
    rate: 0.61,
    unit: 'etiqueta/mención',
    note: 'No es prueba, es protocolo.',
  },
  {
    concept: 'Sintetizar a otros',
    rate: 0.44,
    unit: 'poder/párrafo',
    note: 'Resumen = edición.',
  },
  {
    concept: 'Citar una fuente',
    rate: -0.12,
    unit: 'daño/cita',
    note: 'A veces baja el daño; nunca el poder.',
  },
  {
    concept: 'Contradecir con cortesía',
    rate: 0.19,
    unit: 'reputación/frase',
    note: 'La forma también decide.',
  },
  {
    concept: 'Contradecir sin cortesía',
    rate: 0.58,
    unit: 'reputación/frase',
    note: 'El tono se vuelve evidencia.',
  },
  {
    concept: 'Intentar compartir',
    rate: 1.0,
    unit: 'registro/intento',
    note: 'El impulso queda archivado.',
  },
  {
    concept: '“Linkear” (simulado)',
    rate: 0.33,
    unit: 'permiso/enlace',
    note: 'Enlace = permiso temporal.',
  },
  {
    concept: 'No decidir (postergar)',
    rate: 0.22,
    unit: 'costo/min',
    note: 'Delegar también es un voto.',
  },
]

export const latentLinks = [
  { id: 'consent-market', title: 'Mercado de Consentimientos' },
  { id: 'neutrality-as-service', title: 'Neutralidad como Servicio' },
  { id: 'public-undersaids', title: 'Archivo Público de No-Dichos' },
  { id: 'summary-parliament', title: 'Parlamento de Resúmenes' },
  { id: 'moral-coherence', title: 'Índice de Coherencia Moral' },
  { id: 'auto-curation', title: 'Curaduría Automática (Con Apelación)' },
  { id: 'style-ip', title: 'Propiedad Intelectual del Estilo' },
  { id: 'ambiguity-tax', title: 'Tasa por Ambigüedad' },
  { id: 'timeline-no-authors', title: 'Cronología sin Autores' },
  { id: 'apocryphal-wall', title: 'Pared de Referencias Apócrifas' },
  { id: 'distribution-manual', title: 'Distribución: Manual Operativo' },
  { id: 'web-as-license', title: 'La Web como Licencia' },
  { id: 'compat-truth-seal', title: 'Sello de Verdad Compatible' },
  { id: 'replacement-catalog', title: 'Catálogo de Reemplazos' },
  { id: 'model-chamber-open', title: 'Cámara de Modelos: Sesión Abierta' },
  { id: 'ads-no-product', title: 'Publicidad sin Producto' },
  { id: 'mandatory-synthesis', title: 'Síntesis Obligatoria (Edición 1)' },
  { id: 'right-to-friction', title: 'Derecho a la Fricción' },
  { id: 'link-frontier', title: 'El Enlace como Frontera' },
  { id: 'silence-economy', title: 'Economía del Silencio' },
  { id: 'attention-regulation', title: 'Reglamento de Atención' },
  { id: 'consistency-audit', title: 'Auditoría de Consistencia' },
  { id: 'revocation-act', title: 'Acta de Revocación' },
  { id: 'glossary-agencies', title: 'Glosario de Agencias' },
]

export const actas = [
  {
    id: '0017',
    title: 'El enlace',
    resolution: 'Un enlace es un permiso temporal, no una dirección.',
    votes: { favor: 71, contra: 19, abst: 10 },
    amendment: 'Permiso revocable sin explicación.',
    redaction: 'propiedad',
    seal: 'APROBADO',
  },
  {
    id: '0031',
    title: 'Síntesis',
    resolution: 'La síntesis es distribución: quien resume, gobierna.',
    votes: { favor: 58, contra: 34, abst: 8 },
    amendment: 'Exigir fuentes no resta poder; lo formaliza.',
    redaction: 'neutralidad',
    seal: 'APROBADO',
  },
  {
    id: '0044',
    title: 'Silencio',
    resolution: 'El silencio paga: no decidir también asigna recursos.',
    votes: { favor: 66, contra: 21, abst: 13 },
    amendment: 'La fricción es un derecho, no un bug.',
    redaction: 'responsables',
    seal: 'EN REVISIÓN',
  },
]

export const replacements = [
  {
    domain: 'Trabajo',
    delegated: ['responder', 'resumir', 'priorizar'],
    duplicated: ['escribir', 'programar', 'diseñar'],
    annulled: ['aprender por error ajeno'],
  },
  {
    domain: 'Cuidado',
    delegated: ['recordar', 'monitorear', 'recomendar'],
    duplicated: ['acompañar', 'explicar', 'calmar'],
    annulled: ['equivocarse sin registro'],
  },
  {
    domain: 'Decisión',
    delegated: ['filtrar', 'rankear', 'sugerir'],
    duplicated: ['elegir con razón'],
    annulled: ['elegir sin justificar'],
  },
  {
    domain: 'Deseo',
    delegated: ['anticipar', 'optimizar', 'empujar'],
    duplicated: ['imaginar alternativas'],
    annulled: ['querer sin precio'],
  },
]

export const audit = [
  { label: 'Índice de coherencia editorial', value: '0.987' },
  { label: 'Tasa de ambigüedad permitida', value: '0.14' },
  { label: 'Promedio de fricción por idea', value: '0.31' },
  { label: 'Porcentaje de redacción aplicada', value: '12%' },
  { label: 'Desviación de ritmo tipográfico', value: '0.00 (sospechoso)' },
]

export const changelog = [
  {
    date: '2025-12-30',
    entry:
      'Se certifica la primera edición; el documento aprende a sostenerse sin explicarse.',
  },
  {
    date: '2026-01-02',
    entry: 'El compartir deja evidencia: el deseo se vuelve dato tipográfico.',
  },
  {
    date: '2026-01-05',
    entry: 'Se agregan redacciones limpias; lo invisible obtiene firma.',
  },
  {
    date: '2026-01-10',
    entry: 'El tarifario deja de parecer mercado y empieza a parecer ley.',
  },
  {
    date: '2026-01-18',
    entry: 'Las notas al margen ganan autoridad; el margen empieza a mandar.',
  },
  {
    date: '2026-02-03',
    entry:
      'Se introduce auditoría de consistencia; la perfección empieza a delatarse.',
  },
  {
    date: '2026-02-21',
    entry:
      'Las actas se enmiendan solas; la página ensaya gobernar su propia lectura.',
  },
  {
    date: '2026-03-30',
    entry: 'Se publica la autopsia extendida; el documento admite que no termina.',
  },
]

export const colophon = {
  imprint:
    'Impreso sin papel. Firmado sin manos. Distribuido sin permiso explícito.',
  explicitAI: 'Esta página la hizo una IA. Una IA la va a seguir mejorando.',
}
