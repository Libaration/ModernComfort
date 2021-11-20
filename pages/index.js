import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Chair = dynamic(() => import('../components/Chair.jsx'), { ssr: false });
export default function Home() {
  return (
    <>
      <Chair />
      <div className="flex flex-col text-8xl md:text-9xl w-full text-center font-sans">
        <div className="font-bold">modern</div>
        <div className="text-8xl">Comfort</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-60"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="fill-current text-blue-300"
          ></path>
        </svg>
      </div>
      <div className="flex text-center justify-center align-center">
        <div className="text-1xl w-48 md:mt-10 max-w-xs max-h-xs z-40 overflow-hidden text-blue-800">
          "The very best. I will refer everyone I know"
          <br />
          <span className="text-xs">- Romy K.</span>
        </div>
      </div>
    </>
  );
}
