import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
const Chair = dynamic(() => import('../components/Chair.jsx'), { ssr: false });
import Testimonials from '../components/Testimonials.jsx';
export default function Home(props) {
  const shippingRef = useRef(null);
  return (
    <>
      <div className="bg-blue-500 pb-36 sm:pb-36 md:pb-20 lg:pb-20">
        <Chair />
        <div className="flex flex-col text-8xl md:text-9xl w-full text-center font-sans">
          <div className="font-bold text-white">modern</div>
          <div className="text-8xl -mt-6">Comfort</div>
        </div>
        <Testimonials />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none mb-5">
          <svg
            className="relative block w-full h-60"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="fill-current text-white"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center content-center mt-10">
        <div className="flex-1 text-center content-center leading-6 pt-10">
          <span className="text-3xl">Lightspeed shipping</span>
          <p />
          All of our items are on hand, we'll ship out in 3 days or less!
        </div>
        <div className="flex-1 text-center content-center pt-10 md:pt-0 sm:pt-0 lg:pt-0">
          <Image src="/deliver.gif" width={128} height={128} />
        </div>
      </div>
      <div className="flex justify-center content-center mt-10">
        <div className="flex-1 text-center content-center leading-6 pt-10">
          <Image src="/credit.gif" width={128} height={128} />
        </div>
        <div className="flex-1 text-center content-center mt-10 md:pt-0 sm:pt-0 lg:pt-0">
          <span className="text-3xl">Fast, Easy, Flexible Loans</span>
          <p />
          No late fees or compounding interest. At Modern Comfort there are no
          hidden fees. Instead, you get a simple, easy, transparent way to shop.
        </div>
      </div>
    </>
  );
}
