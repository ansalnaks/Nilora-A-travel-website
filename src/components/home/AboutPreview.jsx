
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaGlobeAsia, FaHeart, FaCompass } from "react-icons/fa";

const AboutPreview = () => {
  const highlights = [
    {
      icon: <FaGlobeAsia />,
      title: "Unique Destinations",
      description: "Discover extraordinary places around the world.",
    },
    {
      icon: <FaHeart />,
      title: "Travel With Care",
      description: "Every journey is planned with your comfort in mind.",
    },
    {
      icon: <FaCompass />,
      title: "Memorable Experiences",
      description: "Create memories that stay with you forever.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border-2 border-nilora-gold"></div>

          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000"
            alt="Beautiful mountain lake travel destination"
            className="relative z-10 h-[400px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
          />

          {/* Decorative Badge */}
          <div className="absolute -right-3 bottom-10 z-20 rounded-xl bg-nilora-navy px-6 py-5 text-center text-white shadow-xl md:-right-5">
            <p className="font-display text-3xl font-bold text-nilora-gold">
              NILORA
            </p>
            <p className="mt-1 text-xs tracking-widest">
              EXPLORE BEYOND ORDINARY
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Get To Know Us
          </p>

          <h2 className="font-display text-3xl font-semibold leading-tight text-nilora-navy md:text-5xl">
            More Than Travel,
            <span className="mt-2 block italic text-nilora-gold">
              It's an Experience.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-600">
            At NILORA, we believe every journey has a story waiting
            to unfold. Our goal is to help you discover beautiful
            destinations, experience different cultures and create
            unforgettable memories.
          </p>

          <p className="mt-4 text-sm leading-8 text-gray-600">
            Whether you dream of a peaceful island escape, a mountain
            adventure or a luxurious holiday, we're here to help
            you plan your next journey.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nilora-ivory text-xl text-nilora-gold">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-nilora-navy">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="/about"
            className="mt-9 inline-block rounded-full bg-nilora-navy px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-nilora-gold hover:text-nilora-navy"
          >
            Discover Our Story →
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;
