/**
 * Typography tokens and font stacks for Union y Cambio (UNICA) Remotion Compositions
 * Based on MANUAL_DE_MARCA.md and docs/03_paleta_y_tipografia.md
 */

export const typography = {
  headingFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  bodyFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  quoteSerifFamily: "'Georgia', 'Times New Roman', serif",

  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
} as const;

export type TypographyTokens = typeof typography;

