import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const accessoryCategories = [
  {
    id: "cascos",
    title: "Cascos",
    image: "https://ext.same-assets.com/1983463824/2537256593.jpeg",
    description:
      "Cascos con la última tecnología para garantizar tu seguridad.",
  },
  {
    id: "zapatillas",
    title: "Zapatillas",
    image: "https://ext.same-assets.com/2558398776/2516121765.jpeg",
    description: "Zapatillas específicas para ciclismo de carretera y montaña.",
  },
  {
    id: "gafas",
    title: "Gafas",
    image: "https://ext.same-assets.com/2678595244/2959271876.jpeg",
    description: "Gafas deportivas con protección UV y diseños aerodinámicos.",
  },
  {
    id: "ropa",
    title: "Ropa",
    image: "https://ext.same-assets.com/3615190801/2048726219.jpeg",
    description: "Equipación de alta calidad para todas las estaciones.",
  },
  {
    id: "varios",
    title: "Varios",
    image: "https://ext.same-assets.com/2701437068/3213779989.jpeg",
    description: "Componentes, herramientas y accesorios para tu bicicleta.",
  },
];

export default function Accesorios() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">ACCESORIOS</h1>

        <div className="mt-12 max-w-6xl mx-auto">
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Encuentra los mejores componentes y accesorios para el uso diario
            del deporte que te gusta. Disponemos de una amplia gama de productos
            de las mejores marcas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessoryCategories.map((category) => (
              <Link href={`/accesorios/${category.id}`} key={category.id}>
                <Card className="bg-card border-none overflow-hidden h-full transition-transform hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={500}
                        height={200}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                        <h3 className="text-xl font-bold text-primary">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300">{category.description}</p>
                      <div className="mt-4 flex">
                        <span className="text-secondary hover:text-primary transition-colors inline-flex items-center">
                          Ver productos
                          <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              Lo que necesitas para disfrutar del ciclismo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-gray-300 space-y-4">
                <p>
                  En nuestra tienda contamos con una amplia selección de
                  accesorios y componentes para todos los ciclistas, desde
                  principiantes hasta profesionales.
                </p>
                <p>
                  Cascos con la última tecnología, luces diurnas para ser vistos
                  a distancia, guantes, gafas deportivas, ropa técnica y todo lo
                  necesario para disfrutar de tu deporte favorito con la máxima
                  seguridad y comodidad.
                </p>
                <p>
                  También disponemos de una amplia variedad de herramientas y
                  recambios para el mantenimiento de tu bicicleta.
                </p>
              </div>
              <div>
                <Image
                  src="https://ext.same-assets.com/3490711273/869295322.jpeg"
                  alt="Accesorios para ciclismo"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
