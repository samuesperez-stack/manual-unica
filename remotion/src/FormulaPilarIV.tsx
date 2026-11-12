import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export interface FormulaPilarIVProps {
  quePasaTexto: string;
  porQuePasaTexto: string;
  comoSeResuelveTexto: string;
  cifraClave?: string;
}

export const FormulaPilarIV: React.FC<FormulaPilarIVProps> = ({
  quePasaTexto,
  porQuePasaTexto,
  comoSeResuelveTexto,
  cifraClave,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animaciones tipo spring según las leyes de motionmaxxing (medidas en frames)
  const introSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  const step2Spring = spring({
    frame: frame - 420,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  const step3Spring = spring({
    frame: frame - 840,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header Institucional */}
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
            fontSize: 26,
            fontWeight: 700,
            color: '#002AFF',
            letterSpacing: '1px',
          }}
        >
          PROPUESTA PAÍS
        </span>
      </div>

      {/* Contenido en 3 Actos */}
      <div
        style={{
          padding: '240px 60px 140px 60px',
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
          <div style={{ transform: `scale(${step2Spring})` }}>
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
          <div style={{ transform: `scale(${step3Spring})` }}>
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

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: 60,
          right: 60,
          borderTop: '2px solid #E5E7EB',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 28, color: '#4B5563', fontWeight: 600 }}>
          #LaFuerzaÚNICA
        </span>
        <span style={{ fontSize: 28, color: '#002AFF', fontWeight: 800 }}>
          @UnionYCambioVe
        </span>
      </div>
    </AbsoluteFill>
  );
};
