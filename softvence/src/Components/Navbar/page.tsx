"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-white h-24">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <div className="w-32 rounded-md flex items-center justify-center font-bold">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={147}
              height={60}
              priority
            />
          </div>
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/register"
            className="bg-[#3BA334] text-white px-7 py-2 shadow-lg shadow-[#39a4323d] font-bold rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3BA334]"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">
          <Link
            href="/register"
            className="block w-full text-center bg-[#3BA334] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
            onClick={close}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
