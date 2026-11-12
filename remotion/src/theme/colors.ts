/**
 * Brand color tokens for Union y Cambio (UNICA) Remotion Compositions
 * Based on MANUAL_DE_MARCA.md and docs/08_motion_graphics_remotion_y_motionmaxxing.md
 */

export const colors = {
  // Brand Primaries
  royalBlue: '#0038A8',      // Azul Royal Institucional (Manual de Marca)
  cobaltBlue: '#002AFF',     // Azul Digital Electrico
  citron: '#C6D822',         // Verde Lima / Citron Primario
  citronLight: '#F4F8D3',    // Lima Suave / Pastel de AcompaÃ±amiento

  // Functional & Alerts
  orangeAccent: '#FF6B35',   // Naranja Transformacion / Brecha Paralelo
  darkSlate: '#1E293B',      // Gris Pizarra Oscuro
  darkHeading: '#111827',    // Gris Carbon Titulares

  // Neutrals & Backgrounds
  white: '#FFFFFF',
  grayBorder: '#E5E7EB',
  grayText: '#4B5563',
  grayMuted: '#9CA3AF',
  cardBgLight: '#F8FAFC',
  cardAlertBg: '#FFF5F0',
} as const;

export type BrandColors = typeof colors;

