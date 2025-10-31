import { Leaf, ChefHat, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Seleccionamos productos locales y de temporada para garantizar la máxima calidad.",
  },
  {
    icon: ChefHat,
    title: "Chef Experimentado",
    description: "Nuestro chef cuenta con más de 20 años de experiencia en cocina mediterránea.",
  },
  {
    icon: Heart,
    title: "Ambiente Acogedor",
    description: "Un espacio diseñado para que disfrutes de momentos especiales con tus seres queridos.",
  },
  {
    icon: Award,
    title: "Excelente Servicio",
    description: "Nuestro equipo está dedicado a brindarte una experiencia gastronómica excepcional.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos distinguimos por nuestro compromiso con la excelencia en cada aspecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-8 rounded-xl hover:bg-warm-cream transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
