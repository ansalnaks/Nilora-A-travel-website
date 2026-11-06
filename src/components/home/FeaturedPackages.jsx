
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import packages from "../../data/packages";

const FeaturedPackages = () => {
  return (
    <section className="bg-nilora-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Curated For You
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            Featured Travel Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Discover handpicked journeys designed to turn
            your travel dreams into unforgettable memories.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {packages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl"
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-nilora-gold px-4 py-2 text-xs font-semibold text-nilora-navy">
                  {item.tag}
                </span>
              </div>

              {/* Package Details */}
              <div className="p-6">

                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-nilora-gold" />
                  {item.location}
                </div>

                <h3 className="mb-4 font-display text-2xl font-semibold text-nilora-navy">
                  {item.title}
                </h3>

                <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
                  <FaClock className="text-nilora-gold" />
                  {item.duration}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-5">

                  <div>
                    <p className="text-xs text-gray-500">
                      Starting from
                    </p>

                    <p className="text-xl font-bold text-nilora-navy">
                      {item.price}
                    </p>
                  </div>

                  <Link
                    to={`/packages/${item.id}`}
                    className="rounded-full bg-nilora-navy px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-nilora-gold hover:text-nilora-navy"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* View All Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <Link
            to="/packages"
            className="inline-block rounded-full border border-nilora-navy px-8 py-3 text-sm font-semibold text-nilora-navy transition hover:bg-nilora-navy hover:text-white"
          >
            View All Packages
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedPackages;
