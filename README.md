# Manual de Marca — Unión y Cambio (ÚNICA)
### Identidad Visual, Cuatro Pilares y Estrategia de Comunicación Política | Venezuela 🇻🇪

Bienvenido al repositorio oficial de **Unión y Cambio**, organización política comprometida con la reconstrucción democrática, la estabilización económica y la cohesión social de Venezuela.

Este repositorio contiene el **Manual de Marca Oficial** y el documento doctrinario **Los Cuatro Pilares del Partido**, diseñados bajo el principio: **"Unidad en el qué, libertad en el cómo"**. Proporciona a las bases de los 335 municipios del país las herramientas gráficas, doctrinarias y comunicacionales para hacer política de alta calidad con identidad visual coherente y sin improvisaciones.

---

## 📌 Estructura del Repositorio

```text
manual-unica/
├── README.md                          # Visión general y guía de navegación
├── MANUAL_UNICA_COMPENDIO_TOTAL.md    # Compendio Maestro Integral Todo-en-Uno (Branding, Contenido y Motion)
├── LOS_CUATRO_PILARES.md              # Documento doctrinario y operativo oficial (Pilares I al IV)
├── MANUAL_DE_MARCA.md                 # Manual Maestro de Identidad Visual v2.0 (Sistema Tripartito & WCAG)
├── docs/                              # Desglose temático y guías modulares
│   ├── 01_identidad_y_proposito.md    # Misión, visión, fundamentos y manifiesto
│   ├── 02_simbologia_y_logotipo.md    # Isotipo, logotipo, áreas de reserva y usos
│   ├── 03_paleta_y_tipografia.md      # Códigos de color y fuentes
│   ├── 04_guia_redes_sociales.md      # Directrices de contenido (Qué pasa -> Por qué -> Solución)
│   ├── 05_material_calle_y_eventos.md # Material para activismo territorial y mítines
│   ├── 06_investigacion_partidos_y_3_propuestas_identidad.md # Benchmarking internacional y 3 propuestas
│   ├── 07_pilar_de_contenido_venezuela_real.md               # 5 ejes temáticos sin lugares comunes
│   ├── 08_motion_graphics_remotion_y_motionmaxxing.md        # Estándares técnicos de animación
│   └── parrilla_10_guiones_produccion.md                     # 10 guiones completos (5 carruseles + 5 reels)
├── remotion/                          # Suite de Motion Graphics en React/TypeScript
│   ├── package.json
│   └── src/
│       ├── Root.tsx                   # Registro de las 3 composiciones maestras (9:16 vertical)
│       ├── FormulaPilarIV.tsx         # Template 01: Tríada de denuncia y solución (45s)
│       ├── BrechaCambiariaChart.tsx   # Template 02: Gráfico animado de brecha cambiaria con contadores (15s)
│       ├── CitaInstitucional.tsx      # Template 03: Tarjeta de cita y posicionamiento doctrinario (10s)
│       └── theme/
│           ├── colors.ts              # Tokens de color institucionales
│           └── typography.ts          # Tokens de tipografía oficial
└── assets/                            # Repositorio de recursos gráficos descargables
    ├── logos/                         # Logotipo oficial, versiones transparentes e invertidas
    ├── arte_editable_sublimacion/     # Artes SVG/EPS para franelas de campaña (frente, espalda, mangas)
    ├── arco_carabobo/                 # Trazados vectoriales y líneas del Arco de Carabobo
    ├── mockups/                       # Mockups de producto y aplicaciones en indumentaria
    ├── fonts/                         # Enlaces y licencias tipográficas oficiales
    └── templates/                     # Plantillas base para piezas de diseño
```

---

## 🚀 Acceso Rápido a los Documentos Clave

- 🌟 **[Compendio Maestro Todo-en-Uno](MANUAL_UNICA_COMPENDIO_TOTAL.md)**: El documento unificado con todo el sistema de branding, contenido, guiones técnicos y código Remotion.
- 📜 **[Los Cuatro Pilares del Partido](LOS_CUATRO_PILARES.md)**: Fundamentación ideológica, autonomía de bases, metas de calidad y comunicación didáctica.
- 📖 **[Manual de Marca v2.0](MANUAL_DE_MARCA.md)**: Identidad tripartita, accesibilidad WCAG 2.1, sistema tipográfico y pautas de campo.
- 📋 **[Parrilla de 10 Guiones Técnicos](docs/parrilla_10_guiones_produccion.md)**: 5 carruseles 4:5 y 5 reels 9:16 con segundo a segundo de locución, pantalla y llamados a la acción.
- 🎬 **[Suite de Motion Graphics en Remotion](remotion/src/)**: Componentes React de alta retención (*Fórmula Pilar IV*, *Gráfico de Brecha Cambiaria* y *Cita Institucional*).
- 👕 **[Recursos de Campaña y Sublimación](assets/)**: Diseños vectoriales abiertos para confección textil y artes de calle.

---

## 🧭 Pilares Doctrinales y de Marca

| Pilar | Definición Política | Expresión Visual y Comunicacional |
| :--- | :--- | :--- |
| **I. Fundamentación Ideológica** | Centro político, economía social de mercado y estabilidad institucional. | Rigor técnico, seriedad en datos y coherencia nacional en las 30 líneas estratégicas. |
| **II. Autonomía de las Bases** | Las comunidades deciden cómo llevar el mensaje según su realidad local. | Plantillas adaptables y formatos versátiles para los 335 municipios. |
| **III. Metas y Medición** | Calidad sobre cantidad. Construir convicciones reales, no fotos infladas. | Rechazo a la estética vacía de actos fingidos; foco en hechos y testimonios verificables. |
| **IV. Comunicación Institucional** | Informar más y declarar menos. La institución habla antes que los personalismos. | Piezas didácticas, infografías pedagógicas y videos cortos orientados a soluciones. |

---

## 🛠️ Lineamientos para Contribuir

1. **Formatos Vectoriales**: Todo material final para impresión o logotipos debe subirse en formato `.svg` o vector abierto en `assets/logos/`.
2. **Uso de Versiones Oficiales**: Queda prohibido alterar colores, deformar proporciones o aplicar sombras/efectos no autorizados en el logotipo.
3. **Flujo de Trabajo Git**:
   - Crear una rama (`git checkout -b feature/nombre-recurso`).
   - Realizar los cambios correspondientes y documentar los aportes.
   - Solicitar Pull Request para revisión del equipo nacional de comunicaciones.
