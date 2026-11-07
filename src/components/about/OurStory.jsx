
import { motion } from "motion/react";

const OurStory = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful mountain lake surrounded by nature"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
          />

          <div className="absolute -bottom-6 -right-4 rounded-xl bg-nilora-gold p-6 shadow-lg md:-right-6">
            <p className="font-display text-3xl font-bold text-nilora-navy">
              NILORA
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-nilora-navy">
              Explore Beyond Ordinary
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Our Story
          </p>

          <h2 className="font-display text-3xl font-semibold leading-tight text-nilora-navy md:text-5xl">
            Every Great Journey
            <span className="block">Begins With a Dream.</span>
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            NILORA was created around a simple belief: every traveller
            deserves a journey that feels special. We bring together
            beautiful destinations, thoughtful planning, and meaningful
            experiences to help turn travel dreams into reality.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            From peaceful escapes to exciting adventures, our goal is
            to make discovering the world feel personal, comfortable,
            and memorable.
          </p>

          <div className="mt-8 h-1 w-20 rounded-full bg-nilora-gold" />
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
