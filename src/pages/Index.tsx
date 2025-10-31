import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import FeaturedDishes from "@/components/FeaturedDishes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hours from "@/components/Hours";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <FeaturedDishes />
        <WhyChooseUs />
        <Hours />
        <Gallery />
        <Testimonial />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
