import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import { colors } from './theme/colors';
import { typography } from './theme/typography';

export interface BrechaCambiariaProps {
  titulo?: string;
  subtitulo?: string;
  tasaOficialLabel?: string;
  tasaOficialValor?: number;
  tasaParaleloLabel?: string;
  tasaParaleloValor?: number;
  moneda?: string;
  porcentajeBrecha?: number;
  diagnosticoTexto?: string;
  solucionTexto?: string;
}

export const BrechaCambiariaChart: React.FC<BrechaCambiariaProps> = ({
  titulo = 'La brecha cambiaria asfixia a los comercios de barrio',
  subtitulo = 'EconomÃ­a Real vs. FicciÃ³n Oficial',
  tasaOficialLabel = 'Tasa Oficial BCV',
  tasaOficialValor = 52.4,
  tasaParaleloLabel = 'Tasa Mercado Real',
  tasaParaleloValor = 77.55,
  moneda = 'Bs.',
  porcentajeBrecha = 48,
  diagnosticoTexto = 'Si compras a tasa de mercado y te obligan a vender a BCV, cada venta reduce tu capital de reposiciÃ³n.',
  solucionTexto = 'UnificaciÃ³n cambiaria inmediata mediante subastas bancarias libres y fin del encaje legal.',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- MOTIONMAXXING CURVES & SPRINGS ---
  // Entrance spring for top header & title (frames 0-30)
  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  // Bars growth progression (frames 20-75) with ease-out cubic
  const barProgress = interpolate(frame, [20, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // Counter 1: Official Rate (frames 20-70)
  const currentOficial = interpolate(frame, [20, 70], [0, tasaOficialValor], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Counter 2: Parallel Rate (frames 25-75)
  const currentParalelo = interpolate(frame, [25, 75], [0, tasaParaleloValor], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Gap Badge Elastic Spring Slam entrance (frames 70-110)
  // Scale transition from 1.3 to 1.0 with snappy overshoot
  const rawGapSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 150 },
  });
  const gapScale = frame < 70 ? 0 : interpolate(rawGapSpring, [0, 1], [1.3, 1.0]);

  // Counter 3: Gap Percentage (frames 75-115) - physical counted frames
  const currentGap = Math.floor(
    interpolate(frame, [75, 115], [0, porcentajeBrecha], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Diagnostic & Solution cards unmasking (frames 140-180)
  const cardsSpring = spring({
    frame: frame - 140,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 110 },
  });

  const maxVal = Math.max(tasaOficialValor, tasaParaleloValor, 1);
  const maxBarHeight = 440;
  const oficialHeight = (tasaOficialValor / maxVal) * maxBarHeight * barProgress;
  const paraleloHeight = (tasaParaleloValor / maxVal) * maxBarHeight * barProgress;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.white,
        fontFamily: typography.headingFamily,
        color: colors.darkHeading,
        overflow: 'hidden',
      }}
    >
      {/* 1. Header Superior Institucional */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          backgroundColor: colors.citron,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: colors.royalBlue,
              letterSpacing: '-1.5px',
            }}
          >
            UNIÃ“N Y CAMBIO
          </span>
        </div>
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: colors.royalBlue,
            letterSpacing: '1px',
            backgroundColor: colors.white,
            padding: '8px 18px',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          OBSERVATORIO ECONÃ“MICO
        </span>
      </div>

      {/* 2. Ãrea Central de Contenido */}
      <div
        style={{
          padding: '210px 60px 140px 60px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Titular DinÃ¡mico con desenmascaramiento vertical */}
        <div
          style={{
            transform: `translateY(${(1 - headerSpring) * -40}px)`,
            opacity: Math.min(1, Math.max(0, headerSpring * 1.5)),
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: colors.orangeAccent,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              display: 'block',
              marginBottom: 8,
            }}
          >
            {subtitulo}
          </span>
          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.15,
              color: colors.darkSlate,
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            {titulo}
          </h1>
        </div>

        {/* 3. Contenedor del GrÃ¡fico de Barras y Brecha */}
        <div
          style={{
            backgroundColor: colors.cardBgLight,
            borderRadius: 24,
            border: `2px solid ${colors.grayBorder}`,
            padding: '40px 40px 30px 40px',
            marginBottom: 32,
            position: 'relative',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Badge Central de Brecha (Motionmaxxing Spring Slam 1.3 -> 1.0) */}
          {frame >= 70 && (
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: 36,
                transform: `scale(${gapScale})`,
                backgroundColor: colors.orangeAccent,
                color: colors.white,
                padding: '16px 28px',
                borderRadius: 18,
                boxShadow: '0 14px 34px rgba(255, 107, 53, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  opacity: 0.95,
                }}
              >
                BRECHA REAL
              </span>
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-1px',
                }}
              >
                +{currentGap}%
              </span>
            </div>
          )}

          {/* GrÃ¡fico Comparativo de Barras */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              height: 480,
              borderBottom: `3px solid ${colors.grayBorder}`,
              paddingBottom: 12,
            }}
          >
            {/* Barra 1: Tasa Oficial BCV */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 320,
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 900,
                  color: colors.royalBlue,
                  marginBottom: 12,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {currentOficial.toFixed(2)} {moneda}
              </div>
              <div
                style={{
                  width: '100%',
                  height: Math.max(12, oficialHeight),
                  backgroundColor: colors.royalBlue,
                  borderRadius: '16px 16px 0 0',
                  boxShadow: '0 6px 20px rgba(0, 56, 168, 0.25)',
                }}
              />
              <span
                style={{
                  marginTop: 18,
                  fontSize: 24,
                  fontWeight: 800,
                  color: colors.darkSlate,
                  textAlign: 'center',
                }}
              >
                {tasaOficialLabel}
              </span>
            </div>

            {/* Barra 2: Tasa Mercado Paralelo */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 320,
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 900,
                  color: colors.orangeAccent,
                  marginBottom: 12,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {currentParalelo.toFixed(2)} {moneda}
              </div>
              <div
                style={{
                  width: '100%',
                  height: Math.max(12, paraleloHeight),
                  backgroundColor: colors.orangeAccent,
                  borderRadius: '16px 16px 0 0',
                  boxShadow: '0 6px 20px rgba(255, 107, 53, 0.25)',
                }}
              />
              <span
                style={{
                  marginTop: 18,
                  fontSize: 24,
                  fontWeight: 800,
                  color: colors.darkSlate,
                  textAlign: 'center',
                }}
              >
                {tasaParaleloLabel}
              </span>
            </div>
          </div>
        </div>

        {/* 4. DiagnÃ³stico y SoluciÃ³n (Pilar IV TrÃ­ada) */}
        {frame >= 140 && (
          <div
            style={{
              transform: `translateY(${(1 - cardsSpring) * 50}px)`,
              opacity: Math.min(1, Math.max(0, cardsSpring * 1.5)),
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {/* Tarjeta DiagnÃ³stico */}
            <div
              style={{
                backgroundColor: colors.cardAlertBg,
                borderLeft: `8px solid ${colors.orangeAccent}`,
                borderRadius: '0 16px 16px 0',
                padding: '22px 28px',
                boxShadow: '0 4px 16px rgba(255, 107, 53, 0.08)',
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: colors.orangeAccent,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                Â¿QuÃ© pasa en la calle?
              </span>
              <p
                style={{
                  fontFamily: typography.bodyFamily,
                  fontSize: 26,
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: colors.darkSlate,
                  margin: 0,
                }}
              >
                {diagnosticoTexto}
              </p>
            </div>

            {/* Tarjeta SoluciÃ³n ÃšNICA */}
            <div
              style={{
                backgroundColor: colors.citronLight,
                borderLeft: `8px solid ${colors.royalBlue}`,
                borderRadius: '0 16px 16px 0',
                padding: '22px 28px',
                boxShadow: '0 4px 16px rgba(0, 56, 168, 0.08)',
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: colors.royalBlue,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                CÃ³mo se resuelve (Pilar I)
              </span>
              <p
                style={{
                  fontFamily: typography.bodyFamily,
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: colors.royalBlue,
                  margin: 0,
                }}
              >
                {solucionTexto}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 5. Footer Institucional */}
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
          @UnionYCambioVe
        </span>
      </div>
    </AbsoluteFill>
  );
};
