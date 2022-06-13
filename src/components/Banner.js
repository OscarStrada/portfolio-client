import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';

export const Banner = () => {
  return (
    <div className="w-full min-h-screen px-5 md:px-20 bg-light-custom dark:bg-dark-custom">
      <div className="pt-44 space-y-5">
        <p className="text-lg text-gray-400 dark:text-gray-lighter">
          > console.log('Hola mundo, soy
          <span className="dark:text-white"> Oscar Estrada</span>') _
        </p>
        <h1 className="md:w-3/4 text-[40px] md:text-[85px] leading-custom whitespace-pre-line dark:text-white">
          Frontend developer{' '}
          <span className="dark:text-gray-light">freelancer</span>
          <span className="text-green-custom">_</span>
        </h1>

        {/* <p className="md:w-2/3 text-lg text-gray-lighter pt-28">
          Diseño y construyo interfaces web, enfocadas en la experiencia de
          usuario. Me especializó en el stack MERN_
        </p> */}

        <div className="flex items-center space-x-5 pt-20 md:pt-64 dark:text-white">
          <HiArrowNarrowDown />
          <div className="uppercase">acerca de mi</div>
          <HiArrowNarrowDown />
        </div>
      </div>
    </div>
  );
};
