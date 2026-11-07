
import { motion } from "motion/react";
import { FaCompass, FaGlobeAmericas } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-nilora-ivory px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            What Drives Us
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            Our Purpose & Direction
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Every journey we create is guided by a clear purpose
            and a vision for meaningful travel experiences.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-nilora-navy p-9 text-white shadow-lg md:p-12"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-nilora-gold text-2xl text-nilora-navy">
              <FaCompass />
            </div>

            <h3 className="font-display text-3xl font-semibold text-nilora-gold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-200">
              To make travel planning simple, enjoyable, and personal
              by creating thoughtfully designed journeys that connect
              people with destinations, cultures, and unforgettable
              experiences.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-nilora-gold bg-white p-9 shadow-lg md:p-12"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-nilora-navy text-2xl text-nilora-gold">
              <FaGlobeAmericas />
            </div>

            <h3 className="font-display text-3xl font-semibold text-nilora-navy">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To become a trusted travel brand known for inspiring
              exploration, delivering meaningful experiences, and
              helping travellers discover the extraordinary in
              every journey.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
