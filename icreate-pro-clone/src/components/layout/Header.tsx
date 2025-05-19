'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row bg-darker-gray text-white items-center w-full justify-between z-10">
      <Link href="/" className="pl-4">
        <Image
          src="/assets/graphics/logo-white.svg"
          alt="iCreate Pro Logo"
          width={30}
          height={30}
        />
      </Link>

      <nav className="hidden md:flex items-center pl-8">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/tutorial">Tutorial</Link>
        <Link className="nav-link" href="/download">Download</Link>
        <Link className="nav-link" href="/faq">FAQ</Link>
        <Link className="nav-link" href="/contact">Contact & Policies</Link>
        <Link className="nav-link" href="/features_pricing">Features & Pricing</Link>
      </nav>

      <nav className="flex items-center justify-end grow hidden md:flex">
        <Link className="nav-link" href="/register">Register</Link>
        <Link className="nav-link" href="/login">Log In</Link>
      </nav>

      <div className="relative md:hidden items-center pl-8 group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 hover:bg-dark-gray group-open:bg-dark-gray shrink-0"
        >
          <div className="items-center">
            <span className="py-4 font-Inter text-xl block">Home</span>
          </div>
          <Image
            src="/assets/graphics/dropdown.svg"
            alt="dropdown"
            width={20}
            height={20}
            className="ml-2"
          />
        </button>

        {isOpen && (
          <div id="navDropdown" className="absolute bg-dark-gray rounded-b-md shadow-lg right-0 w-60 z-30 font-Inter">
            <Link className="nav-link block" href="/">Home</Link>
            <Link className="nav-link block" href="/tutorial">Tutorial</Link>
            <Link className="nav-link block" href="/download">Download</Link>
            <Link className="nav-link block" href="/faq">FAQ</Link>
            <Link className="nav-link block" href="/contact">Contact & Policies</Link>
            <Link className="nav-link block" href="/features_pricing">Features & Pricing</Link>
            <Link className="nav-link block" href="/register">Register</Link>
            <Link className="nav-link block" href="/login">Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
