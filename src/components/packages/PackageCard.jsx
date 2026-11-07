
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const PackageCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md"
    >
      {/* Package Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Package Tag */}
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-nilora-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-nilora-navy">
            {item.tag}
          </span>
        )}
      </div>

      {/* Package Information */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <FaMapMarkerAlt className="text-nilora-gold" />
          <span>{item.location}</span>
        </div>

        <h3 className="mb-3 font-display text-2xl font-semibold text-nilora-navy">
          {item.name}
        </h3>

        <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
          <FaClock className="text-nilora-gold" />
          <span>{item.duration}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-5">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-xl font-semibold text-nilora-navy">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(item.price)}
            </p>
          </div>

          <Link
            to={`/packages/${item.id}`}
            className="rounded-full bg-nilora-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-nilora-gold hover:text-nilora-navy"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
