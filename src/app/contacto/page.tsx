import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Contacto() {
  return (
    <div className="bg-background">
      {/* Map */}
      <div className="h-[400px] w-full bg-gray-800 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.9071339890373!2d-5.162151684384697!3d36.42717698002716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cd03f19d39c09%3A0x8ae4bb2df3a37a04!2sEl%20Tourmalet%20Estepona!5e0!3m2!1ses!2ses!4v1679089127954!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">Formulario de contacto</h2>
            <p className="text-gray-300 mb-8">
              Si tiene cualquier consulta no dude en ponerse en contacto con nosotros a través del siguiente formulario.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Tu nombre (requerido)
                </label>
                <Input
                  id="name"
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Tu correo electrónico (requerido)
                </label>
                <Input
                  id="email"
                  type="email"
                  className="contact-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Asunto
                </label>
                <Input
                  id="subject"
                  className="contact-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Tu mensaje
                </label>
                <Textarea
                  id="message"
                  className="contact-input min-h-[150px]"
                />
              </div>

              <Button className="contact-button px-6 py-3 w-full">
                ENVIAR
              </Button>
            </form>
          </div>

          {/* Location Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">Dirección</h2>
            <p className="text-gray-300 mb-8">
              Nuestra tienda y se encuentra situada en pleno corazón de Estepona y en apenas 5 minutos del centro histórico.
            </p>

            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">El Tourmalet</h3>
              <p className="text-gray-300">Calle Parque Central, 9</p>
              <p className="text-gray-300 mb-4">Estepona, 29680</p>

              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">Teléfono:</span>
                <a href="tel:+34951273999" className="text-primary hover:text-primary/80 transition-colors">
                  +34 951 27 39 99
                </a>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">Móvil:</span>
                <a href="tel:+34620308845" className="text-primary hover:text-primary/80 transition-colors">
                  +34 620 30 88 45
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">Email:</span>
                <a href="mailto:info@eltourmalet.com" className="text-primary hover:text-primary/80 transition-colors">
                  info@eltourmalet.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
