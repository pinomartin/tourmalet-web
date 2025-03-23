import Image from "next/image";

export default function Club() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="section-title">CLUB DE CICLISMO Y TRIATLÓN</h1>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/911591174/1362060808.jpeg"
                alt="Club de ciclismo El Tourmalet"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Nuestro Club
              </h2>
              <p className="mb-4">
                Si eres un amante del ciclismo o el triatlón, puedes unirte a
                nosotros y formar parte de nuestra familia.
              </p>
              <p>
                Se hacen salidas los fines de semana. Se organizan rutas por
                otros entornos de la zona como Ronda, Grazalema, Granada...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-200 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Competición
              </h2>
              <p className="mb-4">
                Algunos de nuestros corredores compiten a nivel provincial y
                andaluz, donde se han conseguidos varios podium.
              </p>
              <p>
                Ofrecemos entrenamiento, asesoramiento y un ambiente de equipo
                para quienes quieran avanzar en su nivel competitivo.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://ext.same-assets.com/1415433101/2168851246.jpeg"
                alt="Eventos de ciclismo"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              ¡Únete a nuestro Club!
            </h2>
            <p className="text-gray-200 text-center mb-6">
              Si estás interesado en formar parte de nuestro club, pásate por
              nuestra tienda y te informaremos de todo lo necesario para empezar
              a disfrutar con nosotros.
            </p>
            <div className="flex justify-center">
              <a
                href="/contacto"
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
              >
                Contacta con nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
