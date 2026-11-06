
import { motion } from "motion/react";

const DestinationHero = () => {
  return (
    <section
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.openai.com/static-rsc-4/kGt25Y_aGSKRKnZzjgT5ZoLapn8d65EHQjewc03UjJsLGGkL0A43Fe6_rFxd5YL6k0jQtGFj9emFHKKGYJ-CiM-FyB8fCvAZKyfR77Ofn6pl2g8fI89T0NVOesspJHLxmbHFtnJkyIFU-b96dY5yDoh6O4wTVVrst8jBmFnuDBgKqoCJRbfFJLAnVuovKw13?purpose=fullsize')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold"
        >
          Discover Beautiful Places
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-semibold text-white md:text-6xl"
        >
          Explore the World,
          <span className="mt-3 block text-nilora-gold">
            Your Way.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/85 md:text-base"
        >
          From tropical escapes to breathtaking mountains,
          discover destinations that inspire your next adventure.
        </motion.p>

      </div>
    </section>
  );
};

export default DestinationHero;
