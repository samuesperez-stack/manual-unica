import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { colors } from './theme/colors';
import { typography } from './theme/typography';

export interface CitaInstitucionalProps {
  categoria?: string;
  fecha?: string;
  citaTexto?: string;
  resaltadoTexto?: string;
  autorNombre?: string;
  autorCargo?: string;
  propuestaClave?: string;
}

export const CitaInstitucional: React.FC<CitaInstitucionalProps> = ({
  categoria = 'POSICIONAMIENTO OFICIAL Â· PILAR I',
  fecha = 'Noviembre 2026',
  citaTexto = 'El comerciante venezolano no necesita que le congelen precios, necesita una sola tasa real y crÃ©dito para trabajar.',
  resaltadoTexto = 'Menos discurso, mÃ¡s economÃ­a real',
  autorNombre = 'DirecciÃ³n Nacional',
  autorCargo = 'UniÃ³n y Cambio (ÃšNICA)',
  propuestaClave = 'Estabilizar primero: UnificaciÃ³n cambiaria en subasta libre y apertura de crÃ©ditos bancarios.',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance 1: Top Bar & Category badge (frames 0-25)
  const topSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7, stiffness: 130 },
  });

  // Entrance 2: Massive kinetic quote mark (frames 10-35) with snap scale
  const quoteMarkSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });
  const quoteScale = frame < 10 ? 0 : interpolate(quoteMarkSpring, [0, 1], [1.4, 1.0]);

  // Entrance 3: Main quote card unmasking & slide (frames 20-50)
  const cardSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 120 },
  });

  // Entrance 4: Highlighter callout sweep (frames 35-65)
  const highlighterWidth = interpolate(frame, [35, 65], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Entrance 5: Attribution footer & key takeaway (frames 50-80)
  const bottomSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.white,
        fontFamily: typography.headingFamily,
        overflow: 'hidden',
      }}
    >
      {/* 1. Barra Superior con Acento CitrÃ³n y Azul Royal */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 170,
          backgroundColor: colors.royalBlue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          boxShadow: '0 4px 24px rgba(0, 56, 168, 0.2)',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: colors.white,
              letterSpacing: '-1.5px',
            }}
          >
            UNIÃ“N Y CAMBIO
          </span>
        </div>
        <div
          style={{
            transform: `scale(${topSpring})`,
            backgroundColor: colors.citron,
            color: colors.royalBlue,
            padding: '10px 22px',
            borderRadius: 8,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '0.5px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
          }}
        >
          {categoria}
        </div>
      </div>

      {/* 2. Cuerpo Principal de la Cita */}
      <div
        style={{
          padding: '240px 60px 140px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Comilla Decorativa Masiva (Leyes Motionmaxxing: Entrada kinÃ©tica) */}
        {frame >= 10 && (
          <div
            style={{
              transform: `scale(${quoteScale})`,
              transformOrigin: 'bottom left',
              fontSize: 200,
              lineHeight: 0.7,
              fontWeight: 900,
              color: colors.citron,
              fontFamily: typography.quoteSerifFamily,
              marginBottom: 10,
              userSelect: 'none',
            }}
          >
            â€œ
          </div>
        )}

        {/* Tarjeta de Cita Principal con desenmascaramiento vertical */}
        <div
          style={{
            transform: `translateY(${(1 - cardSpring) * 50}px)`,
            opacity: Math.min(1, Math.max(0, cardSpring * 1.5)),
            marginBottom: 36,
          }}
        >
          <blockquote
            style={{
              margin: 0,
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.25,
              color: colors.darkSlate,
              letterSpacing: '-0.5px',
            }}
          >
            {citaTexto}
          </blockquote>

          {/* Highlighter callout */}
          {resaltadoTexto && frame >= 35 && (
            <div
              style={{
                display: 'inline-block',
                marginTop: 28,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0 10px 10px 0',
              }}
            >
              <div
                style={{
                  backgroundColor: colors.citronLight,
                  borderLeft: `8px solid ${colors.citron}`,
                  padding: '12px 24px',
                  fontSize: 32,
                  fontWeight: 800,
                  color: colors.royalBlue,
                  letterSpacing: '-0.3px',
                  maxWidth: `${highlighterWidth}%`,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                âš¡ {resaltadoTexto}
              </div>
            </div>
          )}
        </div>

        {/* 3. Bloque de AutorÃ­a / VocerÃ­a Institucional */}
        <div
          style={{
            transform: `translateY(${(1 - bottomSpring) * 40}px)`,
            opacity: Math.min(1, Math.max(0, bottomSpring * 1.5)),
            borderTop: `3px solid ${colors.citron}`,
            paddingTop: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: colors.royalBlue,
                letterSpacing: '-0.5px',
              }}
            >
              {autorNombre}
            </div>
            <div
              style={{
                fontFamily: typography.bodyFamily,
                fontSize: 24,
                fontWeight: 600,
                color: colors.grayText,
                marginTop: 4,
              }}
            >
              {autorCargo} Â· {fecha}
            </div>
          </div>
        </div>

        {/* 4. Propuesta PaÃ­s Pill (Pilar IV: Toda declaraciÃ³n trae propuesta) */}
        {propuestaClave && (
          <div
            style={{
              transform: `translateY(${(1 - bottomSpring) * 30}px)`,
              opacity: Math.min(1, Math.max(0, bottomSpring * 1.5)),
              marginTop: 36,
              backgroundColor: colors.cardBgLight,
              border: `2px solid ${colors.grayBorder}`,
              borderRadius: 18,
              padding: '22px 26px',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div
              style={{
                backgroundColor: colors.royalBlue,
                color: colors.white,
                borderRadius: 8,
                padding: '8px 16px',
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: '0.8px',
                whiteSpace: 'nowrap',
              }}
            >
              PROPUESTA
            </div>
            <span
              style={{
                fontFamily: typography.bodyFamily,
                fontSize: 24,
                fontWeight: 700,
                color: colors.darkSlate,
                lineHeight: 1.35,
              }}
            >
              {propuestaClave}
            </span>
          </div>
        )}
      </div>

      {/* 5. Footer de Cierre Institucional */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 60,
          right: 60,
          borderTop: `2px solid ${colors.grayBorder}`,
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            fontSize: 26,
            color: colors.grayText,
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          #LaFuerzaÃšNICA
        </span>
        <span
          style={{
            fontSize: 26,
            color: colors.royalBlue,
            fontWeight: 800,
            letterSpacing: '0.5px',
          }}
        >
          unionycambio.org
        </span>
      </div>
    </AbsoluteFill>
  );
};
