import { Bike, Wrench, ShoppingBag, Users } from "lucide-react";

export default function Servicios() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">NUESTROS SERVICIOS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mt-12">
          {/* Service 1 */}
          <div className="service-card">
            <div className="flex items-center mb-6">
              <Bike className="h-10 w-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-primary">VENTA DE BICICLETAS</h2>
            </div>
            <div className="text-gray-300 space-y-4">
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
            <div className="text-gray-300 space-y-4">
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
              <Bike className="h-10 w-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-primary">ALQUILER</h2>
            </div>
            <div className="text-gray-300 space-y-4">
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
            <div className="text-gray-300 space-y-4">
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
            <div className="text-gray-300 space-y-4">
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
    </div>
  );
}
