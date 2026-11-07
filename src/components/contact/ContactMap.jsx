
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactMap = () => {
  // Replace this with your actual business address
  const businessLocation = "Vaikom, Kerala, India";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    businessLocation
  )}&output=embed`;

  return (
    <section className="bg-nilora-ivory px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Find Us
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            Visit Our Location
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            We'd love to connect with you and help plan
            your next unforgettable journey.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src={mapUrl}
            title="NILORA Business Location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center justify-center gap-3 text-nilora-navy">
          <FaMapMarkerAlt className="text-nilora-gold" />
          <span className="text-sm font-medium">
            {businessLocation}
          </span>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;
