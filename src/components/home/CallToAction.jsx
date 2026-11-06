
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-nilora-navy py-24 md:py-32">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-nilora-navy/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
          Your Journey Begins Here
        </p>

        <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
          Your Next Adventure
          <span className="mt-2 block text-nilora-gold">
            Starts Here.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/80 md:text-base">
          From breathtaking destinations to unforgettable experiences,
          let NILORA turn your travel dreams into beautiful memories.
        </p>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-nilora-gold px-8 py-4 text-sm font-semibold text-nilora-navy transition duration-300 hover:bg-white"
          >
            Plan Your Trip
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
