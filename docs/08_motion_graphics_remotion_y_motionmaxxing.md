# Guía de Motion Graphics con Remotion y Estándares de Calidad "Motionmaxxing"
## Unión y Cambio (ÚNICA) — Producción Audiovisual de Vanguardia

---

## 1. Referencias Mundiales de Motion Graphics para Política y Datos

Para transformar el **Pilar IV ("Informar más y declarar menos")** en piezas audiovisuales de clase mundial, nos basamos en los mejores referentes internacionales de periodismo explicativo, tecnología y finanzas:

### Referencia 1: Vox "Earworm" & "Explained"
- **Por qué funciona:** Toma temas técnicos complejos y los desglosa visualmente en menos de 60 segundos.
- **Técnicas de motion:**
  - Resaltador tipo marcador sobre documentos reales y gacetas oficiales.
  - Recortes limpios de texto (Split-text) con ritmo sincopado.
  - Mapas vectoriales donde la cámara hace zoom continuo hacia una región o municipio específico.

### Referencia 2: Johnny Harris (Didactic Motion Journalism)
- **Por qué funciona:** Máxima retención visual mediante el uso de texturas táctiles, animación de mapas 2.5D y flechas vectoriales de flujo económico.
- **Técnicas de motion:**
  - Animación de trazos de ruta (`strokeDashoffset`) guiando la mirada del espectador.
  - Fotografías de época o de archivo integradas en capas con efecto parallax sutil.

### Referencia 3: Bloomberg Quicktake / The Economist Data Stories
- **Por qué funciona:** Confiabilidad absoluta en la presentación de datos económicos.
- **Técnicas de motion:**
  - Gráficos de barras y líneas que entran acelerados con desaceleración elástica medida (`power3.out`).
  - Contadores numéricos que giran a velocidad de frames y se detienen exactamente en la cifra clave (ej: *"48% de brecha cambiaria"*).

### Referencia 4: Apple Product Keynotes & Stripe Identity
- **Por qué funciona:** Tipografía cinética con un ritmo impecable donde cada palabra aparece sincronizada con el habla natural.
- **Técnicas de motion:**
  - Transiciones sin fundido negro: el último cuadro de la escena A se convierte en el primer cuadro de la escena B (handoff fluido).
  - Tipografía masiva de alto contraste que reduce su escala al aterrizar (`scale: 1.2` a `scale: 1.0`).

---

## 2. Aplicación de las Leyes de "Motionmaxxing" a Remotion

En la producción con **Remotion** (React + TypeScript) se prohíbe el "AI slop" (diseño genérico y sin propósito). Se siguen estrictamente estas leyes de animación:

1. **Sin HUDs falsos ni adornos vacíos:** Nada de barras de progreso ficticias, esquinas con corchetes de ciencia ficción o etiquetas estilo "SCENE 01 / VENEZUELA". Todo elemento en pantalla comunica un dato real.
2. **Corte en movimiento, nunca en reposo:** Los cortes entre escenas ocurren mientras los elementos aún se están desplazando. Nunca se deja una pantalla estática esperando el siguiente corte.
3. **Las cosas llegan por movimiento o máscara, casi nunca por fundido (fade-in):** Los textos y gráficos entran por desenmascaramiento vertical (`clip-path`) o desplazamiento con desaceleración fuerte en los primeros 4 a 8 frames.
4. **Ritmo de habla humano:** Las palabras clave en pantalla aparecen al compás del guión de locución (a un ritmo de 3 a 5 frames por palabra para enganches rápidos).
5. **Contadores físicos medidos:** Cuando se muestra un número económico, el contador numérico avanza cuadro a cuadro mediante `Math.floor(interpolate(frame, ...))` y aterriza exactamente en el valor final.

---

## 3. Arquitectura del Proyecto en Remotion

```text
remotion/
├── Root.tsx                           # Registro de composiciones (Reels 9:16 y Horizontal 16:9)
├── compositions/
│   ├── FormulaPilarIV.tsx             # Plantilla: Qué pasa -> Por qué pasa -> Cómo se resuelve
│   ├── DataCardEconomia.tsx           # Gráfico explicativo de inflación/brecha con contador
│   └── TipografiaCinetica.tsx         # Entregas de titulares de alto impacto en Azul y Citrón
└── theme/
    ├── colors.ts                      # Azul Cobalto (#002AFF), Citrón (#C6D822), Blanco
    └── typography.ts                  # Montserrat Bold / Inter
```

---

## 4. Código Fuente de la Plantilla: `FormulaPilarIV.tsx`

A continuación se presenta el componente base desarrollado en Remotion para producir videos automatizados de 45 segundos para Instagram Reels y TikTok:

```tsx
import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

interface PilarIVProps {
  quePasaTexto: string;
  porQuePasaTexto: string;
  comoSeResuelveTexto: string;
  cifraClave?: string;
}

export const FormulaPilarIV: React.FC<PilarIVProps> = ({
  quePasaTexto,
  porQuePasaTexto,
  comoSeResuelveTexto,
  cifraClave,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Escena 1: Qué Pasa (0 a 14 segundos: frames 0 a 420 a 30fps)
  // Escena 2: Por Qué Pasa (14 a 28 segundos: frames 420 a 840)
  // Escena 3: Cómo Se Resuelve (28 a 45 segundos: frames 840 a 1350)

  // Entrada dinámica con física de resorte (spring)
  const introSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {/* Cintillo Superior Institucional */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          backgroundColor: '#C6D822',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: '#002AFF',
            letterSpacing: '-1.5px',
          }}
        >
          UNIÓN Y CAMBIO
        </span>
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#002AFF',
            textTransform: 'uppercase',
          }}
        >
          Propuesta País
        </span>
      </div>

      {/* Contenedor Central Dinámico */}
      <div
        style={{
          padding: '240px 60px 100px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {frame < 420 && (
          <div style={{ transform: `scale(${introSpring})` }}>
            <div
              style={{
                backgroundColor: '#002AFF',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: 8,
                display: 'inline-block',
                fontSize: 32,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              1. ¿QUÉ PASA?
            </div>
            <h1
              style={{
                fontSize: 64,
                color: '#111827',
                lineHeight: 1.15,
                fontWeight: 800,
              }}
            >
              {quePasaTexto}
            </h1>
          </div>
        )}

        {frame >= 420 && frame < 840 && (
          <div>
            <div
              style={{
                backgroundColor: '#1E293B',
                color: '#C6D822',
                padding: '12px 28px',
                borderRadius: 8,
                display: 'inline-block',
                fontSize: 32,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              2. ¿POR QUÉ PASA?
            </div>
            <h2
              style={{
                fontSize: 60,
                color: '#111827',
                lineHeight: 1.2,
                fontWeight: 700,
              }}
            >
              {porQuePasaTexto}
            </h2>
          </div>
        )}

        {frame >= 840 && (
          <div>
            <div
              style={{
                backgroundColor: '#C6D822',
                color: '#002AFF',
                padding: '12px 28px',
                borderRadius: 8,
                display: 'inline-block',
                fontSize: 32,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              3. ¿CÓMO SE RESUELVE?
            </div>
            <h2
              style={{
                fontSize: 62,
                color: '#002AFF',
                lineHeight: 1.2,
                fontWeight: 800,
              }}
            >
              {comoSeResuelveTexto}
            </h2>
          </div>
        )}
      </div>

      {/* Pie de Pantalla con Llamado a la Acción */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 60,
          right: 60,
          borderTop: '3px solid #E5E7EB',
          paddingTop: 30,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 32, color: '#4B5563', fontWeight: 600 }}>
          #LaFuerzaÚNICA
        </span>
        <span style={{ fontSize: 32, color: '#002AFF', fontWeight: 800 }}>
          @UnionYCambioVe
        </span>
      </div>
    </AbsoluteFill>
  );
};
```
