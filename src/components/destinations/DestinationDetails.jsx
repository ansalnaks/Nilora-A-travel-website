
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import destinations from "../../data/destinations";

const DestinationDetails = () => {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  // If destination does not exist
  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <main className="bg-nilora-ivory">

      {/* Hero Section */}
      <section className="relative flex min-h-[65vh] items-center justify-center">

        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#102A43]/65" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Explore Destination
          </p>

          <h1 className="font-display text-5xl font-semibold text-white md:text-7xl">
            {destination.name}
          </h1>

          <p className="mt-5 flex items-center justify-center gap-2 text-white/90">
            <FaMapMarkerAlt className="text-nilora-gold" />
            {destination.country}
          </p>
        </motion.div>
      </section>

      {/* Destination Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-nilora-gold">
              Discover {destination.name}
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-nilora-navy">
              A Journey Worth
              <span className="block text-nilora-gold">
                Remembering.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              {destination.overview || destination.description}
            </p>

            <Link
              to="/destinations"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-nilora-navy hover:text-nilora-gold"
            >
              <FaArrowLeft />
              Back to Destinations
            </Link>
          </motion.div>

          {/* Destination Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl bg-white p-8 shadow-sm"
          >
            <h3 className="font-display text-2xl font-semibold text-nilora-navy">
              Travel Information
            </h3>

            <div className="mt-8 flex items-start gap-4 border-b border-gray-100 pb-6">
              <FaMapMarkerAlt className="mt-1 text-xl text-nilora-gold" />
              <div>
                <h4 className="font-semibold text-nilora-navy">
                  Location
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  {destination.country}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <FaCalendarAlt className="mt-1 text-xl text-nilora-gold" />
              <div>
                <h4 className="font-semibold text-nilora-navy">
                  Best Time to Visit
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  {destination.bestTime || "Contact us for seasonal advice"}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-nilora-gold">
              What Makes It Special
            </p>

            <h2 className="mt-3 font-display text-4xl font-semibold text-nilora-navy">
              Destination Highlights
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(destination.highlights || [
              destination.description,
              "Discover local culture",
              "Explore beautiful scenery",
              "Create unforgettable memories",
            ]).map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-nilora-ivory p-7"
              >
                <FaCheckCircle className="text-2xl text-nilora-gold" />

                <p className="mt-5 text-sm leading-7 text-nilora-charcoal">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-nilora-navy px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-nilora-gold">
          Your Next Journey Awaits
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-white md:text-5xl">
          Ready to Explore {destination.name}?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Let NILORA help you create a travel experience worth remembering.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 bg-nilora-gold px-8 py-4 text-sm font-semibold text-nilora-navy transition hover:bg-white"
        >
          Plan Your Trip
          <FaArrowRight />
        </Link>
      </section>

    </main>
  );
};

export default DestinationDetails;
