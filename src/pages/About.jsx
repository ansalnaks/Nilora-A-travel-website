
import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";

const About = () => {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision/>
      <OurValues/>
      <AboutCTA/>
    </main>
  );
};

export default About;
