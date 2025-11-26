import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in">
          Sabor Mediterráneo
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto font-light animate-fade-in opacity-90">
          Descubre la auténtica esencia de la cocina mediterránea con ingredientes frescos
          y recetas tradicionales
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 hover:scale-105 transition-transform animate-fade-in bg-primary hover:bg-primary/90"
          asChild
        >
          <a href="#contact">Reservar Mesa <ArrowRight className="ml-2" size={20} /></a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
