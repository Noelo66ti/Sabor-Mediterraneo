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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8287267716285!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
                    Calle del Mediterráneo, 42<br />
                    28001 Madrid, España
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
                    +34 912 345 678<br />
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
                    info@sabormediterraneo.com<br />
                    reservas@sabormediterraneo.com
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
