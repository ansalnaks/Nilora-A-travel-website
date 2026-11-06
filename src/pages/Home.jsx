
import Footer from "../components/common/Footer";
import AboutPreview from "../components/home/AboutPreview";
import CallToAction from "../components/home/CalltoAction";
import DestinationSection from "../components/home/DestinationSection";
import FeaturedPackages from "../components/home/FeaturedPackages";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <DestinationSection/>
      <WhyChooseUs/>
      <FeaturedPackages/>
      <AboutPreview/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </main>
  );
};

export default Home;
