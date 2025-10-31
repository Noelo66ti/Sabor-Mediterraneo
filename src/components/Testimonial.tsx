import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="section-padding bg-warm-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-8">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <blockquote className="mb-8">
            <p className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed mb-6">
              "La mejor experiencia gastronómica que he tenido en años. Los sabores son
              auténticos, el servicio impecable y el ambiente simplemente mágico. Sin duda,
              nuestro lugar favorito para celebraciones especiales."
            </p>
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full mb-4" />
            <cite className="not-italic">
              <div className="font-semibold text-lg text-foreground">María González</div>
              <div className="text-muted-foreground">Cliente habitual desde 2020</div>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
