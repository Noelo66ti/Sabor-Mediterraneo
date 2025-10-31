import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes - Jueves", hours: "12:00 - 23:00" },
  { day: "Viernes - Sábado", hours: "12:00 - 00:00" },
  { day: "Domingo", hours: "12:00 - 22:00" },
];

const Hours = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Horarios de Atención
          </h2>
          <div className="space-y-6">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-4 border-b border-white/20 last:border-0"
              >
                <span className="text-xl font-medium">{item.day}</span>
                <span className="text-xl font-display font-semibold">{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg opacity-90">
            Abierto todos los días para comidas y cenas. Reservas recomendadas para fines de semana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hours;
