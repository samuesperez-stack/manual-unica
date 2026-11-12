import React from 'react';
import { Composition } from 'remotion';
import { FormulaPilarIV } from './FormulaPilarIV';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Composición en formato vertical 9:16 (TikTok, Reels, Shorts) */}
      <Composition
        id="FormulaPilarIV-Vertical"
        component={FormulaPilarIV}
        durationInFrames={1350} // 45 segundos a 30fps
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          quePasaTexto:
            'Más de 1.200 bodegas y comercios de barrio han cerrado este año por la brecha cambiaria.',
          porQuePasaTexto:
            'El Banco Central mantiene un tipo de cambio ficticio sin inyectar divisas, castigando al comerciante formal.',
          comoSeResuelveTexto:
            'Unificación cambiaria mediante subastas bancarias libres y eliminación del encaje legal para créditos en bolívares.',
          cifraClave: '48%',
        }}
      />
    </>
  );
};
