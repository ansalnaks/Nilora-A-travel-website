
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "91XXXXXXXXXX"; // Replace with agency WhatsApp number

  return (
    <footer className="bg-[#0B1F33] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-3xl font-bold tracking-widest text-white">
            NILORA<span className="text-nilora-gold">.</span>
          </Link>

          <p className="mt-2 text-xs tracking-[0.25em] text-nilora-gold">
            EXPLORE BEYOND ORDINARY
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-300">
            Discover beautiful destinations, unforgettable experiences,
            and journeys designed around your dreams.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-3 transition hover:bg-nilora-gold hover:text-nilora-navy"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-3 transition hover:bg-nilora-gold hover:text-nilora-navy"
            >
              <FaFacebookF />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-white/20 p-3 transition hover:bg-nilora-gold hover:text-nilora-navy"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 font-display text-xl text-nilora-gold">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link to="/" className="transition hover:text-nilora-gold">Home</Link></li>
            <li><Link to="/destinations" className="transition hover:text-nilora-gold">Destinations</Link></li>
            <li><Link to="/packages" className="transition hover:text-nilora-gold">Travel Packages</Link></li>
            <li><Link to="/about" className="transition hover:text-nilora-gold">About Us</Link></li>
            <li><Link to="/contact" className="transition hover:text-nilora-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 font-display text-xl text-nilora-gold">
            Get in Touch
          </h3>

          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-nilora-gold" />
              <span>Kerala, India</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-nilora-gold" />
              <a href="tel:+910000000000" className="hover:text-nilora-gold">
                +91 00000 00000
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-nilora-gold" />
              <a href="mailto:hello@nilora.com" className="hover:text-nilora-gold">
                hello@nilora.com
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="mb-6 font-display text-xl text-nilora-gold">
            Let's Explore
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            Have a destination in mind? Let us help you plan your next
            unforgettable journey.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-block bg-nilora-gold px-6 py-3 text-sm font-semibold text-nilora-navy transition hover:bg-white"
          >
            Plan Your Trip
          </Link>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} NILORA Travels. All rights reserved.
          </p>

          <p>Made with care for travellers.</p>

          <a
            href="#"
            aria-label="Back to top"
            className="rounded-full border border-white/20 p-3 transition hover:bg-nilora-gold hover:text-nilora-navy"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
