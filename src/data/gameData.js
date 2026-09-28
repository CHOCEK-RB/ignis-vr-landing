const BASE_URL = import.meta.env.BASE_URL || "/";

/**
 * Datos del juego IGNIS - Realidad Virtual
 * Diseñado con arquitectura modular desacoplada para facilitar integración
 * directa con APIs de backend (REST, GraphQL o endpoints de Next.js).
 */

export const gameInfo = {
  title: "IGNIS",
  subtitle: "El bombero y el monstruo de fuego",
  tagline: "El fuego tiene voz. La rutina ha terminado.",
  synopsis:
    "Una llamada rutinaria en una fábrica industrial cerrada se transforma en una experiencia claustrofóbica y táctica de Realidad Virtual. Encerrado junto a una entidad ígnea viviente que muta de forma y color, deberás esquivar zarpazos a ras del pecho, cuidar dónde pisas y alternar entre agua, espuma de extintor y arena para sobrevivir.",
  releaseYear: "2026",
  genre: "Acción Táctica VR / Supervivencia / Boss-Fight",
  engine: "Unity VR / OpenXR",
  developer: "Ignis Interactive",
  demoLink: "#descarga",
  trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  badgeText: "Experiencia VR Room-Scale Inmersiva",
};

/**
 * Proceso de Ideación y Concepción del Videojuego VR (Pizarras Miro)
 * Documentación cronológica de las 4 etapas consecutivas de desarrollo.
 */
export const ideationProcess = [
  {
    step: "01",
    id: "lluvia-ideas",
    title: "Lluvia de Ideas Inicial",
    subtitle: "Divergencia creativa, exploración de conceptos VR y propuestas del equipo",
    badge: "Etapa 1: Lluvia de Ideas",
    tag: "Brainstorming Inicial",
    image: `${BASE_URL}pictures/mirro/lluvia_ideas.png`,
    color: "#f59e0b",
    accentColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    summary:
      "El equipo inició con una sesión abierta de propuestas donde cada integrante aportó visiones para aprovechar la inmersión, el control de movimiento y la interacción física en Realidad Virtual.",
    teamMembers: [
      { name: "Calizaya Quispe Jose Luis", role: "Propuestas de Puzzle y Mecánica VR" },
      { name: "Calcina Muchica Sergio Eliseo", role: "Propuestas de Físicas y Simulación" },
      { name: "Hanari Cutipa Cesar Alejandro", role: "Propuestas de Escape Room y Tensión" },
      { name: "Supo Molina Gerald Steve", role: "Propuestas de Interacción Háptica" },
    ],
    proposals: [
      {
        author: "Calcina",
        role: "Dinámicas de Simulación & Colaboración",
        color: "border-blue-500/30 bg-blue-950/30 text-blue-300",
        ideas: [
          {
            title: "Clasificación de basura",
            desc: "Una persona lanza objetos de desecho; el jugador debe atraparlos en el aire antes de que caigan y clasificarlos a gran velocidad en sus respectivos tachos.",
          },
          {
            title: "Gestión y defensa de la ciudad",
            desc: "El jugador encarna al protector supremo de una metrópolis que debe reaccionar ante catástrofes simultáneas: incendios forestales, invasiones alienígenas y terremotos.",
          },
          {
            title: "Simulador cooperativo de dron",
            desc: "Reparto aéreo en dron con mecánica asimétrica: un jugador orienta con el mapa topográfico y el otro pilota el dron con controles complejos de vuelo.",
          },
        ],
      },
      {
        author: "Calizaya",
        role: "Puzzles Temporales & Destreza",
        color: "border-amber-500/30 bg-amber-950/30 text-amber-300",
        ideas: [
          {
            title: "Navegación de barco en crisis",
            desc: "Cada motor falla de forma cíclica y exige resolver puzzles mecánicos a contrarreloj antes de que la corriente arrastre el navío hacia un abismo.",
          },
          {
            title: "Adaptación de Fruit Ninja VR",
            desc: "Reflejos kinestésicos cortando frutas en un domo 360° con espadas hápticas.",
          },
          {
            title: "Ensamblaje y taller de autos",
            desc: "Montaje mecánico interactivo de piezas de motor y carrocería con mandos VR.",
          },
        ],
      },
      {
        author: "Cesar / Hañari",
        role: "Tensión, Monstruos & Detección",
        color: "border-purple-500/30 bg-purple-950/30 text-purple-300",
        ideas: [
          {
            title: "Escape Room Espacial con monstruos",
            desc: "Escapar de una nave averiada reparando compuertas con gestos de manos. Incluye mecánicas de sigilo: ocultarse, no hacer ruido ni gestos (cerrar los ojos ante el monstruo) y desbloquear componentes.",
          },
          {
            title: "Limpieza urbana de emergencia",
            desc: "Despejar y sanear calles o zonas contaminadas utilizando herramientas presurizadas.",
          },
        ],
      },
      {
        author: "Supo",
        role: "Manipulación Culinaria",
        color: "border-emerald-500/30 bg-emerald-950/30 text-emerald-300",
        ideas: [
          {
            title: "Preparar una hamburguesa",
            desc: "Simulador de cocina rápida en VR ensamblando pedidos con física de agarre libre y tiempo límite.",
          },
        ],
      },
    ],
  },
  {
    step: "02",
    id: "eleccion-idea",
    title: "Elección de la Idea Base",
    subtitle: "Convergencia hacia el combate táctico: Bombero VS Monstruo de Fuego",
    badge: "Etapa 2: Selección del Concepto",
    tag: "Concepto Nuclear",
    image: `${BASE_URL}pictures/mirro/seleccion.png`,
    color: "#06b6d4",
    accentColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    summary:
      "Tras analizar las propuestas, el equipo decidió fusionar la tensión de escape room con la manipulación física de herramientas contra un adversario dinámico.",
    coreQuote:
      "«Jugador se enfrentará contra un monstruo de fuego, el cual cambia de color indicando así su debilidad. El jugador puede usar distintos objetos que se encuentran en el escenario para atacarlo.»",
    corePillars: [
      {
        icon: "🔥",
        title: "Enemigo Viviente y Dinámico",
        desc: "El fuego no es estático: es un jefe que reacciona, se burla, muta de color y ataca físicamente al bombero.",
      },
      {
        icon: "🧩",
        title: "Puzzle Cromático en Tiempo Real",
        desc: "Cada tonalidad del monstruo representa una debilidad específica que obliga a alternar herramientas sin tregua.",
      },
      {
        icon: "🥽",
        title: "Interacción Física Inmersiva",
        desc: "El jugador no aprieta un botón automático: debe caminar en room-scale, agacharse en la sala y levantar los objetos del escenario con sus manos.",
      },
    ],
  },
  {
    step: "03",
    id: "funcionalidades",
    title: "Funcionalidades del Videojuego",
    subtitle: "Mecánicas de combate, comportamiento hostil y condición de victoria",
    badge: "Etapa 3: Reglas y Lógica de Juego",
    tag: "Sistemas & Gameplay",
    image: `${BASE_URL}pictures/mirro/funcionalidad.png`,
    color: "#f97316",
    accentColor: "border-orange-500/40 text-orange-400 bg-orange-500/10",
    gradient: "from-orange-500/20 via-red-600/10 to-transparent",
    summary:
      "Se especificaron las reglas formales de daño elemental, patrones de ataque del monstruo y la condición de cierre de la sala confinada.",
    featureCategories: [
      {
        title: "Mecánicas de Combate y Elementos",
        icon: "⚔️",
        color: "border-orange-500/30 bg-orange-950/20 text-orange-300",
        items: [
          {
            label: "Manguera de agua",
            text: "Causa daño contundente cuando el monstruo se encuentra en su fase vulnerable al agua.",
          },
          {
            label: "Extintor amarillo",
            text: "Hace daño químico cuando el monstruo está de color amarillo (quiebra su coraza térmica).",
          },
          {
            label: "Sacos de arena",
            text: "Hacen daño por sofocación cuando el monstruo está en la fase de color azul.",
          },
          {
            label: "Esquiva y recogida táctica",
            text: "Evitar los ataques del monstruo y recoger los objetos esparcidos por el escenario para contraatacar.",
          },
        ],
      },
      {
        title: "Ataques y Comportamiento del Monstruo",
        icon: "👹",
        color: "border-red-500/30 bg-red-950/20 text-red-300",
        items: [
          {
            label: "Ataque de humo cegador",
            text: "El monstruo expulsa humo denso, lo cual nubla la vista del jugador en el visor VR por unos segundos.",
          },
          {
            label: "Pérdida de visión ambiental",
            text: "Genera humo residual en el aire para limitar la visibilidad general y crear desorientación espacial.",
          },
          {
            label: "Pisotón sísmico",
            text: "Pisa fuerte el suelo en señal anticipada de un ataque de ráfaga de balas de fuego.",
          },
          {
            label: "Charcos ardientes de lava",
            text: "Lanza bolas de fuego que dejan charcos hirvientes en el suelo que dañan las botas al pisarlos.",
          },
        ],
      },
      {
        title: "Condición de Sala y Victoria",
        icon: "🚪",
        color: "border-amber-500/30 bg-amber-950/20 text-amber-300",
        items: [
          {
            label: "Encierro absoluto",
            text: "La puerta permanece sellada: no puedes salir hasta consumir y extinguir todo el fuego de la habitación.",
          },
        ],
      },
    ],
  },
  {
    step: "04",
    id: "interacciones-vr",
    title: "Interacciones con el Usuario",
    subtitle: "Mapeo cinético y corporal entre el jugador y el entorno virtual",
    badge: "Etapa 4: Experiencia Kinestésica",
    tag: "Room-Scale & Mandos",
    image: `${BASE_URL}pictures/mirro/iteraccion.png`,
    color: "#ef4444",
    accentColor: "border-red-500/40 text-red-400 bg-red-500/10",
    gradient: "from-red-600/20 via-orange-600/10 to-transparent",
    summary:
      "Definición de las 5 acciones físicas fundamentales que el jugador realiza con su cuerpo y mandos dentro del casco VR.",
    userInteractions: [
      {
        number: "01",
        title: "Jugador agarra y usa objetos",
        desc: "Interacción física directa con las manos virtuales: sostener la manguera a presión, jalar el gatillo del extintor y levantar sacos pesados con agarre háptico.",
        icon: "🧤",
        vrAction: "Tracking de Mandos 6DoF",
      },
      {
        number: "02",
        title: "Monstruo ataca al jugador",
        desc: "El ente hostil lanza proyectiles directos, zarpazos giratorios horizontales y charcos incandescentes obligando a una alerta continua.",
        icon: "💥",
        vrAction: "Peligro Inminente en 360°",
      },
      {
        number: "03",
        title: "Jugador se mueve para evitar ataques",
        desc: "Desplazamiento físico dentro del área de juego de la habitación para esquivar el fuego del suelo y repositionarse frente al blanco.",
        icon: "🏃",
        vrAction: "Room-Scale Locomotion",
      },
      {
        number: "04",
        title: "Jugador puede esquivar ataques (Ducking)",
        desc: "Agacharse en la vida real para que los zarpazos a ras del pecho pasen por encima de la cabeza, utilizando la altura real del visor.",
        icon: "🛡️",
        vrAction: "Detección de Agachado Físico",
      },
      {
        number: "05",
        title: "Reconocer los puntos débiles del monstruo",
        desc: "Proceso cognitivo de inspección visual: identificar el cambio de color para saber qué objeto agarrar del suelo o la pared.",
        icon: "👁️",
        vrAction: "Lectura Visual y Reflejos",
      },
    ],
  },
];

/**
 * Storyboard completo de 14 paneles ilustrados oficiales
 * extraídos del cómic / storytelling del juego.
 */
export const allStoryPanels = [
  {
    id: 1,
    image: `${BASE_URL}pictures/paneles/panel_01.png`,
    title: "Entrada y Protocolo",
    caption: "Carlos ingresa al cuarto con su mochila de agua y manguera roja. Cierra la puerta metálica tras de sí según el protocolo. Frente a él arde una llama roja solitaria.",
    tag: "Protocolo Estándar",
  },
  {
    id: 2,
    image: `${BASE_URL}pictures/paneles/panel_02.png`,
    title: "El Primer Disparo",
    caption: "Confiado en que es un fuego común, Carlos levanta la manguera y le arroja un chorro de agua directo a la pequeña llama.",
    tag: "Ataque Inicial",
  },
  {
    id: 3,
    image: `${BASE_URL}pictures/paneles/panel_03.png`,
    title: "La Chispa que Habla",
    caption: "«¡Auch! Eso me dolió». La puerta metálica se sella con un golpe seco. La flama crece violentamente hasta convertirse en un titán de fuego amarillo incandescente.",
    tag: "Mutación y Trampa",
  },
  {
    id: 4,
    image: `${BASE_URL}pictures/paneles/panel_04.png`,
    title: "El Agua Sin Efecto",
    caption: "Carlos descarga agua una y otra vez, pero el agua resbala sin dañarlo. El monstruo amarillo se ríe a carcajadas de su impotencia.",
    tag: "Inmunidad Amarilla",
  },
  {
    id: 5,
    image: `${BASE_URL}pictures/paneles/panel_05.png`,
    title: "Esquiva Física a Ras de Pecho",
    caption: "El titán gira sobre sí mismo desatando una llamarada horizontal devastadora. Carlos debe agacharse velozmente en su espacio VR para no ser alcanzado.",
    tag: "Ducking en VR",
  },
  {
    id: 6,
    image: `${BASE_URL}pictures/paneles/panel_06.png`,
    title: "La Conexión de Color",
    caption: "Carlos inspecciona el cuarto y descubre el extintor amarillo colgado en la pared. Una idea surge: el monstruo es amarillo, el extintor es amarillo.",
    tag: "Lectura Táctica",
  },
  {
    id: 7,
    image: `${BASE_URL}pictures/paneles/panel_07.png`,
    title: "Descarga de Espuma Química",
    caption: "Toma el extintor amarillo, retira el seguro y descarga la espuma sobre la criatura. El monstruo brama de dolor: «¡KRRH! ¡OW! ¡OW!»",
    tag: "Golpe Crítico",
  },
  {
    id: 8,
    image: `${BASE_URL}pictures/paneles/panel_08.png`,
    title: "Cambio Cromático: Amarillo a Rojo",
    caption: "El impacto debilita al coloso y su cuerpo cambia súbitamente de color: la coraza amarilla se tiñe de un rojo ardiente.",
    tag: "Transición de Fase",
  },
  {
    id: 9,
    image: `${BASE_URL}pictures/paneles/panel_09.png`,
    title: "Descifrando el Patrón",
    caption: "El extintor ya no surte efecto contra el rojo. Carlos ata cabos y suelta el extintor para volver a empuñar la manguera roja de agua.",
    tag: "Estrategia Elemental",
  },
  {
    id: 10,
    image: `${BASE_URL}pictures/paneles/panel_10.png`,
    title: "Chorro a Presión y Charcos de Lava",
    caption: "Carlos dispara agua fría a presión contra el cuerpo rojo mientras cuida cada paso para no pisar los charcos de fuego hirvientes que queman sus botas.",
    tag: "Peligro en el Suelo",
  },
  {
    id: 11,
    image: `${BASE_URL}pictures/paneles/panel_11.png`,
    title: "Ataque de Humo y Desorientación",
    caption: "El monstruo se vuelve de color azul y tose una densa nube de humo negro que nubla los visores VR por completo, obligando a aguantar a ciegas.",
    tag: "Visión Reducida",
  },
  {
    id: 12,
    image: `${BASE_URL}pictures/paneles/panel_12.png`,
    title: "Sofocación con Sacos de Arena",
    caption: "Al volverse azul el monstruo, Carlos agarra un saco azul de arena del suelo y se lo arroja con fuerza, derrotándolo al sofocar su masa ígnea y reduciendo su tamaño.",
    tag: "Física de Arrojo",
  },
  {
    id: 13,
    image: `${BASE_URL}pictures/paneles/panel_13.png`,
    title: "El Núcleo Celeste Debilitado",
    caption: "Con la salud a menos del 5%, el monstruo queda reducido a una figura celeste diminuta de rodillas que suplica: «Me apago… tengo frío». Carlos levanta la manguera para el golpe final.",
    tag: "Salud Débil < 5%",
  },
  {
    id: 14,
    image: `${BASE_URL}pictures/paneles/panel_14.png`,
    title: "Vapor Blanco y Libertad",
    caption: "Una última descarga disuelve a la criatura en vapor blanco. Los cerrojos de la puerta saltan, el aire fresco de la noche entra y Carlos camina hacia la libertad.",
    tag: "Victoria y Escape",
  },
];

export const storyChapters = [
  {
    id: "rutina",
    step: "01",
    title: "La Llamada de Rutina",
    tag: "Protocolo Estándar",
    color: "#ff7700",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    borderAccent: "border-amber-500/40",
    badge: "17:42 hrs - Fábrica Central",
    content:
      "Carlos llevaba pocos años en el cuerpo de bomberos, pero los suficientes para conocer el compás de una alerta común. Aquella tarde lo enviaron a una fábrica por un incendio en un cuarto interior. Entró con su mochila de agua a la espalda y la manguera roja lista. Siguiendo el protocolo, cerró la puerta metálica tras de sí. Sobre el suelo ardía una pequeña llama roja, inofensiva a simple vista. Levantó la manguera y le lanzó un chorro de agua seguro de que con eso bastaba.",
    panels: [allStoryPanels[0], allStoryPanels[1]],
    highlightQuote: "«Entró al cuarto y cerró la puerta tras de sí, como marca el protocolo.»",
  },
  {
    id: "chispa",
    step: "02",
    title: "La Chispa que Habla",
    tag: "«¡Auch! Eso me dolió»",
    color: "#eab308",
    gradient: "from-yellow-400/20 via-amber-600/10 to-transparent",
    borderAccent: "border-yellow-400/40",
    badge: "La Trampa Sellada",
    content:
      "La llama no se apagó. En su lugar, se sacudió y soltó una voz que heló la sangre de Carlos: «¡Auch! Eso me dolió». Un sonido grave y creciente retumbó en las paredes de ladrillo, la puerta metálica se selló a su espalda con un golpe seco irrevocable, y la pequeña llama comenzó a crecer descontroladamente. En segundos, se alzó un titán enorme hecho de fuego con el cuerpo teñido de un amarillo incandescente. La rutina se había terminado.",
    panels: [allStoryPanels[2]],
    highlightQuote: "«¡Auch! Eso me dolió. La pequeña llama empezó a crecer en un titán colosal.»",
  },
  {
    id: "resistencia",
    step: "03",
    title: "El Agua ya no Basta",
    tag: "Ataque Horizontal & Burlas",
    color: "#ef4444",
    gradient: "from-red-600/20 via-orange-600/10 to-transparent",
    borderAccent: "border-red-500/40",
    badge: "Inmunidad & Reflejos VR",
    content:
      "El monstruo se agachó, giró sobre sí mismo y lanzó un golpe de fuego horizontal a la altura del pecho. Carlos apenas alcanzó a esquivarlo agachándose en el acto. Por instinto apuntó la manguera y disparó agua una y otra vez, pero el líquido resbalaba sin causarle el más mínimo efecto al cuerpo amarillo. La bestia soltó una carcajada burlona. Esa risa hizo despertar a Carlos: si el agua no servía, tenía que encontrar otra arma de inmediato.",
    panels: [allStoryPanels[3], allStoryPanels[4]],
    highlightQuote: "«El agua resbalaba sin efecto sobre el cuerpo amarillo de la criatura mientras se reía.»",
  },
  {
    id: "extintor",
    step: "04",
    title: "El Extintor Amarillo",
    tag: "La Clave del Color",
    color: "#f59e0b",
    gradient: "from-amber-400/20 via-yellow-600/10 to-transparent",
    borderAccent: "border-yellow-500/40",
    badge: "Disrupción de Coraza",
    content:
      "Al mirar a su alrededor, Carlos descubrió que el cuarto no estaba vacío: en la pared colgaba un extintor de color amarillo, y por el piso había sacos de arena azul. Sus ojos se detuvieron en el extintor: amarillo, igual que el monstruo. Corrió hacia él, retiró el seguro y descargó la espesa espuma sobre la criatura. El monstruo gritó de dolor («¡KRRH! ¡OW!») y su coraza cambió drásticamente de amarillo a un rojo encendido.",
    panels: [allStoryPanels[5], allStoryPanels[6], allStoryPanels[7]],
    highlightQuote: "«Amarillo, igual que el monstruo. Descargó la espuma y el cuerpo pasó a rojo encendido.»",
  },
  {
    id: "patron",
    step: "05",
    title: "El Patrón Dominado & El Humo",
    tag: "Charcos, Manguera y Saco Azul",
    color: "#3b82f6",
    gradient: "from-blue-600/20 via-sky-600/10 to-transparent",
    borderAccent: "border-blue-500/40",
    badge: "Estrategia Completa",
    content:
      "Carlos comprendió la regla de oro: cada color exigía una herramienta distinta. Contra el rojo, el extintor era inútil, así que volvió al agua, sorteando los charcos ardientes que la bestia escupía al suelo. Al recibir el agua, el monstruo se volvió azul y tosió una nube de humo negro tan denso que cegó momentáneamente los visores de Carlos. Sin vacilar, Carlos agarró un saco azul de arena del suelo y se lo arrojó con fuerza, derrotando la amenaza sofocando su masa ígnea.",
    panels: [allStoryPanels[8], allStoryPanels[9], allStoryPanels[10], allStoryPanels[11]],
    highlightQuote: "«El color del monstruo no era un capricho, era la pista. Cada color pedía una herramienta distinta.»",
  },
  {
    id: "aliento",
    step: "06",
    title: "El Último Aliento y Libertad",
    tag: "«Me apago… tengo frío»",
    color: "#38bdf8",
    gradient: "from-sky-400/20 via-cyan-600/10 to-transparent",
    borderAccent: "border-sky-400/40",
    badge: "Fin de la Emergencia",
    content:
      "Con cada golpe acertado, la criatura se fue encogiendo. Al final, quedó reducida a una figura celeste, menuda y vacilante, con movimientos lentos y torpes sobre sus rodillas. Carlos levantó la manguera roja y descargó una ráfaga final de agua a presión. «Me apago… tengo frío», murmuró la criatura antes de disolverse en una nube de vapor blanco. La puerta se destrabó, el aire fresco lo recibió y Carlos salió sabiendo que aquel no había sido un incendio de rutina.",
    panels: [allStoryPanels[12], allStoryPanels[13]],
    highlightQuote: "««Me apago… tengo frío», murmuró la figura celeste antes de disolverse en una nube de vapor blanco.»",
  },
];

export const combatMechanics = [
  {
    phase: "Fase Amarilla",
    weakness: "Extintor Químico (Espuma)",
    icon: "🟡",
    effect: "Quiebra el escudo térmico inicial",
    accent: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
    weaknessColor: "text-yellow-400",
  },
  {
    phase: "Fase Roja",
    weakness: "Manguera de Agua a Presión",
    icon: "🔴",
    effect: "Enfría la temperatura crítica del núcleo",
    accent: "text-red-500 border-red-500/40 bg-red-500/10",
    weaknessColor: "text-red-400",
  },
  {
    phase: "Fase Azul",
    weakness: "Saco de Arena Azul",
    icon: "🔵",
    effect: "Sofoca el oxígeno y derriba la coraza ante el humo",
    accent: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    weaknessColor: "text-blue-400",
  },
];

export const charactersAndObjects = [
  {
    id: "carlos",
    name: "Carlos (Bombero)",
    category: "personaje",
    role: "Protagonista / Traje Ignífugo Nivel 2",
    badge: "Personaje Jugable",
    image: `${BASE_URL}pictures/personajes/bombero.png`,
    description:
      "Bombero de respuesta rápida asignado a la contención en fábricas. Su equipo ignífugo incluye casco protector con visor, guantes térmicos reforzados y botas dieléctricas para resistir temperaturas extremas y evitar los charcos de fuego en el suelo.",
    stats: [
      { label: "Movilidad VR", value: "Room-Scale 360°" },
      { label: "Resistencia", value: "Traje Térmico Nivel 2" },
      { label: "Física VR", value: "Ducking real para esquivar" },
    ],
    tagColor: "border-orange-500/50 text-orange-400",
  },
  {
    id: "monstruo-base",
    name: "Ignis (Modelo 3D Base)",
    category: "personaje",
    role: "Entidad Ígnea Principal",
    badge: "Enemigo Dinámico",
    image: `${BASE_URL}pictures/personajes/monstruo.png`,
    description:
      "El modelo 3D troncal de la criatura nacida en la fábrica. Con extremidades articuladas y expresión burlona, muta de color y volumen conforme absorbe o pierde temperatura en el enfrentamiento.",
    stats: [
      { label: "Comportamiento", value: "Burlón, Agresivo y Vocal" },
      { label: "Capacidad", value: "Mutación Cromática de 3 Fases" },
      { label: "Ataques", value: "Zarpazos a ras del pecho" },
    ],
    tagColor: "border-amber-500/50 text-amber-400",
  },
  {
    id: "espacio-fabrica",
    name: "Cuarto Cerrado de la Fábrica",
    category: "personaje",
    role: "Arena Confinada 3D / Entorno",
    badge: "Escenario 3D",
    image: `${BASE_URL}pictures/personajes/espacio_obj.png`,
    description:
      "La nave industrial herméticamente cerrada donde se desarrolla el combate. Las paredes de ladrillo refractario, el portón metálico trabado y los puntos de cobertura configuran el espacio de escape room en VR.",
    stats: [
      { label: "Tipo de Arena", value: "Habitación Sellada Hermética" },
      { label: "Peligro", value: "Humo denso y charcos de fuego" },
      { label: "Salida", value: "Consumir todo el fuego" },
    ],
    tagColor: "border-slate-500/50 text-slate-300",
  },
  {
    id: "manguera",
    name: "Manguera y Mochila Hidráulica",
    category: "objeto",
    role: "Herramienta Táctica Principal",
    badge: "Arma Hidráulica 3D",
    image: `${BASE_URL}pictures/personajes/manguera_obj.png`,
    description:
      "Mochila dorsal de agua presurizada con manguera roja de acople rápido. Permite dirigir un chorro continuo de agua mediante gatillo físico con retroalimentación háptica en los mandos VR.",
    stats: [
      { label: "Alcance", value: "8 metros de proyección" },
      { label: "Eficacia", value: "Crítico contra Fase Roja" },
      { label: "Control Háptico", value: "Vibración de retroceso continua" },
    ],
    tagColor: "border-red-500/50 text-red-400",
  },
  {
    id: "extintor",
    name: "Extintor Químico (Espuma)",
    category: "objeto",
    role: "Disruptor de Coraza Térmica",
    badge: "Extintor 3D",
    image: `${BASE_URL}pictures/personajes/extintor_obj.png`,
    description:
      "Extintor presurizado de color amarillo colgado en el muro de la nave. Obliga al jugador a desplazarse físicamente en la zona de juego, retirar el pasador con una mano y disparar la espuma con la otra.",
    stats: [
      { label: "Tipo de Agente", value: "Espuma Sintética Amarilla" },
      { label: "Eficacia", value: "Vulnerable: Fase Amarilla" },
      { label: "Mecánica VR", value: "Interacción física a dos manos" },
    ],
    tagColor: "border-yellow-400/50 text-yellow-300",
  },
  {
    id: "sacos-arena",
    name: "Saco de Arena Azul",
    category: "objeto",
    role: "Material de Sofocación Térmica (Azul)",
    badge: "Arrojadizo Azul 3D",
    image: `${BASE_URL}pictures/personajes/saco_azul_obj.png`,
    description:
      "Sacos pesados de contención industrial de color azul esparcidos en el suelo. Requieren agacharse en la vida real, levantarlos con los mandos VR y arrojarlos contra el monstruo en su fase azul para ahogar sus llamas y derrotar su ofensiva de humo.",
    stats: [
      { label: "Color Táctico", value: "Azul Ignífugo" },
      { label: "Eficacia", value: "Crítico contra Fase Azul" },
      { label: "Mecánica VR", value: "Arrojo con trayectoria física" },
    ],
    tagColor: "border-blue-500/50 text-blue-400",
    modalGlow: "bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.25),_transparent_70%)]",
    hoverBorder: "hover:border-blue-500/60",
    modalBorder: "border-blue-500/40",
    btnGradient: "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-600/30",
    imageClass: "filter drop-shadow-[0_14px_28px_rgba(37,99,235,0.7)]",
  },
  {
    id: "etapa-amarilla",
    name: "Ignis: Fase Amarilla (Escudo Térmico)",
    category: "etapa",
    role: "Fase 1: Invulnerabilidad Inicial",
    badge: "Etapa del Monstruo",
    image: `${BASE_URL}pictures/etapas_monstruo/amarillo.png`,
    description:
      "La primera forma colosal del monstruo tras emerger de la pequeña llama. El agua resbala completamente sobre su cuerpo amarillo mientras ríe de Carlos. Debe ser quebrado con la espuma del extintor amarillo.",
    stats: [
      { label: "Color / Estado", value: "Amarillo Incandescente" },
      { label: "Inmunidad", value: "Inmune al agua a presión" },
      { label: "Debilidad", value: "Extintor químico amarillo" },
    ],
    tagColor: "border-yellow-400/50 text-yellow-300",
  },
  {
    id: "etapa-roja",
    name: "Ignis: Fase Roja (Furia & Charcos)",
    category: "etapa",
    role: "Fase 2: Ataque Activo de Llamas",
    badge: "Etapa del Monstruo",
    image: `${BASE_URL}pictures/etapas_monstruo/rojo.png`,
    description:
      "Tras ser quebrado por la espuma, el monstruo vira a rojo intenso. Desata zarpazos giratorios a ras del pecho y proyectiles que dejan charcos de fuego hirvientes en el suelo que dañan las botas al pisarlos.",
    stats: [
      { label: "Color / Estado", value: "Rojo Ardiente de Combustión" },
      { label: "Ataque Primario", value: "Zarpazos y charcos de lava" },
      { label: "Debilidad", value: "Manguera de agua a presión" },
    ],
    tagColor: "border-red-500/50 text-red-400",
  },
  {
    id: "etapa-azul",
    name: "Ignis: Fase Azul (Vulnerable a Sacos)",
    category: "etapa",
    role: "Fase 3: Vulnerable a Sacos Azules",
    badge: "Fase Azul (Sacos)",
    image: `${BASE_URL}pictures/etapas_monstruo/azul.png`,
    description:
      "Al recibir el chorro de agua fría, el monstruo muta a color azul y expulsa humo negro que nubla el entorno en el visor VR. Su coraza sólo puede ser sofocada y derrotada arrojándole los sacos de arena azul esparcidos por el suelo.",
    stats: [
      { label: "Color / Estado", value: "Azul Ígneo Intenso" },
      { label: "Ataque", value: "Humo negro cegador en visor VR" },
      { label: "Debilidad", value: "Saco de arena azul" },
    ],
    tagColor: "border-blue-500/50 text-blue-400",
    modalGlow: "bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.25),_transparent_70%)]",
    hoverBorder: "hover:border-blue-500/60",
    modalBorder: "border-blue-500/40",
    btnGradient: "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-600/30",
    imageClass: "filter drop-shadow-[0_14px_28px_rgba(37,99,235,0.85)]",
  },
];

export const galleryItems = [
  {
    id: "galeria-01",
    title: "Chorro Hidráulico a Presión",
    caption: "Ataque frontal continuo con la manguera presurizada contra el coloso de fuego en primera persona VR.",
    src: `${BASE_URL}pictures/galeria/p01.png`,
    category: "In-Game VR",
  },
  {
    id: "galeria-02",
    title: "Sofocando Charcos Ardientes",
    caption: "Enfriando el suelo de la fábrica para evitar que las llamas dañen las botas dieléctricas de Carlos.",
    src: `${BASE_URL}pictures/galeria/p02.png`,
    category: "Mecánicas",
  },
  {
    id: "galeria-03",
    title: "Impacto Crítico al Núcleo",
    caption: "Dirigiendo el chorro de agua fría a la coraza ígnea en plena nave industrial cerrada.",
    src: `${BASE_URL}pictures/galeria/p03.png`,
    category: "In-Game VR",
  },
  {
    id: "galeria-04",
    title: "Disparo de Espuma Química",
    caption: "Uso táctico a dos manos del extintor amarillo para quebrar el escudo térmico de la fase inicial.",
    src: `${BASE_URL}pictures/galeria/p04.png`,
    category: "Mecánicas",
  },
  {
    id: "galeria-05",
    title: "Arsenal de Sacos Azules",
    caption: "Sacos de arena azul esparcidos en el piso sobre los charcos de fuego, listos para ser levantados físicamente.",
    src: `${BASE_URL}pictures/galeria/p05.png`,
    category: "Mecánicas",
  },
  {
    id: "galeria-06",
    title: "El Muro Circular de Fuego",
    caption: "El titán desplegando su ofensiva y acorralando al bombero dentro de la barrera de llamas de la sala sellada.",
    src: `${BASE_URL}pictures/galeria/p06.png`,
    category: "Boss Fight",
  },
  {
    id: "galeria-07",
    title: "Reduciendo la Resistencia de Ignis",
    caption: "El coloso empieza a encogerse y perder volumen ante la persistente ráfaga de enfriamiento continuo.",
    src: `${BASE_URL}pictures/galeria/p07.png`,
    category: "Boss Fight",
  },
  {
    id: "galeria-08",
    title: "Control del Espacio y Visión VR",
    caption: "Navegación espacial táctica entre los focos ardientes y los sacos pesados de arena azul.",
    src: `${BASE_URL}pictures/galeria/p08.png`,
    category: "In-Game VR",
  },
  {
    id: "galeria-09",
    title: "Ignis: Fase Amarilla Colosal",
    caption: "La intimidante postura del monstruo riéndose de los ataques de agua antes de activar el extintor químico.",
    src: `${BASE_URL}pictures/galeria/p09.png`,
    category: "Boss Fight",
  },
  {
    id: "galeria-10",
    title: "El Desenlace: Núcleo Debilitado",
    caption: "La entidad reducida a una pequeña silueta de rodillas que susurra «Me apago… tengo frío» antes de disolverse.",
    src: `${BASE_URL}pictures/galeria/p10.png`,
    category: "Boss Fight",
  },
];

/**
 * Feedback cualitativo y observaciones de pruebas con usuarios reales (Playtesters VR)
 */
export const experienciaJugadores = [
  {
    id: "p1",
    usuario: "Participante 1",
    rol: "Tester de Jugabilidad VR",
    comentario: "Resaltó que la experiencia le pareció muy entretenida y valoró la sorpresa al presenciar al Tutún Sajur, además de comprender rápido la mecánica deductiva de usar herramientas según el color del enemigo; sin embargo, sugirió que la criatura se retire más rápido tras recibir daño, propuso incluir acertijos previos para encontrar los objetos en lugar de tenerlos a la mano y recomendó mejorar los efectos de sonido del monstruo.",
    puntosClave: [
      "Mecánica deductiva por colores",
      "Sugerencia de acertijos para herramientas",
      "Mejora en efectos de sonido del monstruo",
      "Ajuste en tiempos de retirada del enemigo"
    ],
    folderPath: `${BASE_URL}pictures/experiencia/p1/`,
    imagenes: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    id: "p2",
    usuario: "Participante 2",
    rol: "Tester de Mecánicas y UX",
    comentario: "Destacó el dinamismo al extinguir el fuego con las herramientas y la facilidad para adaptarse a los controles de realidad virtual, aunque admitió una confusión inicial al interpretar los colores del monstruo como emociones en lugar de debilidades elementales; por ello, recomendó hacer más visible la reducción corporal del enemigo como indicador de vida y aumentar la amenaza en la habitación para incentivar el desplazamiento del jugador.",
    puntosClave: [
      "Física de extinción dinámica",
      "Buena adaptación a mandos VR",
      "Clarificación del indicador de vida",
      "Necesidad de mayor amenaza y movilidad"
    ],
    folderPath: `${BASE_URL}pictures/experiencia/p2/`,
    imagenes: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    id: "p3",
    usuario: "Participante 3",
    rol: "Tester de Interacción e Inmersión",
    comentario: "Expresó que la experiencia le pareció muy entretenida y resaltó de manera positiva los movimientos del personaje, aunque admitió que al principio no tenía clara la dinámica de juego hasta que comenzó a observar la relación entre los colores del enemigo y los objetos; sin embargo, enfrentó una curva de aprendizaje con la física de los mandos al no saber exactamente cómo sostener o lanzar las herramientas durante el combate.",
    puntosClave: [
      "Experiencia muy entretenida",
      "Dinamismo en movimientos del personaje",
      "Comprensión progresiva por colores y objetos",
      "Dificultad con controles de agarre y lanzamiento"
    ],
    folderPath: `${BASE_URL}pictures/experiencia/p3/`,
    imagenes: ["1.jpg", "2.jpg", "3.jpg"]
  }
];

export const supportedHeadsets = [
  {
    name: "Meta Quest 3, 2 & Pro",
    badge: "Standalone / PCVR",
    description: "Soporte nativo con tracking de manos y Room-Scale a 90/120 Hz.",
    icon: "quest",
  },
  {
    name: "PlayStation VR2",
    badge: "PS5",
    description: "Gatillos adaptativos, vibración háptica en el casco y renderizado foveado.",
    icon: "psvr",
  },
  {
    name: "SteamVR / PCVR",
    badge: "Valve Index & Vive",
    description: "Resolución sin compresión y retroceso de mando ultra preciso.",
    icon: "steam",
  },
  {
    name: "Pico 4 & 4 Pro",
    badge: "Standalone",
    description: "Lentes pancake ultra nítidas con amplio campo de visión de 105°.",
    icon: "pico",
  },
];

export const systemSpecs = {
  minimum: {
    os: "Windows 10 64-bit",
    processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
    memory: "12 GB de RAM",
    graphics: "NVIDIA GeForce GTX 1070 (8 GB) / AMD RX 5600 XT",
    storage: "15 GB de espacio disponible (SSD recomendado)",
    vrPlayArea: "Room-Scale mínimo de 2m × 1.5m",
  },
  recommended: {
    os: "Windows 11 64-bit",
    processor: "Intel Core i7-11700K / AMD Ryzen 7 5800X",
    memory: "16 GB de RAM",
    graphics: "NVIDIA GeForce RTX 3070 (8 GB) / RTX 4070 o superior",
    storage: "15 GB en SSD NVMe ultrarrápido",
    vrPlayArea: "Room-Scale óptimo de 2.5m × 2.5m libre de obstáculos",
  },
};

export const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Ideación & Proceso", href: "#proceso" },
  { label: "Historia (Lore)", href: "#historia" },
  { label: "Personajes y Equipo", href: "#personajes" },
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones VR", href: "#testimonios" },
];

export const socialLinks = [
  { name: "Steam", url: "https://store.steampowered.com", icon: "steam" },
  { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
  { name: "Twitter / X", url: "https://x.com", icon: "twitter" },
  { name: "Meta Quest Store", url: "https://meta.com/quest", icon: "quest" },
];
