import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { FormulaPilarIV, FormulaPilarIVProps } from './FormulaPilarIV';
import { BrechaCambiariaChart, BrechaCambiariaProps } from './BrechaCambiariaChart';
import { CitaInstitucional, CitaInstitucionalProps } from './CitaInstitucional';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 1. ComposiciÃ³n Base: FÃ³rmula Pilar IV (Reels/TikTok 9:16, 45s a 30fps) */}
      <Composition<any, FormulaPilarIVProps & Record<string, unknown>>
        id="FormulaPilarIV-Vertical"
        component={FormulaPilarIV}
        durationInFrames={1350} // 45 segundos
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          quePasaTexto:
            'MÃ¡s de 1.200 bodegas y comercios de barrio han cerrado este aÃ±o por la brecha cambiaria.',
          porQuePasaTexto:
            'El Banco Central mantiene un tipo de cambio ficticio sin inyectar divisas, castigando al comerciante formal.',
          comoSeResuelveTexto:
            'UnificaciÃ³n cambiaria mediante subastas bancarias libres y eliminaciÃ³n del encaje legal para crÃ©ditos en bolÃ­vares.',
          cifraClave: '48%',
        }}
      />

      {/* 2. ComposiciÃ³n: GrÃ¡fico DinÃ¡mico de Brecha Cambiaria (Vertical 9:16, 15s a 30fps) */}
      <Composition<any, BrechaCambiariaProps & Record<string, unknown>>
        id="BrechaCambiaria-Vertical"
        component={BrechaCambiariaChart}
        durationInFrames={450} // 15 segundos
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          titulo: 'La brecha cambiaria asfixia a los comercios de barrio',
          subtitulo: 'EconomÃ­a Real vs. FicciÃ³n Oficial',
          tasaOficialLabel: 'Tasa Oficial BCV',
          tasaOficialValor: 52.4,
          tasaParaleloLabel: 'Tasa Mercado Real',
          tasaParaleloValor: 77.55,
          moneda: 'Bs.',
          porcentajeBrecha: 48,
          diagnosticoTexto:
            'Si compras a tasa de mercado y te obligan a vender a BCV, cada venta reduce tu capital de reposiciÃ³n.',
          solucionTexto:
            'UnificaciÃ³n cambiaria inmediata mediante subastas bancarias libres y fin del encaje legal.',
        }}
      />

      {/* 3. ComposiciÃ³n: Plantilla de Citas Institucionales RÃ¡pidas (Vertical 9:16, 10s a 30fps) */}
      <Composition<any, CitaInstitucionalProps & Record<string, unknown>>
        id="CitaInstitucional-Vertical"
        component={CitaInstitucional}
        durationInFrames={300} // 10 segundos
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          categoria: 'POSICIONAMIENTO OFICIAL Â· PILAR I',
          fecha: 'Noviembre 2026',
          citaTexto:
            'El comerciante venezolano no necesita que le congelen precios, necesita una sola tasa real y crÃ©dito para trabajar.',
          resaltadoTexto: 'Menos discurso, mÃ¡s economÃ­a real',
          autorNombre: 'DirecciÃ³n Nacional',
          autorCargo: 'UniÃ³n y Cambio (ÃšNICA)',
          propuestaClave:
            'Estabilizar primero: UnificaciÃ³n cambiaria en subasta libre y apertura de crÃ©ditos bancarios.',
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);

