"use client";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import defaultMetadata from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cookie banner logic
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setShowCookieBanner(false);
    }

    // Scroll handling for navigation
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Get all sections for intersection detection
      const sections = document.querySelectorAll("section[id]");
      
      // Find the section that's currently visible
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    // Check for dark mode preference
    const isDark = localStorage.getItem("darkMode") === "true" || 
                   (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <title>El Tourmalet - Tienda, Taller y Club de Ciclismo en Estepona</title>
        <meta name="description" content="El Tourmalet es su tienda especializada en ciclismo en Estepona. Venta y alquiler de bicicletas de montaña, carretera y eléctricas. Taller de reparación profesional y club de ciclismo para todos los niveles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffc107" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 z-50 rounded-md"
        >
          Saltar al contenido principal
        </a>

        <header className={`sticky top-0 z-40 w-full backdrop-blur-md bg-background/95 shadow-md transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-3'}`}>
          {/* Top bar */}
          <div className="bg-primary/95 px-4 py-2 text-sm flex flex-col md:flex-row justify-between items-center">
            <div className="text-white space-x-2 flex flex-wrap justify-center items-center gap-2">
              <a
                href="tel:+34951273999"
                className="hover:text-secondary transition-colors inline-flex items-center gap-1"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+34 951 27 39 99</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="tel:+34620308845"
                className="hover:text-secondary transition-colors inline-flex items-center gap-1"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+34 620 30 88 45</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="mailto:info@eltourmalet.com"
                className="hover:text-secondary transition-colors inline-flex items-center gap-1"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>info@eltourmalet.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0 items-center">
              <a
                href="https://www.facebook.com/eltourmalet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="h-4 w-4 text-white hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/eltourmaletestepona/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-4 w-4 text-white hover:text-secondary transition-colors" />
              </a>
              <button 
                onClick={toggleDarkMode}
                className="ml-2 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 text-white" />
                ) : (
                  <Moon className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Main navigation */}
          <nav className="bg-background/95" aria-label="Navegación principal">
            <div className="container mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <a href="#inicio" className="relative z-10">
                  <Image
                    src="https://ext.same-assets.com/3643569872/1148576980.png"
                    alt="ElTourmalet Logo"
                    className="h-14 md:h-16 w-auto"
                    width={160}
                    height={64}
                    priority
                  />
                </a>

                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
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
                  <a href="#inicio" className={activeSection === "inicio" ? "active" : ""}>Inicio</a>
                  <a href="#quienes-somos" className={activeSection === "quienes-somos" ? "active" : ""}>Quienes somos</a>
                  <a href="#servicios" className={activeSection === "servicios" ? "active" : ""}>Servicios</a>
                  <a href="#bicicletas" className={activeSection === "bicicletas" ? "active" : ""}>Bicicletas</a>
                  <a href="#publicaciones" className={activeSection === "publicaciones" ? "active" : ""}>Publicaciones</a>
                  <a href="#club" className={activeSection === "club" ? "active" : ""}>Club</a>
                  <a href="#contacto" className={activeSection === "contacto" ? "active" : ""}>Contacto</a>
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
                  <a href="#inicio" className={activeSection === "inicio" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Inicio
                  </a>
                  <a href="#quienes-somos" className={activeSection === "quienes-somos" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Quienes somos
                  </a>
                  <a href="#servicios" className={activeSection === "servicios" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Servicios
                  </a>
                  <a href="#bicicletas" className={activeSection === "bicicletas" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Bicicletas
                  </a>
                  <a href="#publicaciones" className={activeSection === "publicaciones" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Publicaciones
                  </a>
                  <a href="#club" className={activeSection === "club" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Club
                  </a>
                  <a href="#contacto" className={activeSection === "contacto" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>
                    Contacto
                  </a>
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
        <footer className="bg-primary/10 dark:bg-[#111827] text-foreground/80 dark:text-gray-300 mt-12">
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
                
                <div className="mt-6">
                  <a href="#inicio" className="btn btn-primary">Volver arriba</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} El Tourmalet. Todos los derechos reservados.</p>
              <div className="mt-2 flex justify-center gap-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Política de Privacidad</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Términos y Condiciones</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Política de Cookies</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Banner */}
        {showCookieBanner && (
          <div className="cookie-banner">
            <p className="text-foreground/80 dark:text-gray-300 mb-4 md:mb-0">
              Utilizamos cookies para mejorar su experiencia en nuestra web. Al continuar navegando, acepta nuestra{" "}
              <a href="#" className="text-primary underline">
                política de cookies
              </a>
              .
            </p>
            <div className="flex gap-4">
              <button
                onClick={acceptCookies}
                className="btn btn-primary text-sm whitespace-nowrap"
              >
                Aceptar
              </button>
              <button className="btn border border-input bg-background hover:bg-muted text-foreground/80 dark:text-gray-300 text-sm whitespace-nowrap">
                Configurar
              </button>
            </div>
          </div>
        )}

        <Analytics />
      </body>
    </html>
  );
}
