
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const DestinationGrid = ({ destinations }) => {
  return (
    <section className="bg-nilora-ivory px-6 pb-20">
      <div className="mx-auto max-w-7xl">

        {destinations.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Destination Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-widest text-white">
                    {destination.region}
                  </span>
                </div>

                {/* Destination Details */}
                <div className="p-6">

                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                    <FaMapMarkerAlt className="text-nilora-gold" />
                    {destination.country}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-nilora-navy">
                    {destination.name}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-7 text-gray-500">
                    {destination.description}
                  </p>

                  <div className="mt-5 border-t border-gray-100 pt-5">
                    <Link
                      to={`/destinations/${destination.id}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-nilora-navy transition hover:text-nilora-gold"
                    >
                      Explore Destination
                      <FaArrowRight className="transition group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-display text-2xl text-nilora-navy">
              No Destinations Found
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Try searching with a different destination or region.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default DestinationGrid;
