
import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-nilora-gold"
        >
          We're Here for You
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Let's Plan Your
          <span className="block text-nilora-gold">
            Next Adventure.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl leading-8 text-gray-200"
        >
          Have a destination in mind or need help choosing one?
          Tell us about your travel dreams. We'd love to help
          make them happen.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
