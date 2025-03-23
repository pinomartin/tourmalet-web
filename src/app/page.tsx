"use client";

import { useEffect } from "react";
import { Bike, Wrench, Calendar, ShoppingBag, Mail, Phone, ArrowRight, ChevronRight, Users, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { jsonLd } from "./metadata";

// SEO
// export const metadata = {
//   title: "El Tourmalet - Tienda, Taller y Club de Ciclismo en Estepona",
// };

// Data for the bike categories
const bikeCategories = [
  {
    id: "carretera",
    title: "Bicicletas de Carretera",
    image: "https://ext.same-assets.com/2845241581/3860072863.jpeg",
    description:
      "Modelos de alta gama para ciclismo en carretera. Marcas como BH, Trek y más.",
  },
  {
    id: "montana",
    title: "Bicicletas de Montaña",
    image: "https://ext.same-assets.com/665117692/4130866881.jpeg",
    description:
      "Todo tipo de MTB para cualquier terreno y dificultad. Rígidas y doble suspensión.",
  },
  {
    id: "electricas",
    title: "Bicicletas Eléctricas",
    image: "https://ext.same-assets.com/1066355786/2640285151.jpeg",
    description:
      "E-bikes de última generación para aventuras sin límites. Urbanas y de montaña.",
  },
  {
    id: "ninos",
    title: "Bicicletas para Niños",
    image: "https://ext.same-assets.com/2604133613/4144802179.jpeg",
    description:
      "Bicicletas para los más pequeños. Seguras, resistentes y divertidas.",
  },
];

// Services data 
const serviceItems = [
  {
    icon: <Bike className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />,
    title: "VENTA DE BICICLETAS",
    description: "Te ayudamos a encontrar la bicicleta que mejor se adapte a tu tipo de ciclismo.",
    longDescription: "Si ya eres un experto, puedes tener la bicicleta de tus sueños de las mejores marcas actualmente del mercado. Ven y compruébalo."
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />,
    title: "REPARACIÓN",
    description: "Hacemos mantenimiento, puesta a punto, cambio de retenes, cadenas y más.",
    longDescription: "También nos hemos especializado en el arreglo de cuadros de carbono que hayan sufrido una rotura o cualquier desperfecto. Acércate y te informaremos sin compromiso."
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />,
    title: "ALQUILER",
    description: "Te ofrecemos bicis de carretera y montaña con cuadros de carbono para disfrutar.",
    longDescription: "Disfruta de las rutas de nuestro entorno y serranía, con puertos emblemáticos como «Peñas Blancas». También puedes acompañarnos sin compromisos en nuestras salidas de fines de semana. Pregúntanos y te asesoraremos."
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />,
    title: "ACCESORIOS",
    description: "Encuentra los mejores componentes que necesitas para tu bicicleta.",
    longDescription: "Cascos con la última tecnología, luces diurnas para ser vistos a distancia, guantes, gafas y mucho más. Tenemos todo lo que necesitas para el uso diario del deporte que te gusta."
  },
];

export default function Home() {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section id="inicio" className="relative h-[90vh] min-h-[500px]">
        <div className="relative h-full w-full">
          <Image
            src="https://ext.same-assets.com/1007369854/3541704439.jpeg"
            alt="El Tourmalet storefront"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center text-center p-6">
            <div className="relative h-40 w-80 mb-6 animate-pulse-slow">
              <Image
                src="https://ext.same-assets.com/3643569872/1148576980.png"
                alt="El Tourmalet Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              La Tienda del Ciclista en <span className="text-primary">Estepona</span>
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto animate-slide-up delay-200">
              Tu destino para todo lo relacionado con el ciclismo
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
              <a href="#servicios" className="btn btn-primary px-8 py-3 flex items-center gap-2">
                Nuestros servicios <ChevronRight className="h-5 w-5" />
              </a>
              <a href="#contacto" className="btn border-2 border-white hover:border-primary text-white hover:text-primary transition-colors">
                Contactar con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="quienes-somos" className="section bg-white dark:bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="section-title">QUIENES SOMOS</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg">
                Somos una empresa familiar que comenzamos nuestra andadura en el año 2011.
              </p>
              <p className="text-lg mt-4">
                Nos dedicamos a la venta, reparación y alquiler de bicicletas. También hacemos reparación
                de cuadros de carbono.
              </p>
              <p className="text-lg mt-4">
                Tenemos nuestro propio Club de Ciclismo y Triatlón donde algunos compiten a nivel provincial
                y otros salimos a pasar un buen rato con los amigos y prepararnos para alguna cicloturista.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center group hover-card rounded-xl p-6">
                <div className="w-48 h-48 rounded-full bg-primary/10 mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-6xl text-primary group-hover:text-secondary transition-colors">L</span>
                </div>
                <h3 className="text-xl text-primary font-bold group-hover:text-secondary transition-colors">Lucas Santos Infantes</h3>
                <p className="text-foreground/70">Ventas y Administración</p>
              </div>

              <div className="flex flex-col items-center group hover-card rounded-xl p-6">
                <div className="w-48 h-48 rounded-full bg-primary/10 mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-6xl text-primary group-hover:text-secondary transition-colors">F</span>
                </div>
                <h3 className="text-xl text-primary font-bold group-hover:text-secondary transition-colors">Francisco Javier Santos Infantes</h3>
                <p className="text-foreground/70">Mecánica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications / Featured Content */}
      <section id="publicaciones" className="section bg-muted/50 dark:bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ÚLTIMAS PUBLICACIONES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Product */}
            <div className="group hover-card">
              <Card className="bg-card border-none overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://ext.same-assets.com/2845241581/3860072863.jpeg"
                      alt="Ofertas del Mes"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        OFERTAS DEL MES
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event */}
            <div className="group hover-card">
              <Card className="bg-card border-none overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://ext.same-assets.com/911591174/1362060808.jpeg"
                      alt="Campeonato de Andalucía duatlón en Marbella"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        Campeonato de Andalucía duatlón en Marbella
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rally */}
            <div className="group hover-card">
              <Card className="bg-card border-none overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://ext.same-assets.com/1415433101/2168851246.jpeg"
                      alt="VI Rally Puerto Real"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        VI Rally Puerto Real
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Event */}
            <div className="group hover-card">
              <Card className="bg-card border-none overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://ext.same-assets.com/202954156/3828454068.jpeg"
                      alt="Roscón de Reyes"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        Roscón de Reyes
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="servicios" className="section bg-primary/5 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="section-title">NUESTROS SERVICIOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/80 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <a 
                  href="#servicios-detalle" 
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium group-hover:gap-2"
                >
                  Más información 
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="servicios-detalle" className="section bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <Bike className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-primary">VENTA DE BICICLETAS</h2>
              </div>
              <div className="text-foreground/80 dark:text-gray-300 space-y-4">
                <p>
                  Te ayudamos a encontrar la bicicleta que mejor se adapte a tu
                  tipo de ciclismo.
                </p>
                <p>
                  Si ya eres un experto, puedes tener la bicicleta de tus sueños de
                  las mejores marcas actualmente del mercado.
                </p>
                <p>
                  Ven y compruébalo.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <Wrench className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-primary">REPARACIÓN</h2>
              </div>
              <div className="text-foreground/80 dark:text-gray-300 space-y-4">
                <p>
                  Hacemos mantenimiento, puesta a punto, cambio de retenes, cambio
                  de cadenas, etc.
                </p>
                <p>
                  También nos hemos especializado en el arreglo de cuadros de carbono
                  que hayan sufrido una rotura o cualquier desperfecto.
                </p>
                <p>
                  Acércate y te informaremos sin compromiso.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <Calendar className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-primary">ALQUILER</h2>
              </div>
              <div className="text-foreground/80 dark:text-gray-300 space-y-4">
                <p>
                  Te ofrecemos bicis de carretera y montaña con cuadros de carbono
                  para que disfrutes de las rutas de nuestro entorno y serranía, con
                  puertos emblemáticos como «Peñas Blancas».
                </p>
                <p>
                  También puedes acompañarnos sin compromisos en nuestras
                  salidas de fines de semana.
                </p>
                <p>
                  Pregúntanos y te asesoraremos.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <ShoppingBag className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-primary">VENTA DE ACCESORIOS</h2>
              </div>
              <div className="text-foreground/80 dark:text-gray-300 space-y-4">
                <p>
                  Encuentra los mejores componentes que necesitas para el
                  uso diario del deporte que te gusta.
                </p>
                <p>
                  Cascos con la última tecnología, luces diurnas para ser vistos a
                  distancia, guantes, gafas y mucho más.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Users className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-primary">CLUB DE CICLISMO Y TRIATLÓN</h2>
              </div>
              <div className="text-foreground/80 dark:text-gray-300 space-y-4">
                <p>
                  Si eres un amante de estas disciplinas, puedes unirte a
                  nosotros y formar parte de nuestra familia.
                </p>
                <p>
                  Se hacen salidas los fines de semana. Se organizan rutas por
                  otros entornos de la zona como Ronda, Grazalema, Granada...
                </p>
                <p>
                  Algunos de nuestros corredores compiten a nivel provincial y
                  andaluz, donde se han conseguidos varios podium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bicicletas Section */}
      <section id="bicicletas" className="section bg-muted/50 dark:bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title">BICICLETAS</h2>

          <div className="max-w-6xl mx-auto">
            <p className="text-foreground/80 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg">
              En El Tourmalet disponemos de una amplia variedad de bicicletas para
              todos los niveles y disciplinas. Trabajamos con las mejores marcas
              del mercado para ofrecerte la máxima calidad y rendimiento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bikeCategories.map((category) => (
                <div key={category.id} className="group hover-card">
                  <Card className="bg-card border-none overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={500}
                          height={250}
                          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-foreground/80 dark:text-gray-300">{category.description}</p>
                        <div className="mt-4 flex">
                          <span className="text-primary hover:text-secondary transition-colors inline-flex items-center group-hover:gap-2">
                            Ver modelos
                            <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-card p-8 rounded-xl shadow-subtle">
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                ¿Necesitas asesoramiento?
              </h2>
              <p className="text-foreground/80 dark:text-gray-300 text-center mb-6">
                Si no sabes qué bicicleta se adapta mejor a tus necesidades,
                visítanos en la tienda y te ayudaremos a encontrar la bici
                perfecta para ti.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contacto"
                  className="btn btn-secondary hover:bg-secondary/90 transition-colors"
                >
                  Contacta con nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section id="club" className="section bg-primary/5 dark:bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="section-title">CLUB DE CICLISMO Y TRIATLÓN</h2>

          <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="https://ext.same-assets.com/3356920215/2732993833.jpeg"
                alt="Club de ciclismo El Tourmalet"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 text-foreground/80 dark:text-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-6">Únete a nuestra familia</h3>
              <div className="space-y-4 text-lg">
                <p>
                  Si eres un amante de estas disciplinas, puedes unirte a nosotros y formar parte
                  de nuestra familia.
                </p>
                <p>
                  Se hacen salidas los fines de semana. Se organizan rutas por otros entornos
                  como Ronda, Grazalema, Granada... 
                </p>
                <p>
                  Algunos de nuestros corredores compiten a nivel provincial y andaluz, 
                  donde se han conseguido varios podium.
                </p>
                <div className="pt-4">
                  <a href="#contacto" className="btn btn-primary inline-flex items-center gap-2">
                    Únete al club <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">CONTACTO</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.492494411243!2d-5.150384684330235!3d36.424975179866786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cef8e4e1667c1%3A0xa694b18062d38a20!2sEl%20Tourmalet!5e0!3m2!1ses!2ses!4v1626169276252!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de El Tourmalet"
              ></iframe>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Envíanos un mensaje</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background dark:bg-gray-700" 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background dark:bg-gray-700" 
                    placeholder="Tu email" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-1">
                    Asunto
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background dark:bg-gray-700" 
                    placeholder="Asunto del mensaje" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background dark:bg-gray-700" 
                    placeholder="Tu mensaje" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Enviar mensaje
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-medium mb-3 text-foreground dark:text-white">Información de contacto</h4>
                <div className="space-y-2 text-foreground/80 dark:text-gray-300">
                  <p><strong>Dirección:</strong> Calle Parque Central 9, Local 1, 29680 Estepona</p>
                  <p><strong>Teléfono:</strong> +34 951 27 39 99 / +34 620 30 88 45</p>
                  <p><strong>Email:</strong> info@eltourmalet.com</p>
                  <p>
                    <strong>Horario:</strong><br />
                    Lunes a Viernes: 10:00 - 14:00 | 17:00 - 20:00<br />
                    Sábados: 10:00 - 14:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
