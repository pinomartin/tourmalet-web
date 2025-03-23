export default function QuienesSomos() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Team section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-muted mb-4 flex items-center justify-center">
              <span className="text-6xl text-primary">L</span>
            </div>
            <h3 className="text-xl text-secondary font-bold">Lucas Santos Infantes</h3>
            <p className="text-primary">Ventas y Administración</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-muted mb-4 flex items-center justify-center">
              <span className="text-6xl text-primary">F</span>
            </div>
            <h3 className="text-xl text-secondary font-bold">Francisco Javier Santos Infantes</h3>
            <p className="text-primary">Mecánica</p>
          </div>
        </div>

        {/* About Us Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title">QUIENES SOMOS</h1>

          <div className="text-gray-200 space-y-6 text-lg">
            <p>
              Somos una empresa familiar que comenzamos nuestra andadura en el año 2011.
            </p>

            <p>
              Nos dedicamos a la venta, reparación y alquiler de bicicletas. También hacemos reparación
              de cuadros de carbono.
            </p>

            <p>
              Tenemos nuestro propio Club de Ciclismo y Triatlón donde algunos compiten a nivel provincial
              y otros salimos a pasar un buen rato con los amigos y prepararnos para alguna cicloturista.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
