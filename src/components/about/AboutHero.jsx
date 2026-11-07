
import { motion } from "motion/react";

const AboutHero = () => {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-nilora-gold"
        >
          Get to Know Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          We Make Every
          <span className="block text-nilora-gold">
            Journey Meaningful.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg"
        >
          At NILORA, we believe travel is more than visiting places.
          It is about discovering experiences, creating memories,
          and exploring beyond ordinary.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
