
import { motion } from "motion/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    detail: "+91 00000 00000",
    link: "tel:+910000000000",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email Us",
    detail: "hello@nilora.com",
    link: "mailto:hello@nilora.com",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    detail: "Chat With Us",
    link: "https://wa.me/91XXXXXXXXXX",
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    detail: "Your Business Location",
    link: null,
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-nilora-ivory px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Get In Touch
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Have questions about a destination or package?
            Reach out to us. We're happy to help plan your journey.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-nilora-navy text-2xl text-nilora-gold">
                {item.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-nilora-navy">
                {item.title}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("https://") ? "_blank" : undefined}
                  rel={item.link.startsWith("https://") ? "noreferrer" : undefined}
                  className="mt-3 inline-block break-all text-sm text-gray-500 transition hover:text-nilora-gold"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="mt-3 text-sm text-gray-500">
                  {item.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
