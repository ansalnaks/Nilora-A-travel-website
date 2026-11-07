
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center px-6 py-24 md:py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/75" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-nilora-gold">
          Your Journey Begins Here
        </p>

        <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
          The World Is Waiting.
          <span className="mt-2 block text-nilora-gold">
            Are You Ready?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-200">
          Let NILORA help you turn your travel dreams into
          unforgettable experiences. Your next adventure
          is just one step away.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-nilora-gold px-8 py-4 font-semibold text-nilora-navy transition duration-300 hover:bg-white"
        >
          Plan Your Journey
          <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
