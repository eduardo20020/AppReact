"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <div className="text-xl font-bold text-gray-800 flex items-center space-x-2">
          <span>CodigoRegio</span>
          <Image
            src="/pepe.png"
            alt="Logo de CodigoRegio"
            width={50}
            height={50}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Acerca</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Servicios</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Contacto</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-4 pb-4 space-y-2">
            <li><a href="#" className="block text-gray-600 hover:text-gray-800">Inicio</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-800">Acerca</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-800">Servicios</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-800">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
