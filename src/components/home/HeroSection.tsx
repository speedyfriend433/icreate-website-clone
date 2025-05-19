'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-96 bg-heading bg-[30%_bottom] bg-cover">
      <div className="flex flex-col-reverse sm:flex-row gap-2 justify-center items-center bg-black/60 text-white h-full">
        <div className="text-center sm:text-left">
          <h1 className="font-semibold sm:text-7xl">iShitPro</h1>
          <h5 className="sm:text-2xl text-center md:text-left pb-6 md:pb-4">
            Geometry Dash hacks for iOS
          </h5>
          <div className="md:flex md:flex-row items-center">
            <Link
              href="/download"
              className="rounded-md relative block mx-auto md:mx-0 w-1/2 mb-4 md:mb-0 md:mr-4"
            >
              <div className="bg-black/40 rounded-md px-6 py-1.5 text-center border border-lime hover:bg-lime hover:text-black transition-all">
                Download
              </div>
            </Link>

            <Link
              href="/features_pricing"
              className="rounded-md relative block mx-auto md:mx-0 w-1/2"
            >
              <div className="bg-black/40 rounded-md px-6 py-1.5 text-center border border-white hover:bg-white hover:text-black transition-all">
                Buy Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
