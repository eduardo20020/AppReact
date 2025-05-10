"use client";

import Head from 'next/head';
import React from 'react';

export default function Main() {
  return (
        <>
        <Head>
        <title>CodigoRegio - Soluciones Tecnológicas en Monterrey</title>
        <meta name="description" content="Ofrecemos soluciones tecnológicas, desarrollo web y plataformas de comercio electrónico en Monterrey." />
        <meta name="keywords" content="desarrollo web, comercio electrónico, soluciones tecnológicas, Monterrey" />
        <meta name="author" content="CodigoRegio" />
      </Head>
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-15 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Bienvenido a CodigoRegio
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Soluciones tecnológicas y páginas web a tu medida, enfocados en la zona metropolitana de Monterrey.
        </p>

        <a
          href="mailto:contacto@codigoregio.com"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700"
        >
          Cotizar Ahora
        </a>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Nuestros Servicios
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Desarrollamos tu plataforma de comercio electronico</h3>
            <p className="text-gray-600">
              Plataformas de venta en línea escalables y seguras.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">
              Creación de sitios web responsivos y optimizados para tu negocio.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Soluciones a Medida</h3>
            <p className="text-gray-600">
              Aplicaciones y herramientas personalizadas para tus procesos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">
            ¿Listo para tu proyecto?
          </h2>
          <p className="mt-4">
            Envíanos un correo y te cotizamos sin compromiso:
          </p>
          <a
            href="mailto:contacto@codigoregio.com"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100"
          >
            contacto@codigoregio.com
          </a>
        </div>
      </section>
    </main>
        </>

  );
}
