
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.openai.com/static-rsc-4/Ibhx2ySyb4QX6lI4CljGKz-37ARWKfw_lJQ5aV0DYod1WiQeuVVCVGfjPxuA0LDz8T5_UfGX3-R-Du5I2P46MyO3NiuQHGsyxi1stF1E_d_-cVYSu4S8VtkR6poqnIh3OdSOXC1JrfP0rMW4NNmAZc54noCi5YiYx0cA_ccksLezMy8yxLRItS7LQO8wX2J1?purpose=fullsize')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center text-white">

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-nilora-gold"
        >
          Discover • Explore • Experience
        </motion.p>

        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mb-6 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl"
        >
          Discover the World,
          <span className="mt-2 block italic text-nilora-gold">
            Beyond Ordinary.
          </span>
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-9 max-w-2xl text-sm leading-7 text-gray-200 md:text-base"
        >
          Experience extraordinary journeys, breathtaking destinations,
          and unforgettable memories with NILORA Travels.
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/destinations"
            className="rounded-full bg-nilora-gold px-8 py-4 text-sm font-semibold text-nilora-navy transition duration-300 hover:scale-105 hover:bg-white"
          >
            Explore Destinations
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-nilora-navy"
          >
            Plan Your Journey
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
