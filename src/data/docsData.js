const BASE_URL = import.meta.env.BASE_URL || "/";

/**
 * Contenido estructurado derivado de la documentación publicable (Web/).
 * Es la fuente canónica de la web: ficha, bucle, mecánicas, arsenal, entorno,
 * jefe, audio, assets, roadmap, glosario y analogías.
 */

/* ------------------------------------------------------------------ *
 * Navegación agrupada (arquitectura de información en 4 bloques)
 * ------------------------------------------------------------------ */
export const navGroups = [
  {
    label: "El juego",
    icon: "◈",
    links: [
      { label: "Portada", href: "#hero" },
      { label: "Ficha y premisa", href: "#premisa" },
    ],
  },
  {
    label: "Cómo se juega",
    icon: "▶",
    links: [
      { label: "Bucle de juego", href: "#bucle" },
      { label: "Mecánicas", href: "#mecanicas" },
      { label: "Arsenal", href: "#arsenal" },
      { label: "SAHUR", href: "#combate" },
      { label: "Audio y voces", href: "#audio" },
    ],
  },
  {
    label: "Cómo se hizo",
    icon: "✦",
    links: [
      { label: "Ideación", href: "#proceso" },
      { label: "Storyboard", href: "#historia" },
      { label: "Personajes & 3D", href: "#personajes" },
    ],
  },
  {
    label: "Media y cierre",
    icon: "▤",
    links: [
      { label: "Vídeos", href: "#videos" },
      { label: "Playtesting", href: "#testimonios" },
      { label: "Galería", href: "#galeria" },
      { label: "Analogías", href: "#analogias" },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 01 — Ficha técnica y premisa
 * ------------------------------------------------------------------ */
export const fichaTecnica = [
  { campo: "Nombre", valor: "IGNIS" },
  {
    campo: "Género",
    valor: "Acción en primera persona / boss rush en realidad virtual",
  },
  {
    campo: "Plataforma principal",
    valor: "Meta Quest 2 (Android, APK standalone)",
  },
  {
    campo: "Plataforma de desarrollo",
    valor: "Unity Editor (PC, teclado y ratón como modo de prueba)",
  },
  { campo: "Motor", valor: "Unity 6000.6.0f1 (Unity 6)" },
  { campo: "Idioma de las voces", valor: "Español" },
  {
    campo: "Estilo visual",
    valor:
      "Cel-shading / cartoon («toon») sobre un almacén industrial realista",
  },
];

export const premiseNarrative = [
  {
    icon: "🏭",
    title: "El escenario",
    text: "Un almacén cerrado de proporciones modestas (≈ 6,5 m × 6,1 m × 2,75 m de alto), con suelo de concreto húmedo reflectante y muros metálicos corrugados. Es un espacio íntimo: el combate ocurre a corta distancia.",
  },
  {
    icon: "🔥",
    title: "El conflicto inicial",
    text: "Una llama central de ≈ 2,25 m de alto. El bombero debe apagarla con agua durante 2 segundos continuos.",
  },
  {
    icon: "⬆️",
    title: "El giro",
    text: "Al extinguirse, la llama no desaparece sin más: los muros arden, hay una pausa dramática de 0,2 s y el jefe asciende desde el suelo hasta su altura completa en 2,5 s con una voz de aparición.",
  },
  {
    icon: "🪵",
    title: "El antagonista",
    text: "SAHUR es un personaje brainrot (meme italiano) de carácter cómico y absurdo. No es terrorífico: insulta, bromea y se ríe. Su diseño de «muñeco de madera que se encoge y chilla más agudo» convierte la pelea en algo deliberadamente ridículo.",
  },
];

export const tonePoints = [
  "Diálogos cómicos de SAHUR en cada ataque, golpe, encogimiento y derrota.",
  "Efecto «ardilla/helio»: su voz sube un 8 % de tono por cada fase que encoge.",
  "Una derrota final en la que el jefe pide «cinco minutos más» y se va a dormir.",
];

export const oneLineLoop =
  "Apaga la llama → despierta a SAHUR → aciértale con el arma del color correcto → se encoge y salta → repite 8 veces → derrótalo → mira cómo sube al cielo.";

/* ------------------------------------------------------------------ *
 * 02 — Objetivos y bucle de juego
 * ------------------------------------------------------------------ */
export const mainObjective = {
  title: "Derrotar a SAHUR",
  text: "Se consigue superando 8 fases de color (cada una exige golpear al jefe con el arma que coincide con su color actual). Al superar la octava, el jefe cae, asciende al cielo y aparece la pantalla de victoria.",
};

export const secondaryObjectives = [
  "No morir: el jugador tiene 100 puntos de salud; los ataques del jefe (bolas de fuego, aro, salto, humo) los reducen.",
  "Gestionar el fuego del suelo: las bolas de fuego generan charcos de lava que hay que apagar con agua.",
  "Limpiar el visor: los ataques de humo ensucian la vista; hay que limpiarla con las manos para volver a ver.",
  "Elegir bien el arma: disparar con el arma equivocada no hace ningún daño.",
];

export const loopSteps = [
  {
    step: "01",
    title: "Chorro de agua continuo",
    detail: "2,0 s de agua → llama central extinguida → vapor y siseo térmico.",
  },
  {
    step: "02",
    title: "Ignición de los muros",
    detail:
      "Las llamas perimetrales suben en 2,5 s. Son permanentes: el agua NO las apaga.",
  },
  {
    step: "03",
    title: "Pausa dramática",
    detail: "0,2 s de silencio antes de la aparición.",
  },
  {
    step: "04",
    title: "Emergencia de SAHUR",
    detail:
      "Sube Y = −1,6 m → 2,38 m en 2,5 s, se activa su IA y suena la voz de aparición.",
  },
  {
    step: "05",
    title: "Primer ataque",
    detail: "El jefe ataca a los 10 s de terminar la emergencia.",
  },
  {
    step: "06",
    title: "Combate por fases de color",
    detail:
      "Rojo → manguera (3,5 s). Amarillo → extintor (3,5 s). Azul → 1 saco. Al acertar: animación Hit (0,63 s), encoge 10 % (×0,9 en 0,35 s), burla y salto a un waypoint, +8 % de tono de voz.",
  },
  {
    step: "07",
    title: "Derrota y ascensión",
    detail:
      "Tras 8 fases: animación Defeat (4,97 s), ascensión dorada (4 s) y pantalla «¡VICTORIA!» (botón A para reiniciar).",
  },
];

export const parallelAttacks = {
  pattern: "Llamas → Aro → Salto → Humo → repite",
  notes: [
    "La pausa entre ataques es de 10 s, no un ritmo fijo: ese contador solo avanza mientras el jefe está activo y no está atacando.",
    "Un ciclo completo tarda ≈ 48,6 s (40 s de esperas + 8,6 s de ataques).",
    "La vía de movimiento es independiente de la de ataques: el jefe cambia de posición cada vez que encoge, además de sus ataques programados.",
  ],
};

export const winLose = {
  victory: {
    title: "Condición de victoria",
    items: [
      "Superar las 8 fases de color.",
      "Secuencia: el jefe cae → asciende dorado al cielo → pantalla de victoria.",
      "Pantalla: «¡VICTORIA!» en verde, con «Pulsa el botón A para reiniciar».",
    ],
  },
  defeat: {
    title: "Condición de derrota",
    items: [
      "Salud del jugador a 0 HP.",
      "Pantalla: «HAS SIDO DERROTADO» en rojo, misma instrucción de reinicio.",
      "Reinicio: botón A (mando derecho) o X (mando izquierdo). No valen gatillo ni grip.",
      "Hay una espera de 0,8 s y hace falta soltar y volver a pulsar el botón.",
    ],
  },
};

export const matchDuration =
  "Combate de 8 fases. Las fases de agua/espuma requieren 3,5 s de daño continuo cada una; las de saco, 1 impacto. Con los saltos entre posiciones, una partida completa ronda los 4–8 minutos según la puntería del jugador.";

/* ------------------------------------------------------------------ *
 * 03 — Controles
 * ------------------------------------------------------------------ */
export const controlsVR = [
  {
    action: "Agarrar un objeto",
    controller: "Gatillo frontal o botón Grip lateral",
    hands: "Cerrar la mano (flexión de dedos)",
  },
  {
    action: "Apuntar / disparar agua",
    controller: "Gatillo (trigger > 0,25)",
    hands: "Flexión del índice > 75 %",
  },
  {
    action: "Disparar espuma",
    controller: "Gatillo de la mano que sostiene",
    hands: "Flexión del índice",
  },
  {
    action: "Reiniciar en pantalla final",
    controller: "A (derecha) o X (izquierda)",
    hands: "—",
  },
];

export const fingersAndMovement = [
  "Con mandos: el índice sigue al gatillo, el medio/anular/meñique siguen al Grip y el pulgar responde a los botones táctiles.",
  "Con seguimiento óptico: cada dedo se articula de forma independiente con un cierre continuo de 0,0 a 1,0.",
  "Rango máximo de flexión: 75° por falange (puño cerrado completo).",
  "Movimiento: el jugador se mueve físicamente en el espacio real (VR de pie/sala).",
  "Límite del rig: si el jugador queda fuera del escenario más de 0,35 s, se le devuelve al punto de inicio.",
  "Salto real: se detecta la subida de la cabeza (> 1,2 m/s) y se concede una ventana de esquiva de 0,9 m durante 0,85 s para esquivar el aro y la onda del salto.",
];

export const controlsEditor = [
  {
    key: "Espacio / clic izq.",
    script: "HosePhysicsController / Extintor",
    action: "Chorro de agua y disparo de espuma",
  },
  {
    key: "H",
    script: "HosePhysicsController",
    action: "Agarre/despeje de la manguera en modo Editor",
  },
  {
    key: "L",
    script: "WallFireController",
    action: "Alternar llamas de los muros",
  },
  { key: "T", script: "SahurBossAttack", action: "Forzar ataque de Llamas" },
  { key: "Y", script: "SahurBossAttack", action: "Forzar ataque de Aro" },
  { key: "U", script: "SahurBossAttack", action: "Forzar ataque de Salto" },
  { key: "H", script: "SahurBossAttack", action: "Forzar ataque de Humo" },
  {
    key: "G",
    script: "SahurBossAscension",
    action: "Reproducir solo la ascensión",
  },
  {
    key: "K",
    script: "SahurBossDamageSystem",
    action: "Forzar derrota completa del jefe",
  },
  { key: "K", script: "PlayerHealth", action: "Aplicar 15 de daño al jugador" },
  { key: "J", script: "PlayerHealth", action: "Matar al jugador" },
  { key: "O", script: "SmokeVisorEffect", action: "Aplicar humo al visor" },
  {
    key: "L",
    script: "SmokeVisorEffect",
    action: "Limpiar el visor (mantener)",
  },
];

export const weaponControls = [
  {
    id: "manguera",
    name: "Manguera (agua)",
    icon: "💧",
    accent: "border-red-500/40 text-red-300",
    steps: [
      "Agarra la boquilla (Nozzle_Handle) acercando la mano.",
      "Mantén el gatillo para expulsar agua.",
      "El agua sale en arco parabólico: apunta con antelación y bombea hacia arriba para alcanzar más lejos.",
    ],
  },
  {
    id: "extintor",
    name: "Extintor (espuma)",
    icon: "🧯",
    accent: "border-yellow-500/40 text-yellow-300",
    steps: [
      "Agarra el asa superior del extintor.",
      "Mantén el gatillo para expulsar un cono de espuma.",
      "Alcance corto (3,2 m): hay que acercarse al jefe.",
    ],
  },
  {
    id: "sacos",
    name: "Sacos de arena",
    icon: "📦",
    accent: "border-blue-500/40 text-blue-300",
    steps: [
      "Agarra un saco (radio de agarre asistido de 0,70 m).",
      "Agítalo y suéltalo para lanzarlo.",
      "La velocidad del lanzamiento hereda el movimiento real del brazo.",
    ],
  },
];

export const visorRequirements = [
  "Ajustes del visor: Movimiento → Manos y mandos → activar Seguimiento de manos y Cambio automático entre mandos y manos.",
  "OpenXR (pestaña Android): Hand Tracking Subsystem, Meta Hand Tracking Aim, Hand Tracking Data Source y Meta Quest Support (Quest 2).",
  "Permisos de Android: com.oculus.permission.HAND_TRACKING y oculus.software.handtracking (no obligatorio).",
];

/* ------------------------------------------------------------------ *
 * 04 — Mecánicas del jugador
 * ------------------------------------------------------------------ */
export const playerHealth = {
  params: [
    { label: "Salud máxima", value: "100 HP" },
    { label: "Salud inicial", value: "100 HP" },
    { label: "Invulnerabilidad tras daño", value: "0,4 s" },
    {
      label: "Modo inmortal (pruebas)",
      value: "Desactivado por defecto",
    },
  ],
  damageSources: [
    { attack: "Bola de fuego (impacto directo)", damage: "15" },
    { attack: "Bola de fuego (salpicadura, radio 1,35 m)", damage: "15" },
    { attack: "Charco de fuego del suelo", damage: "10 cada 0,5 s" },
    { attack: "Aro expansivo de fuego", damage: "25" },
    { attack: "Onda del salto del jefe", damage: "25" },
    { attack: "Humo", damage: "no daña la salud: ensucia el visor" },
  ],
  feedback: [
    "Vibración en ambos mandos (intensidad 0,65, duración 0,18 s).",
    "Flash rojo en pantalla con viñeta (degradado oscuro en los bordes).",
    "Sonido de daño.",
    "Invulnerabilidad breve (0,4 s) para evitar daño acumulado instantáneo.",
  ],
};

export const suitDamage = {
  intro:
    "El traje del bombero muestra el daño por etapas, no de forma continua (un degradado suave no se lee bien en VR).",
  stages: [
    { health: "100 % – 76 %", stage: "Intacto" },
    { health: "75 % – 51 %", stage: "Etapa 1 de 3" },
    { health: "50 % – 26 %", stage: "Etapa 2 de 3" },
    { health: "25 % – 0 %", stage: "Etapa 3 de 3" },
  ],
  notes: [
    "Transición entre etapas suave (0,8 s).",
    "Aura de fuego sobre el traje: opacidad y emisión crecen con el daño (opacidad máx. 0,95; emisión máx. 1,7).",
    "El color del aura va de amarillo → naranja → rojo conforme baja la vida.",
    "Chispas opcionales en las manos (hasta 14 partículas/s). El aura se apaga del todo a 0 de daño.",
  ],
};

export const visorMechanics = {
  intro:
    "El humo del jefe ensucia el visor y reduce la visión hasta que el jugador lo limpia con las manos.",
  params: [
    { label: "Opacidad máxima de hollín", value: "0,92 (casi ciego)" },
    {
      label: "Umbral para limpiar",
      value: "mano a menos de 0,35 m de la cara",
    },
    {
      label: "Velocidad de limpieza",
      value: "4,5 / s (bonus inicial de 0,45)",
    },
    { label: "Gracia tras limpiar", value: "2,0 s sin volver a ensuciarse" },
  ],
  notes: [
    "Se limpia acercando cualquier mano al visor y frotando.",
    "El efecto se compone de dos capas: oscurecimiento y hollín procedural.",
  ],
};

export const assistedJump = {
  intro: "Salto asistido y esquiva.",
  points: [
    "Se detecta el salto real por la velocidad de subida de la cabeza (> 1,2 m/s).",
    "Al detectarlo se concede una ventana de esquiva: 0,9 m de altura asistida durante 0,85 s.",
    "Rearme: hay que bajar cerca de la altura normal (margen 0,06 m) antes de volver a saltar.",
    "Vibración de confirmación al detectar el salto.",
    "El juego expone la franja vertical del cuerpo (pies–cabeza) para decidir si un ataque pasa por debajo (salto) o por encima (agacharse).",
  ],
};

export const vrAvatar = {
  intro:
    "El avatar del bombero se anima en primera persona controlando sus huesos a mano para que responda al movimiento real del jugador.",
  points: [
    "Los brazos usan cinemática inversa: el codo gira de forma natural siga el movimiento que siga la mano.",
    "El cuerpo y la mochila quedan 0,28 m por detrás del visor para no atravesar la cámara al mirar hacia abajo.",
    "Si la mano real supera el alcance, los brazos se estiran hasta un 30 %.",
    "Al inclinar la vista hacia el suelo, las piernas se apartan hasta 50° para despejar la vista.",
    "Al agacharse, las rodillas se flexionan de forma anatómica.",
    "El casco y el cuello se ocultan en primera persona para no tapar la vista.",
  ],
};

export const playerStates = [
  { state: "Saltando", meaning: "Dentro de la ventana de esquiva por salto" },
  { state: "Derrotado", meaning: "Salud a 0, controles bloqueados" },
  { state: "Modo de prueba", meaning: "Sin daño, para testear" },
  { state: "Visor sucio", meaning: "Hollín por encima del 5 %" },
];

/* ------------------------------------------------------------------ *
 * 08 — Fuego y entorno
 * ------------------------------------------------------------------ */
export const warehouse = {
  dims: [
    { label: "Ancho (X)", value: "≈ 6,5 m (de −3,27 a +3,27)" },
    { label: "Profundidad (Z)", value: "≈ 6,1 m (de −3,03 a +3,06)" },
    { label: "Altura de muros (Y)", value: "≈ 2,75 m" },
    {
      label: "Altura total del volumen",
      value: "≈ 7 m (el jefe sale por arriba al ascender)",
    },
  ],
  materials: [
    "Suelo: WetConcrete.mat — concreto húmedo de alta reflectividad que captura los reflejos del fuego.",
    "Muros: Metal.mat — paneles metálicos corrugados.",
  ],
  lighting: [
    "Warehouse_ReflectionProbe — proyecta el fuego sobre el suelo pulido.",
    "Ceiling_Light_1 / Ceiling_Light_2 — luces cenitales industriales.",
    "/Directional Light — luz global suave con sombras.",
  ],
};

export const fires = [
  {
    id: "central",
    icon: "🔥",
    name: "Llama central",
    accent: "border-orange-500/40",
    summary:
      "El corazón del escenario, en el centro (0, 0, 0). Altura ≈ 2,25 m; base 1,10 m × 1,10 m.",
    points: [
      "Malla volumétrica de 13 lenguas: 1.989 vértices y 6.656 triángulos, generada de forma procedural.",
      "3 espinas centrales, 6 pétalos perimetrales y 4 pétalos de núcleo, agrupados en un único MeshRenderer (menos draw calls en VR).",
      "Base de brasas: disco de 1,90 m con emisión naranja incandescente.",
      "Fire_Point_Light: alcance 8,5 m, intensidad 2,0, con titileo Perlin. Fire_Sparks_FX: 20 chispas/s.",
      "Extinción: 2,0 s de agua continuos. Al 100 % arranca la secuencia del jefe.",
    ],
  },
  {
    id: "muros",
    icon: "🧱",
    name: "Fuego perimetral de los muros",
    accent: "border-amber-500/40",
    summary:
      "172 quads verticales a lo largo del zócalo (Wall_Fire_Mesh.asset).",
    points: [
      "Ignición: la escala vertical interpola de 0 a 1 en 2,5 s y las luces de 0 a 1,8.",
      "4 luces hijas con titileo Perlin.",
      "Inmune al agua: una vez encendidas no se apagan. Son permanentes.",
      "Ajuste anti-oclusión: la malla está 5 cm dentro de la sala para que no la tape el muro.",
    ],
  },
  {
    id: "suelo",
    icon: "🌋",
    name: "Fuego de suelo",
    accent: "border-red-500/40",
    summary: "Los charcos de lava que dejan las bolas de fuego del jefe.",
    points: [
      "Radio 0,75 m. Pisarlo no daña, pero vibra en ambos mandos de forma continua.",
      "Recibir agua: vapor y siseo; el disco encoge y la luz baja de 1,6 a 0.",
      "Extinción: 2,0 s de agua, con retardo final de 1,2 s (nube de vapor).",
      "Daño configurable: el jefe lo activa (10 cada 0,5 s) cuando el charco proviene de sus bolas de fuego.",
    ],
  },
];

export const fireRelations =
  "Llama central ──(agua 2,0 s)──► se apaga ──► despierta a SAHUR · Muros (2,5 s) se encienden en paralelo y quedan permanentes · Bolas de fuego del jefe caen y dejan charcos que se apagan con agua (2,0 s).";

/* ------------------------------------------------------------------ *
 * 09 — Audio y voces
 * ------------------------------------------------------------------ */
export const audioSystem = {
  intro:
    "El jefe tiene 25 clips de voz organizados por situación. El sistema evita que se solapen y agudiza la voz a medida que el jefe encoge.",
  spatial: [
    { label: "Mezcla espacial", value: "100 % en 3D" },
    { label: "Distancia mínima", value: "2,0 m" },
    { label: "Distancia máxima", value: "24,0 m" },
    { label: "Atenuación con la distancia", value: "Lineal" },
    { label: "Efecto Doppler", value: "Desactivado" },
  ],
};

export const audioCatalog = [
  {
    group: "Aparición",
    context: "Al emerger del suelo",
    icon: "📢",
    clips: [
      {
        file: "sahur_spawn_01.wav",
        duration: "2,95 s",
        quote:
          "¡¡TUUUNG, TUNG, TUNG, SAHUUUUR!! ¡A levantarse, bombero dormilón! ¡Nadie duerme en este almacén!",
      },
      {
        file: "sahur_spawn_02.wav",
        duration: "2,95 s",
        quote:
          "¡Toc, toc, toc! ¡Llegó tu alarma en persona! ¡A ver si con fuego sí te despiertas!",
      },
      {
        file: "sahur_spawn_03.wav",
        duration: "2,95 s",
        quote:
          "¡Sahuuuur time! ¿Querías apagar mi fogata? ¡Ahora yo enciendo tu turno!",
      },
    ],
  },
  {
    group: "Ataque · Lanzar llamas",
    context: "Ataque de llamas",
    icon: "🔥",
    clips: [
      {
        file: "sahur_atk_flames_01.wav",
        duration: "2,95 s",
        quote: "¡Tung, tung! ¡Desayuno caliente a la mesa!",
      },
      {
        file: "sahur_atk_flames_02.wav",
        duration: "2,95 s",
        quote: "¡Ataja este carbón, que viene con pimienta!",
      },
    ],
  },
  {
    group: "Ataque · Aro expansivo",
    context: "Giro y bola de fuego",
    icon: "⭕",
    clips: [
      {
        file: "sahur_atk_ring_01.wav",
        duration: "2,95 s",
        quote:
          "¡Tung-tornado mañaneroooo! ¡A saltar la cuerda si no te quieres tostar!",
      },
      {
        file: "sahur_atk_ring_02.wav",
        duration: "2,95 s",
        quote: "¡Giro, giro y estallo! ¡Baila con el aro, bombero!",
      },
    ],
  },
  {
    group: "Ataque · Salto aplastante",
    context: "Salto",
    icon: "💥",
    clips: [
      {
        file: "sahur_atk_jump_01.wav",
        duration: "2,95 s",
        quote: "¡¡Bomba vaaaa!! ¡Tung desde la tercera cuerda!",
      },
      {
        file: "sahur_atk_jump_02.wav",
        duration: "2,95 s",
        quote: "¡Aplastón sahuriano! ¡No te duermas que te aplasto!",
      },
    ],
  },
  {
    group: "Provocaciones",
    context: "Guardia / inactividad",
    icon: "🗣️",
    clips: [
      {
        file: "sahur_taunt_01.wav",
        duration: "2,95 s",
        quote:
          "¡Tung, tung, tung, tung, tung! ¿Eso es todo lo que tienes, bombero de cartón?",
      },
      {
        file: "sahur_taunt_02.wav",
        duration: "2,95 s",
        quote:
          "¡Jajajaja! ¡Con esa puntería no apagas ni una vela de cumpleaños!",
      },
      {
        file: "sahur_taunt_03.wav",
        duration: "2,95 s",
        quote: "¡El que pestañea se quema! ¡Espabílate!",
      },
      {
        file: "sahur_taunt_04.wav",
        duration: "2,95 s",
        quote: "¡Sahur, sahur, sahur! ¡Tung-tung-tung-tung!",
      },
    ],
  },
  {
    group: "Daño · Agua (rojo)",
    context: "Reacción al golpe",
    icon: "💧",
    clips: [
      {
        file: "sahur_hit_water_01.wav",
        duration: "2,95 s",
        quote: "¡Glup, glup! ¡Puaj, quién le echó agua fría a mi café!",
      },
      {
        file: "sahur_hit_water_02.wav",
        duration: "2,95 s",
        quote: "¡Ayyy! ¡Se me va a oxidar el leño!",
      },
    ],
  },
  {
    group: "Daño · Espuma (amarillo)",
    context: "Reacción al golpe",
    icon: "🧯",
    clips: [
      {
        file: "sahur_hit_foam_01.wav",
        duration: "2,95 s",
        quote: "¡Puaaaj, crema de afeitar no! ¡Me pican los ojos!",
      },
      {
        file: "sahur_hit_foam_02.wav",
        duration: "2,95 s",
        quote: "¡Oye, esto no es jabón para la cara! ¡Qué mal gusto!",
      },
    ],
  },
  {
    group: "Daño · Saco (azul)",
    context: "Reacción al golpe",
    icon: "📦",
    clips: [
      {
        file: "sahur_hit_sandbag_01.wav",
        duration: "2,95 s",
        quote: "¡Pum! ¡¿Un costalazo en la cara?! ¡Con la comida no se juega!",
      },
      {
        file: "sahur_hit_sandbag_02.wav",
        duration: "2,95 s",
        quote: "¡Agh! ¡¿Quién dejó ese costal volador?! ¡Hiciste trampa!",
      },
    ],
  },
  {
    group: "Encogimiento",
    context: "Al cambiar de color",
    icon: "📉",
    clips: [
      {
        file: "sahur_shrink_01.wav",
        duration: "2,95 s",
        quote:
          "¡Oigan! ¿Por qué el techo está más alto? ¡Sigo siendo peligroso, eh!",
      },
      {
        file: "sahur_shrink_02.wav",
        duration: "2,95 s",
        quote: "¡No me achico, solo me estoy concentrando!",
      },
    ],
  },
  {
    group: "Derrota",
    context: "Ascensión final",
    icon: "✨",
    clips: [
      {
        file: "sahur_defeat_01.wav",
        duration: "5,54 s",
        quote: "Ya me dio sueñito… cinco minutos más, mami… zzz…",
      },
      {
        file: "sahur_defeat_02.wav",
        duration: "3,68 s",
        quote: "Se me apagó la mecha… me voy a dormir la siesta…",
      },
      {
        file: "sahur_defeat_03.wav",
        duration: "5,77 s",
        quote:
          "Mañana vengo a tocarles el tambor a las cuatro… de la mañana… tung…",
      },
    ],
  },
];

export const proceduralSounds = [
  "Agua: flujo presurizado en bucle, posicionado en la boquilla.",
  "Vapor/siseo térmico al apagar fuego con agua.",
  "Golpe de impacto al aterrizar el jefe (sonido sordo contra el concreto).",
  "Hollín del visor: siseo al limpiar y golpe ahogado al ensuciarse.",
  "Daño del jugador: sonido de daño y de muerte.",
];

/* ------------------------------------------------------------------ *
 * 10 — Inventario de assets
 * ------------------------------------------------------------------ */
export const assetInventory = [
  {
    title: "Modelos 3D",
    icon: "🧊",
    items: [
      [
        "Models/SAHUR.fbx",
        "Jefe (mallas thungthung + aura thung_fire, 7 clips)",
      ],
      ["Models/warehouse.fbx", "Escenario (almacén)"],
      ["Models/new_fire_fighter.fbx", "Avatar del jugador (bombero)"],
      ["Models/backpack.fbx", "Mochila SCBA + manguera (Mochila_Completa)"],
      ["Models/extintorblend.fbx", "Extintor"],
      ["Models/saco_arena.fbx", "Saco de arena"],
      ["Models/VR_Firefighter.fbx", "Avatar VR alternativo"],
      [
        "Models/Flame3D_Pointed_Cluster.asset",
        "Malla de la llama central (13 lenguas)",
      ],
      ["Models/Flame3D_Embers_Base_Mesh.asset", "Base de brasas"],
      ["Models/Ground_Fire_Circle_Mesh.asset", "Disco de lava del suelo"],
      ["Models/Wall_Fire_Mesh.asset", "172 quads de fuego perimetral"],
    ],
  },
  {
    title: "Prefabs",
    icon: "📦",
    items: [
      [
        "Prefabs/SAHUR_Boss.prefab",
        "Jefe + colisionador + Animator + audio + ascensión",
      ],
      ["Prefabs/Extinguisher.prefab", "Extintor + espuma"],
      ["Prefabs/Sandbag.prefab", "Saco de arena"],
      ["Prefabs/Ground_Fire_Patch.prefab", "Charco de lava del suelo"],
      ["Prefabs/FireRingShockwave.prefab", "Aro/onda expansiva de fuego"],
      ["Prefabs/Fireball_Projectile.prefab", "Bola de fuego del jefe"],
      [
        "Prefabs/Smoke_Zone_Attack.prefab",
        "Nube de humo con partículas y trigger",
      ],
    ],
  },
  {
    title: "Shaders",
    icon: "🎨",
    items: [
      ["Shaders/Flame3D_Shader.shader", "Llama central volumétrica"],
      ["Shaders/FlameShader.shader", "Fuego perimetral de muros"],
      ["Shaders/CartoonLavaGround.shader", "Lava del suelo (4 bandas)"],
      ["Shaders/CartoonFlameBit.shader", "Fragmentos/lenguas bajas de lava"],
      ["Shaders/CartoonFoamShader.shader", "Espuma del extintor"],
      ["Shaders/WaterStreamShader.shader", "Chorro de agua"],
      ["Shaders/ToonAuraFireShader.shader", "Aura de fuego (traje / jefe)"],
      ["Shaders/ToonFireRingShader.shader", "Aro expansivo"],
      ["Shaders/InvisibleMaterial.shader", "Ocultar casco/cuello del avatar"],
    ],
  },
  {
    title: "Materiales destacados",
    icon: "🧱",
    items: [
      ["Materials/WetConcrete.mat", "Suelo reflectante"],
      ["Materials/Metal.mat", "Muros corrugados"],
      ["Materials/Sandbag_Blue.mat", "RGB (0,12 · 0,45 · 0,95)"],
      ["Materials/Sandbag_Rope.mat", "Cuerda del saco"],
      ["Materials/Flame3D_Cluster_Material.mat", "Paleta de la llama central"],
      ["Resources/FoamStreamMaterial.mat", "Espuma"],
      ["Materials/thung_texture.mat", "Textura del jefe (URP/Lit con emisión)"],
    ],
  },
  {
    title: "Animaciones",
    icon: "🎞️",
    items: [
      [
        "Animations/SAHUR_Boss.controller",
        "6 estados + thung_inflate, 0 parámetros",
      ],
      [
        "Animations/Firefighter_Avatar.controller",
        "Avatar (desactivado en runtime)",
      ],
    ],
  },
  {
    title: "Scripts (por rol)",
    icon: "⚙️",
    items: [
      [
        "CenterFireBossController.cs",
        "Extinción central, vapor, ignición de muros, aparición",
      ],
      ["SahurBossAttack.cs", "IA de ataques y patrón"],
      [
        "SahurBossMovement.cs",
        "Salto parabólico, waypoints, onda de aterrizaje",
      ],
      [
        "SahurBossDamageSystem.cs",
        "Fases de color, daño, encogimiento, derrota",
      ],
      ["SahurBossAscension.cs", "Ascensión dorada final"],
      ["SahurBossAudioSystem.cs", "Voces, prioridades, pitch"],
      ["WaterJetController.cs", "Chorro de agua balístico"],
      ["HosePhysicsController.cs", "Física de la manguera"],
      [
        "ExtinguisherItem.cs / ExtinguisherController.cs",
        "Agarre y espuma del extintor",
      ],
      ["SandbagItem.cs", "Agarre y lanzamiento del saco"],
      ["GroundFirePatch.cs", "Charco de lava del suelo"],
      ["FireballProjectile.cs", "Bola de fuego"],
      ["FireRingShockwave.cs", "Aro/onda"],
      ["SmokeZoneAttack.cs", "Nube de humo"],
      ["SmokeVisorEffect.cs", "Hollín y limpieza del visor"],
      ["FirefighterSuitDamage.cs", "Quemaduras del traje"],
      ["PlayerHealth.cs", "Salud, daño, salto asistido, pantallas finales"],
      ["VRAvatarController.cs", "Cuerpo VR, IK, manos"],
      ["VRRoomCollision.cs", "Límites de la sala"],
      ["HandGrabRegistry.cs", "Registro de agarres de manos"],
      ["FoamSplat.cs", "Manchas de espuma"],
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 11 — Balance numérico
 * ------------------------------------------------------------------ */
export const balanceTables = [
  {
    title: "Jugador",
    columns: ["Parámetro", "Valor", "Fuente"],
    rows: [
      ["Salud máxima", "100", "PlayerHealth"],
      ["Invulnerabilidad tras daño", "0,4 s", "PlayerHealth"],
      ["Retardo de reinicio", "0,8 s", "PlayerHealth"],
      ["Umbral de salto", "1,2 m/s", "PlayerHealth"],
      ["Altura de salto asistido", "0,9 m", "PlayerHealth"],
      ["Duración del salto asistido", "0,85 s", "PlayerHealth"],
      ["Margen de rearme", "0,06 m", "PlayerHealth"],
      ["Calibración de postura", "0,5 / 2,5 por s", "PlayerHealth"],
      ["Vibración de daño", "0,65 · 0,18 s", "PlayerHealth"],
      ["Umbrales del traje", "0,75 / 0,5 / 0,25", "FirefighterSuitDamage"],
      ["Transición del traje", "0,8 s", "FirefighterSuitDamage"],
      [
        "Aura del traje",
        "opacidad 0,95 · emisión 1,7",
        "FirefighterSuitDamage",
      ],
      ["Hollín máximo", "0,92", "SmokeVisorEffect"],
      ["Distancia de limpieza", "0,35 m", "SmokeVisorEffect"],
      ["Velocidad de limpieza", "4,5 / s", "SmokeVisorEffect"],
      ["Gracia tras limpiar", "2,0 s", "SmokeVisorEffect"],
      ["Límite de sala", "0,5 m · reset 0,35 s", "VRRoomCollision"],
    ],
  },
  {
    title: "Arsenal",
    columns: ["Parámetro", "Valor"],
    rows: [
      ["Agua — velocidad", "8,5 m/s"],
      ["Agua — gravedad", "1,35"],
      ["Agua — vida", "1,1 s"],
      ["Agua — pasos balísticos", "8"],
      ["Agua — alcance útil", "≈ 3,5 m (4,8 m arqueando)"],
      ["Agua — háptica", "0,35 cada 0,08 s"],
      ["Extintor — alcance", "3,2 m"],
      ["Extintor — SphereCast", "radio 0,40 m"],
      ["Extintor — cono", "13°"],
      ["Extintor — mancha", "8,5 s · máx. 45 · cada 0,12 s"],
      ["Extintor — agarre", "0,18 m"],
      ["Saco — masa", "6,0 kg"],
      ["Saco — rebote", "0,15"],
      ["Saco — agarre", "0,70 m"],
      ["Saco — multiplicador de lanzamiento", "×1,5"],
      ["Saco — velocidad mínima de daño", "0,6 m/s"],
    ],
  },
  {
    title: "Jefe y fases",
    columns: ["Parámetro", "Valor"],
    rows: [
      ["stagesBeforeDefeat", "8"],
      ["timeToChangeColor", "3,5 s"],
      ["impactsToChangeColor", "1"],
      ["scaleFactorPerStage", "0,9 (compuesto: 0,9⁸ ≈ 0,43)"],
      ["shrinkTransitionDuration", "0,35 s"],
      ["minSandbagPhases / max", "3 / 3"],
      ["attackInterval", "10 s (pausa, no periodo)"],
      ["lookAtRotationSpeed", "150°/s"],
      ["hitAnimDuration", "0,65 s"],
      ["defeatClipDuration", "5 s (clip real: 4,97 s)"],
      ["postAscendDelay", "0,5 s"],
    ],
  },
  {
    title: "Ataques del jefe (prefab manda en escena)",
    columns: ["Parámetro", "Valor"],
    rows: [
      ["launchDelayInAnim (llamas)", "1,10 s"],
      ["projectileCount", "3"],
      ["fireballDamage", "15"],
      ["groundFireTickDamage", "10 cada 0,5 s"],
      ["ringSpawnDelayInAnim", "3,0 s (prefab) / 3,87 s (script)"],
      ["ringDuration", "1,5 s (prefab) / 1,8 s (script)"],
      ["ringMaxRadius", "7 m (prefab) / 6,0 m (script)"],
      ["ringDamage", "25"],
      ["jumpDuration", "1,5 s (prefab) / 1,9 s (script)"],
      ["jumpApexHeight", "2,5 m (prefab) / 1,8 m (script)"],
      ["landingWaveRadius", "3,5 m"],
      ["landingWaveDamage", "25"],
      ["smokeZoneDuration", "12 s (prefab de humo)"],
      ["waterToDisperse (humo)", "1,5 s"],
    ],
  },
  {
    title: "Fuego y ascensión",
    columns: ["Parámetro", "Valor"],
    rows: [
      ["Extinción de llama central", "2,0 s"],
      ["Ignición de muros", "2,5 s"],
      ["Emergencia del jefe", "Y −1,6 → 2,38 en 2,5 s"],
      ["Pausa dramática", "0,2 s"],
      ["Llama central", "2,25 m · 1,10 × 1,10 m"],
      ["Charco de lava — radio", "0,75 m"],
      ["Charco — extinción", "2,0 s · retardo 1,2 s"],
      ["Ascensión — altura", "9 m"],
      ["Ascensión — duración", "4 s"],
      ["Ascensión — escala final", "0,55"],
      ["Ascensión — luz", "intensidad 8 · alcance 14"],
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 12 — Analogías para la vida
 * ------------------------------------------------------------------ */
export const analogiesQuote =
  "IGNIS no va de apagar un fuego. Va de entender que cada problema tiene su color, que los problemas encogen cuando los golpeas bien, y que a veces hay que limpiar el visor antes de volver a ver.";

/* ------------------------------------------------------------------ *
 * 13 — Ideas y hoja de ruta
 * ------------------------------------------------------------------ */
export const roadmap = [
  {
    group: "Jugabilidad",
    icon: "🎮",
    items: [
      {
        title: "Modos de dificultad",
        detail:
          "Fácil / Normal / Bomba (sin salto asistido, aro más rápido, fases de 5 s).",
        priority: "Bajo",
      },
      {
        title: "Contrarreloj / marcador",
        detail: "Tiempo total y récord local, sin backend.",
        priority: "Bajo",
      },
      {
        title: "Fases de color extra",
        detail:
          "Púrpura, verde y blanco, cada una con un arma nueva (hacha, pala, química).",
        priority: "Alto",
      },
      {
        title: "Fases con combinación",
        detail: "Cambios de color a mitad de daño: hay que reaccionar.",
        priority: "Medio",
      },
      {
        title: "Nuevos ataques del jefe",
        detail:
          "Proyectil dirigido, invocación de «hijos» y terremoto con patrón.",
        priority: "Medio",
      },
      {
        title: "Multijugador cooperativo",
        detail: "Dos bomberos con sincronización de fases por red.",
        priority: "Alto",
      },
    ],
  },
  {
    group: "Contenido y presentación",
    icon: "🧩",
    items: [
      {
        title: "Selector de armas",
        detail: "Elegir 2 de 3 antes de empezar.",
        priority: "Medio",
      },
      {
        title: "Skins de escenario",
        detail: "Fábrica, cocina, aula, nave espacial con la misma lógica.",
        priority: "Medio",
      },
      {
        title: "Modo «apagado puro»",
        detail: "Sin jefe: extinguir focos contra reloj (entrenamiento).",
        priority: "Bajo",
      },
      {
        title: "Tutorial guiado",
        detail: "Manos fantasma que enseñan agarre, chorro y salto.",
        priority: "Medio",
      },
    ],
  },
  {
    group: "Pulido (deuda a convertir en features)",
    icon: "🔧",
    items: [
      {
        title: "Ajustar jumpDuration",
        detail:
          "El clip de salto dura 1,97 s y el salto 1,5 s en prefab: la animación se corta.",
        priority: "Bajo",
      },
      {
        title: "Retardar el aro a 3,0 s",
        detail: "Para que el efecto coincida con el clímax visual.",
        priority: "Bajo",
      },
      {
        title: "Unificar smokeZoneDuration",
        detail:
          "Campo muerto: consolidar la duración del humo en un solo sitio.",
        priority: "Bajo",
      },
      {
        title: "Evitar que un cambio de fase corte un ataque",
        detail:
          "AdvanceStageSteps hace CrossFade saltándose el guard IsAttacking.",
        priority: "Medio",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 14 — Glosario y notas
 * ------------------------------------------------------------------ */
export const glossary = [
  {
    term: "SAHUR",
    meaning: "Jefe del juego (Tung Tung Tung Sahur), personaje brainrot.",
  },
  {
    term: "Fase de color",
    meaning:
      "Estado actual del jefe (rojo/amarillo/azul) que define su debilidad.",
  },
  {
    term: "Waypoint",
    meaning: "Punto del almacén al que el jefe salta al cambiar de fase.",
  },
  { term: "Hollín", meaning: "Suciedad del visor que reduce la visión." },
  {
    term: "Leg Sweep",
    meaning:
      "Retirada automática de las piernas del avatar al mirar hacia abajo.",
  },
  {
    term: "Arm stretch",
    meaning: "Estiramiento de los brazos del avatar hasta un 30 %.",
  },
  { term: "Two-Bone IK", meaning: "Resolución inversa de hombro–codo–muñeca." },
  {
    term: "SCBA",
    meaning: "Mochila de aire/agua del bombero (aquí, la manguera).",
  },
  {
    term: "Cartoon / toon",
    meaning: "Estilo de sombreado por bandas de color.",
  },
  {
    term: "Watchdog",
    meaning: "Mecanismo de seguridad que repara un estado colgado.",
  },
  {
    term: "OverlapSphere / SphereCast",
    meaning: "Consultas de física volumétricas (no un rayo fino).",
  },
  {
    term: "Anti-multigolpe",
    meaning: "Regla que impide que un mismo lanzamiento cuente varias veces.",
  },
  {
    term: "Pool / charco",
    meaning: "Parche de lava que deja una bola de fuego al caer.",
  },
];

export const knownDiscrepancies = {
  columns: ["Parámetro", "Doc / script", "Prefab (real)"],
  rows: [
    ["stagesBeforeDefeat", "6 (obsoleto) / 8", "8"],
    ["ringSpawnDelayInAnim", "3,87 s", "3,0 s"],
    ["ringDuration", "1,8 s", "1,5 s"],
    ["ringMaxRadius", "6,0 m", "7 m"],
    ["ringHeightOffset", "0,5 m", "0 m"],
    ["jumpDuration", "1,9 s", "1,5 s"],
    ["jumpApexHeight", "1,8 m", "2,5 m"],
    ["minDistanceToPlayer", "1,8 m", "1 m"],
    ["Daño de onda de aterrizaje", "35 (doc antigua)", "25"],
  ],
};

export const techDebt = [
  'AdvanceStageSteps corta el ataque en curso: un cambio de fase hace CrossFade("Hit") saltándose el guard IsAttacking.',
  "SAHUR_Boss.prefab: 3 referencias rotas preexistentes.",
  "29–33 warnings por campos [SerializeField] sin usar (teclas de prueba, smokeZoneDuration, etc.).",
  "smokeZoneDuration muerto: se define pero nunca se lee.",
  "Alternating y FullRotation son idénticos: redundancia de código.",
];

/* ------------------------------------------------------------------ *
 * Sección de vídeos
 * ------------------------------------------------------------------ */
export const videos = [
  {
    id: "prototipo-funcional",
    kind: "local",
    featured: true,
    title: "Última versión funcional",
    subtitle: "Gameplay · build actual",
    description:
      "Así se ve el juego hoy: combate por colores, encogimiento del jefe y ascensión dorada en Meta Quest 2.",
    src: `${BASE_URL}videos/prototipo-funcional.mp4`,
    poster: `${BASE_URL}videos/posters/prototipo-funcional.jpg`,
    tag: "Build actual",
    accent: "orange",
  },
  {
    id: "prototipo-1",
    kind: "local",
    featured: false,
    title: "Prototipo 1 — Primera versión",
    subtitle: "Primera iteración",
    description:
      "El primer prototipo jugable: mecánicas base de extinción, agarre de herramientas y lectura de colores.",
    src: `${BASE_URL}videos/prototipo-1-primera-version.mp4`,
    poster: `${BASE_URL}videos/posters/prototipo-1.jpg`,
    tag: "Versión 1",
    accent: "slate",
  },
  {
    id: "test-02",
    kind: "youtube",
    youtubeId: "7WFMFoNJqJE",
    featured: false,
    title: "Prueba de usuario 02",
    subtitle: "Primer prototipo jugable",
    description:
      "Sesión de playtesting: feedback sobre la mecánica deductiva por colores y los tiempos de retirada del enemigo.",
    tag: "Playtesting",
    accent: "yellow",
  },
  {
    id: "test-03",
    kind: "youtube",
    youtubeId: "OaL1pIoGjqA",
    featured: false,
    title: "Prueba de usuario 03",
    subtitle: "Ajustes de jugabilidad",
    description:
      "Playtesting centrado en la claridad del indicador de vida y en la amenaza del entorno para fomentar el movimiento.",
    tag: "Playtesting",
    accent: "yellow",
  },
  {
    id: "test-final",
    kind: "youtube",
    youtubeId: "12VjY71Wpzg",
    featured: false,
    title: "Prueba de usuario final",
    subtitle: "Validación de la experiencia",
    description:
      "Última sesión de validación: curva de aprendizaje de los controles de agarre y lanzamiento en VR.",
    tag: "Validación",
    accent: "cyan",
  },
];

export const videoHostingNote =
  "Las pruebas de usuario largas se alojan en YouTube (no listado) para no cargar el sitio; los clips de gameplay se sirven optimizados en 720p.";
