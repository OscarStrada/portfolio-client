import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';

export const Banner = () => {
  return (
    <div className="w-full min-h-screen px-5 md:px-20">
      <div className="pt-44 space-y-5">
        <p className="text-lg text-gray-lighter">
          > console.log('Hola mundo, soy
          <span className="text-white"> Oscar Estrada</span>') _
        </p>
        <h1 className="md:w-3/4 text-[40px] md:text-[75px] leading-custom whitespace-pre-line">
          Frontend developer{' '}
          <span className="text-gray-light">
            y desarrollo ideas programando
          </span>
          <span className="text-green-custom">_</span>
        </h1>

        <div className="flex items-center space-x-5 pt-20 md:pt-40">
          <HiArrowNarrowDown />
          <div className="uppercase">continúa leyendo</div>
          <HiArrowNarrowDown />
        </div>
      </div>
    </div>
  );
};
