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
    </>
  );
}
