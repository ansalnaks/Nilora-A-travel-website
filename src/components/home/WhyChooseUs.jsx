
import { motion } from "motion/react";
import {
  FaMapMarkedAlt,
  FaHotel,
  FaHeadset,
  FaSuitcaseRolling,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    title: "Personalized Journeys",
    description:
      "Every journey is designed around your interests, preferences and travel dreams.",
  },
  {
    id: 2,
    icon: <FaHotel />,
    title: "Handpicked Stays",
    description:
      "Enjoy carefully selected accommodations for comfort, quality and memorable experiences.",
  },
  {
    id: 3,
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Our team is ready to assist you throughout your travel planning experience.",
  },
  {
    id: 4,
    icon: <FaSuitcaseRolling />,
    title: "Hassle-Free Travel",
    description:
      "From planning to exploring, we make your travel experience simple and enjoyable.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            The NILORA Experience
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            Why Travel With Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            We believe every journey should be special.
            Discover the difference with thoughtful planning,
            personalized experiences and dedicated support.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-gray-100 bg-nilora-ivory p-8 text-center transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-nilora-navy text-2xl text-nilora-gold">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-display text-xl font-semibold text-nilora-navy">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
