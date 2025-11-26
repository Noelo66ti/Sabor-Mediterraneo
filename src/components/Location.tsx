import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="section-padding bg-warm-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Encuéntranos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos ubicados en el corazón de la ciudad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-soft-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4715344!2d-77.0301654!3d-12.119999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8262c86e4e3%3A0x3d0a2b42e9c86478!2sAv.%20Jos%C3%A9%20Larco%2C%20Miraflores%2C%20Lima!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del restaurante"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl shadow-soft-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                    Dirección
                  </h3>
                  <p className="text-muted-foreground">
                    Av. Larco 1301, Miraflores<br />
                    15074 Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                    Teléfono
                  </h3>
                  <p className="text-muted-foreground">
                    +51 1 445 8920<br />
                    <span className="text-sm">Lunes - Domingo: 12:00 - 23:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    contacto@sabormediterraneo.pe<br />
                    reservas@sabormediterraneo.pe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
