import { Suspense } from "react";
import { Bike, Wrench, Calendar, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[90vh] min-h-[500px]">
        <div className="relative h-full w-full">
          <Image
            src="https://ext.same-assets.com/1007369854/3541704439.jpeg"
            alt="El Tourmalet storefront"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
            <div className="relative h-40 w-80 mb-6">
              <Image
                src="https://ext.same-assets.com/3643569872/1148576980.png"
                alt="El Tourmalet Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 animate-slideUp">
              La Tienda del Ciclista en Estepona
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto animate-slideUp delay-200">
              Tu destino para todo lo relacionado con el ciclismo
            </p>
          </div>
        </div>
      </section>

      {/* Recent Publications / Featured Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ULTIMAS PUBLICACIONES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Suspense fallback={<div className="loading-skeleton h-[300px]"></div>}>
              {/* Featured Product */}
              <Link href="/ofertas" className="group">
                <Card className="bg-card border-none overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <Image
                        src="https://ext.same-assets.com/2845241581/3860072863.jpeg"
                        alt="Ofertas del Mes"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors">
                          OFERTAS DEL MES
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Event */}
              <Link href="/eventos" className="group">
                <Card className="bg-card border-none overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <Image
                        src="https://ext.same-assets.com/911591174/1362060808.jpeg"
                        alt="Campeonato de Andalucía duatlón en Marbella"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors">
                          Campeonato de Andalucía duatlón en Marbella
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Rally */}
              <Link href="/eventos" className="group">
                <Card className="bg-card border-none overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <Image
                        src="https://ext.same-assets.com/1415433101/2168851246.jpeg"
                        alt="VI Rally Puerto Real"
                        width={500}
                        height={500}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors">
                          VI Rally Puerto Real
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Team Event */}
              <Link href="/eventos" className="group">
                <Card className="bg-card border-none overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <Image
                        src="https://ext.same-assets.com/202954156/3828454068.jpeg"
                        alt="Roscón de Reyes"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors">
                          Roscón de Reyes
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Suspense>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="section-title">NUESTROS SERVICIOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="service-card group">
              <div className="service-icon">
                <Bike className="h-12 w-12 text-primary group-hover:text-yellow-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors mb-3">
                VENTA DE BICICLETAS
              </h3>
              <p className="text-gray-300 mb-4">
                Te ayudamos a encontrar la bicicleta que mejor se adapte a tu tipo de ciclismo.
              </p>
              <Link 
                href="/servicios" 
                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium group-hover:gap-2"
              >
                Más información 
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="service-card group">
              <div className="service-icon">
                <Wrench className="h-12 w-12 text-primary group-hover:text-yellow-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors mb-3">
                REPARACIÓN
              </h3>
              <p className="text-gray-300 mb-4">
                Hacemos mantenimiento, puesta a punto, cambio de retenes, cambio de cadenas y más.
              </p>
              <Link 
                href="/servicios" 
                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium group-hover:gap-2"
              >
                Más información 
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="service-card group">
              <div className="service-icon">
                <Calendar className="h-12 w-12 text-primary group-hover:text-yellow-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors mb-3">
                ALQUILER
              </h3>
              <p className="text-gray-300 mb-4">
                Te ofrecemos bicis de carretera y montaña con cuadros de carbono para disfrutar.
              </p>
              <Link 
                href="/servicios" 
                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium group-hover:gap-2"
              >
                Más información 
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="service-card group">
              <div className="service-icon">
                <ShoppingBag className="h-12 w-12 text-primary group-hover:text-yellow-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-yellow-300 transition-colors mb-3">
                ACCESORIOS
              </h3>
              <p className="text-gray-300 mb-4">
                Encuentra los mejores componentes que necesitas para tu bicicleta.
              </p>
              <Link 
                href="/accesorios" 
                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium group-hover:gap-2"
              >
                Más información 
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="section-title">CLUB DE CICLISMO Y TRIATLÓN</h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="https://ext.same-assets.com/3356920215/2732993833.jpeg"
                alt="Club de ciclismo El Tourmalet"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 text-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-6">Únete a nuestra familia</h3>
              <div className="space-y-4 text-lg">
                <p>
                  Si eres un amante de estas disciplinas, puedes unirte a nosotros y formar parte
                  de nuestra familia.
                </p>
                <p>
                  Se hacen salidas los fines de semana. Se organizan rutas por otros entornos
                  de la zona como Ronda, Grazalema, Granada...
                </p>
                <p>
                  Algunos de nuestros corredores compiten a nivel provincial y andaluz,
                  donde se han conseguidos varios podium.
                </p>
              </div>
              <Link
                href="/club"
                className="group inline-flex items-center gap-2 mt-8 bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary/90 transition-all duration-300 hover:translate-x-1"
              >
                Más sobre el club
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
