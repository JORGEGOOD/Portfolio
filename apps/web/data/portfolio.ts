export const profile = {
  name: "Jorge Cayambe",
  role: "Desarrollador junior · Datos & IA",
  location: "Barcelona, España",
  email: "andrescayambe21@gmail.com",
  github: "https://github.com/JORGEGOOD",
  linkedin: "", // TODO: pon tu LinkedIn
  cv: "/CV_Jorge_Cayambe_.pdf",
}

export const about = [
  "Soy Jorge, desarrollador junior de Barcelona. Estudié el CFGS de Desarrollo de Aplicaciones Multiplataforma y desde entonces mi trabajo se mueve entre dos mundos que me apasionan: el desarrollo de software y los datos.",
  "Ahora mismo curso dos másteres a la vez: IA for Business, Big Data & Analytics en la UIC Barcelona y Data Science e IA en Evolve. Lo que aprendo en clase lo aplico enseguida en proyectos propios, desplegados y con código en GitHub.",
  "Programo sobre todo en C# y Python, trabajo con bases de datos relacionales y no relacionales, consumo y construyo APIs REST, y automatizo procesos con n8n y modelos de lenguaje (LLM), tanto en local como por API.",
  "Vengo de trabajos de cara al público y de logística, y eso me enseñó a trabajar bajo presión, a comunicarme con claridad y a organizarme. Busco mi primera oportunidad como desarrollador junior o analista de datos, en un equipo donde pueda aprender rápido y aportar desde el primer día.",
]

export const services = [
  {
    title: "Desarrollo de software",
    text: "Aplicaciones y herramientas internas en C# y .NET MAUI, scripts en Python y prototipos en Unity.",
  },
  {
    title: "Datos y bases de datos",
    text: "MySQL, PostgreSQL y MongoDB. Extracción, transformación e integración de datos entre distintas fuentes.",
  },
  {
    title: "IA y automatización",
    text: "Flujos con n8n y Make conectando APIs REST con LLM en local y en la nube.",
  },
]

export const education = [
  {
    title: "Máster en IA for Business, Big Data & Analytics",
    place: "UIC Barcelona",
    period: "09/2026 – Actualidad",
  },
  {
    title: "Máster en Data Science e IA",
    place: "Evolve", // TODO: confirma nombre exacto y fechas
    period: "2026 – Actualidad",
  },
  {
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    place: "IFP Innovación en Formación Profesional",
    period: "09/2024 – 09/2026",
  },
]

export const experience = [
  {
    role: "Practicante Programador",
    company: "Social Lovers",
    place: "Manresa",
    period: "03/2026 – 09/2026",
    points: [
      "Desarrollo de funcionalidades en C# para herramientas internas y módulos de automatización de procesos.",
      "Programación de mecánicas de videojuego en Unity: triggers, colisiones y eventos para probar interacciones y sistemas visuales.", // ⚠ confirma qué mecánicas
      "Modelado 3D con 3ds Max para crear los assets de los prototipos.", // ⚠ confirma qué modelaste
      "Grabación con OBS Studio para documentar pruebas y mostrar el funcionamiento de los prototipos.", // ⚠ confirma para qué lo usabas
      "Trabajo con bases de datos: consultas, estructura de tablas y extracción de datos para las herramientas internas.", // ⚠ confirma cuál
      "Integración de datos entre plataformas mediante APIs REST y JSON.",
      "Soporte técnico remoto con AnyDesk: conexión a equipos para diagnosticar y resolver incidencias.", // ⚠ confirma el alcance
      "Uso de IA como asistente de desarrollo para generar y revisar código, depurar errores y documentar, acelerando el trabajo sin perder el criterio propio.", // ⚠ confirma qué herramientas
      "Control de versiones con Git/GitHub: ramas y resolución de conflictos de código en equipo.",
    ],
    tech: ["C#", "Unity", "3ds Max", "OBS Studio", "SQL", "APIs REST", "Git", "AnyDesk", "IA generativa"],
  },
]

export const skills = {
  "IA y Automatización": ["Asistentes de IA para programar", "LLM en local", "APIs de IA generativa", "n8n", "Make"],
  Lenguajes: ["Python", "C#", "C", "JavaScript"],
  Web: ["React", "Next.js", "Node.js", "Vite", "HTML", "CSS"],
  "Bases de datos": ["MySQL", "PostgreSQL", "MongoDB", "Odoo"],
  "Videojuegos y 3D": ["Unity", "3ds Max", "Triggers y eventos", "OBS Studio"],
  "Desarrollo y herramientas": [".NET MAUI", "APIs REST", "Google Cloud", "Git", "GitHub", "AnyDesk"],
  Metodologías: ["Scrum", "Kanban"],
}

export const marquee = [
  "Python", "C#", "SQL", "PostgreSQL", "MongoDB", "React", "Next.js", "n8n",
  "LLM", ".NET MAUI", "Unity", "3ds Max", "OBS Studio", "Git", "Google Cloud", "APIs REST",
]

export const softSkills = [
  {
    title: "Trabajo en equipo y liderazgo",
    from: "Cinesa · GADEL",
    text: "Coordinación de turnos, reparto de tareas y organización de equipos en entornos con mucha presión.",
  },
  {
    title: "Autonomía y gestión del tiempo",
    from: "Geever · GADEL",
    text: "Planificación de rutas y tiempos de entrega, optimizando recursos y resolviendo imprevistos.",
  },
  {
    title: "Comunicación y empatía",
    from: "Cruz Roja · Cinesa",
    text: "Presentar ideas con claridad, escuchar al cliente y detectar sus necesidades reales.",
  },
  {
    title: "Rigor y precisión",
    from: "Cinesa",
    text: "Control de stock, arqueos de caja y cierres diarios sin margen de error.",
  },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2" },
  { name: "Catalán", level: "A2" },
]

export type Project = {
  id: string
  title: string
  description: string
  uses: string
  tech: string[]
  media: { type: "image" | "video"; src: string }
  url: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: "proyecto-1",
    title: "HeatMeet",
    description:
      "Coordinar un plan en grupo suele acabar en un chat de cien mensajes y nadie decide nada. HeatMeet lo resuelve de forma visual: cada miembro marca su disponibilidad y el calendario se pinta en degradado de naranja a rojo según cuánta gente coincide ese día. La app calcula las tres mejores fechas, el grupo vota y, cuando todos han votado, confirma automáticamente la ganadora. Después se elige el lugar buscándolo en un mapa y se sigue hablando en el chat del grupo.",
    uses: `Lo que lo hace especial a nivel técnico: no usa servicios ya hechos para la comunicación. Construimos desde cero el servidor y el protocolo de red sobre sockets TCP:

- Servidor propio en .NET que atiende a varios clientes a la vez, con un hilo por conexión.
- Protocolo de mensajes propio: cada mensaje JSON viaja precedido de su longitud y de una confirmación de recepción, para que nada llegue cortado ni mezclado.
- Base de datos PostgreSQL gestionada con Entity Framework Core, con relaciones muchos a muchos entre usuarios y grupos.
- App multiplataforma con .NET MAUI (Android, iOS y Windows) con un calendario personalizado celda a celda.
- Mapa interactivo con Leaflet integrado en la app, con búsqueda de lugares mediante Photon y Nominatim, sin necesidad de API keys.
- Plan de QA completo con pruebas de funcionalidad, interfaz y comportamiento en redes inestables.`,
    tech: [".NET MAUI", "C#", "PostgreSQL", "Entity Framework", "Leaflet", "TCP Sockets"],
    media: { type: "image", src: "/projects/proyecto-1.png" },
    url: "https://heatmeetladingpaget.vercel.app/",
    repo: "https://github.com/JORGEGOOD/HeatMeet.git",
  },
  {
    id: "proyecto-2",
    title: "Face Recognition con LLM",
    description:
      "Una aplicación web interactiva de reconocimiento y análisis facial desarrollada con tecnologías modernas de frontend y modelos de visión artificial ejecutados localmente.",
    uses: `Arquitectura y Frontend: Desarrollada con Next.js (App Router) y TypeScript, optimizada para ofrecer una experiencia de usuario fluida, reactiva y modular.

Procesamiento de Visión Artificial: Integración de modelos especializados de aprendizaje automático (como face-api.js y pesos de face_landmark_68) para la detección de rostros, mapeo de puntos clave (landmarks) y reconocimiento facial en tiempo real directamente desde el navegador.

Interfaz de Usuario (UI/UX): Interfaz moderna y accesible construida con componentes personalizados y patrones visuales avanzados (shadcn/ui, Tailwind CSS), que incluye retroalimentación visual interactiva mediante capas de escaneo (scan overlays), animaciones fluidas y notificaciones en tiempo real.`,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "face-api.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide React",
      "Sonner",
      "Node.js",
      "Git",
    ],
    media: { type: "video", src: "/projects/proyecto-2.mp4" },
    url: "https://face-id-mbso.vercel.app/",
    repo: "https://github.com/JORGEGOOD/FaceID.git"
  },
];