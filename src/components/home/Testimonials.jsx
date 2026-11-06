
import { motion } from "motion/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-nilora-navy px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Stories From Our Travelers
          </p>

          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
            Memories That Speak
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300">
            Every journey creates a story. Discover what our
            travelers have to say about their experiences.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="mb-6 text-3xl text-nilora-gold" />

              {/* Star Rating */}
              <div className="mb-5 flex gap-1 text-nilora-gold">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 text-sm leading-7 text-gray-600">
                "{item.review}"
              </p>

              {/* Customer Details */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nilora-ivory font-display text-lg font-bold text-nilora-navy">
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-nilora-navy">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.location}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
