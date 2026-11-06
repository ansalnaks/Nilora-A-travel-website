
import { motion } from "motion/react";

const PackageHero = () => {
  return (
    <section
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold"
        >
          Curated Travel Experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          Discover Our
          <span className="mt-3 block text-nilora-gold">
            Travel Packages.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/85 md:text-base"
        >
          Carefully designed journeys, exceptional experiences and
          unforgettable memories. Find the perfect escape with NILORA.
        </motion.p>

      </div>
    </section>
  );
};

export default PackageHero;
