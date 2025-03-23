import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

export default function Bicicletas() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">BICICLETAS</h1>

        <div className="mt-12 max-w-6xl mx-auto">
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            En El Tourmalet disponemos de una amplia variedad de bicicletas para
            todos los niveles y disciplinas. Trabajamos con las mejores marcas
            del mercado para ofrecerte la máxima calidad y rendimiento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bikeCategories.map((category) => (
              <Link href={`/bicicletas/${category.id}`} key={category.id}>
                <Card className="bg-card border-none overflow-hidden h-full transition-transform hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={500}
                        height={250}
                        className="w-full h-[250px] object-cover"
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
                          Ver modelos
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

          <div className="mt-16 bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              ¿Necesitas asesoramiento?
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Si no sabes qué bicicleta se adapta mejor a tus necesidades,
              visítanos en la tienda y te ayudaremos a encontrar la bici
              perfecta para ti.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contacto"
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
