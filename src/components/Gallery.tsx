import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Interior del restaurante" },
  { src: gallery2, alt: "Chef preparando platos" },
  { src: gallery3, alt: "Ingredientes frescos" },
  { src: gallery4, alt: "Copas de vino" },
  { src: gallery5, alt: "Terraza exterior" },
  { src: gallery6, alt: "Mesa de postres" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un vistazo a nuestro restaurante, platos y momentos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-xl shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
