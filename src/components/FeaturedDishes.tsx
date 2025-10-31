import { Card, CardContent } from "@/components/ui/card";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const dishes = [
  {
    name: "Paella Mediterránea",
    description: "Arroz con azafrán, mariscos frescos y un toque de limón. Una experiencia única del mar.",
    price: "28€",
    image: dish1,
  },
  {
    name: "Cordero Asado",
    description: "Chuletas de cordero con romero, acompañadas de vegetales asados y salsa de hierbas.",
    price: "32€",
    image: dish2,
  },
  {
    name: "Tiramisú Casero",
    description: "Postre italiano tradicional con café expreso y mascarpone, decorado con frutas frescas.",
    price: "9€",
    image: dish3,
  },
];

const FeaturedDishes = () => {
  return (
    <section id="menu" className="section-padding bg-warm-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Nuestros Platos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de nuestras creaciones más populares, preparadas con pasión y dedicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card
              key={dish.name}
              className="overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border-none bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
