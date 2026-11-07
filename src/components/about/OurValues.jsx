
import { motion } from "motion/react";
import {
  FaHeart,
  FaShieldAlt,
  FaCompass,
  FaHandsHelping,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: <FaHeart />,
    title: "Personalization",
    description:
      "Every traveller is unique. We believe every journey should reflect individual interests, dreams, and preferences.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Trust & Transparency",
    description:
      "We value honest communication, clear information, and reliable travel planning at every step.",
  },
  {
    id: 3,
    icon: <FaCompass />,
    title: "Exploration",
    description:
      "We inspire travellers to discover new destinations, experience different cultures, and go beyond the ordinary.",
  },
  {
    id: 4,
    icon: <FaHandsHelping />,
    title: "Care & Support",
    description:
      "From planning to the journey itself, we aim to make every traveller feel supported and comfortable.",
  },
];

const OurValues = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            What We Believe In
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            The Values Behind Every Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Our values shape how we plan, serve, and create
            memorable travel experiences.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-gray-100 bg-nilora-ivory p-8 text-center shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-nilora-navy text-2xl text-nilora-gold">
                {value.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-nilora-navy">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;
