import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Clock } from "lucide-react";

const Reservation = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Reserva Tu Mesa
            </h2>
            <p className="text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
            </p>
          </div>

          <form className="space-y-6 bg-card p-8 md:p-10 rounded-xl shadow-soft-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Nombre Completo
                </label>
                <Input placeholder="Tu nombre" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Teléfono
                </label>
                <Input type="tel" placeholder="+34 600 000 000" className="h-12" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <Input type="email" placeholder="tu@email.com" className="h-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Fecha
                </label>
                <Input type="date" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Hora
                </label>
                <Input type="time" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Users className="inline w-4 h-4 mr-1" />
                  Personas
                </label>
                <Input type="number" min="1" placeholder="2" className="h-12" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Comentarios adicionales
              </label>
              <Textarea
                placeholder="Alergias, preferencias especiales, etc."
                className="min-h-[120px]"
              />
            </div>

            <Button size="lg" className="w-full text-lg py-6">
              Enviar Reserva
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
