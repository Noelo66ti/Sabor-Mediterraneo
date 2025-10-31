const Welcome = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Bienvenidos a Nuestra Casa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            En Sabor Mediterráneo, cada plato cuenta una historia. Fusionamos la tradición 
            culinaria mediterránea con técnicas contemporáneas para crear experiencias 
            gastronómicas inolvidables. Nuestro compromiso con la calidad y la frescura 
            se refleja en cada ingrediente cuidadosamente seleccionado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
