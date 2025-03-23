"use client";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

const metadata: Metadata = {
  title: "El Tourmalet - La tienda del ciclista en Estepona",
  description:
    "La tienda del ciclista en Estepona, especializados en compra y alquiler de bicicletas. Taller de reparación, bicicletas de montaña, eléctricas y más.",
  keywords:
    "bicicletas, ciclismo, Estepona, taller, reparación, alquiler, bicicletas eléctricas, mountain bike",
  openGraph: {
    title: "El Tourmalet - La tienda del ciclista en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Taller de reparación profesional.",
    images: ["https://ext.same-assets.com/3643569872/1148576980.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tourmalet - La tienda del ciclista en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Taller de reparación profesional.",
    images: ["https://ext.same-assets.com/3643569872/1148576980.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8d74c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-primary text-black px-4 py-2 z-50 rounded-md"
        >
          Saltar al contenido principal
        </a>

        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/95 shadow-md">
          {/* Top bar */}
          <div className="bg-black/90 px-4 py-2 text-sm flex flex-col md:flex-row justify-between items-center">
            <div className="text-yellow-400 space-x-2 flex flex-wrap justify-center items-center gap-2">
              <a
                href="tel:+34951273999"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+34 951 27 39 99</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="tel:+34620308845"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+34 620 30 88 45</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="mailto:info@eltourmalet.com"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>info@eltourmalet.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/eltourmalet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="h-4 w-4 text-white hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/eltourmaletestepona/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-4 w-4 text-white hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Main navigation */}
          <nav className="bg-background/95" aria-label="Navegación principal">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                  <Image
                    src="https://ext.same-assets.com/3643569872/1148576980.png"
                    alt="ElTourmalet Logo"
                    className="h-16 md:h-20"
                    width={200}
                    height={80}
                    loading="eager"
                  />
                </Link>

                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Menú principal"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex primary-nav items-center gap-6 text-lg">
                  <Link href="/">Inicio</Link>
                  <Link href="/quienes-somos">Quienes somos</Link>
                  <Link href="/servicios">Servicios</Link>
                  <Link href="/bicicletas">Bicicletas</Link>
                  <Link href="/accesorios">Accesorios</Link>
                  <Link href="/club">Club</Link>
                  <Link href="/contacto">Contacto</Link>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div
                id="mobile-menu"
                className={`md:hidden primary-nav ${
                  isMenuOpen ? "block animate-fadeIn" : "hidden"
                } pt-4`}
              >
                <div className="flex flex-col gap-4 text-lg">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    Inicio
                  </Link>
                  <Link
                    href="/quienes-somos"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Quienes somos
                  </Link>
                  <Link href="/servicios" onClick={() => setIsMenuOpen(false)}>
                    Servicios
                  </Link>
                  <Link href="/bicicletas" onClick={() => setIsMenuOpen(false)}>
                    Bicicletas
                  </Link>
                  <Link href="/accesorios" onClick={() => setIsMenuOpen(false)}>
                    Accesorios
                  </Link>
                  <Link href="/club" onClick={() => setIsMenuOpen(false)}>
                    Club
                  </Link>
                  <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main id="main-content" className="flex-grow">
          <Suspense fallback={<div className="animate-pulse">Cargando...</div>}>
            {children}
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-[#383838] text-gray-300 mt-12">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-primary font-bold text-xl mb-4">
                  CONTACTO
                </h3>
                <address className="not-italic">
                  <p className="mb-2">Calle Parque Central 9, Local 1</p>
                  <p className="mb-4">29680 Estepona</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+34951273999"
                      className="footer-link flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>+34 951 27 39 99</span>
                    </a>
                    <a
                      href="tel:+34620308845"
                      className="footer-link flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>+34 620 30 88 45</span>
                    </a>
                    <a
                      href="mailto:info@eltourmalet.com"
                      className="footer-link flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>info@eltourmalet.com</span>
                    </a>
                  </div>
                </address>
              </div>

              <div>
                <h3 className="text-primary font-bold text-xl mb-4">HORARIO</h3>
                <ul className="space-y-2">
                  <li>Lunes a Viernes: 10:00 - 14:00 | 17:00 - 20:00</li>
                  <li>Sábados: 10:00 - 14:00</li>
                  <li>Domingos: Cerrado</li>
                </ul>
              </div>

              <div>
                <h3 className="text-primary font-bold text-xl mb-4">
                  SÍGUENOS
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/eltourmalet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/eltourmaletestepona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-[#2a2a2a] py-6 px-4">
            <div className="container mx-auto text-center text-sm">
              <p>
                Copyright 2024 ©ElTourmalet | Todos los derechos reservados |
                Diseñado por{" "}
                <a
                  href="https://www.linkedin.com/in/francisco-torra-lopez/"
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Francisco Torra
                </a>
              </p>
            </div>
          </div>

          {/* Cookie banner */}
          {showCookieBanner && (
            <div className="cookie-banner">
              <p className="text-sm md:text-base">
                Esta web usa cookies propias y de terceros para ofrecer un mejor
                servicio y hacer estadísticas de datos de uso.
                <Link
                  href="/politica-cookies"
                  className="text-primary hover:underline ml-1"
                >
                  Más información
                </Link>
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="btn btn-primary text-sm"
                  aria-label="Aceptar cookies"
                >
                  Aceptar
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="text-sm hover:underline"
                  aria-label="Rechazar cookies"
                >
                  Rechazar
                </button>
              </div>
            </div>
          )}
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
