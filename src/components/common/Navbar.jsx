
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPlane } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">

      {/* Animated Airplane */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-1 z-0 overflow-hidden">
        <span className="nilora-plane-flight">
          <FaPlane className="text-nilora-gold" />
        </span>
      </div> */}

      {/* Curved Flight Animation */}
      <div className="nilora-flight-scene">
        <div className="nilora-flight-trail"></div>
        <span className="nilora-aircraft">
          <FaPlane />
        </span>
      </div>


      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="nilora-logo flex flex-col"
        >
          <span className="font-display text-3xl font-bold tracking-[0.18em] text-nilora-navy">
            NILORA
          </span>

          <span className="text-[9px] tracking-[0.35em] text-nilora-gold">
            EXPLORE BEYOND ORDINARY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive
                  ? "text-nilora-gold"
                  : "text-nilora-navy hover:text-nilora-gold"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-nilora-gold px-6 py-3 text-sm font-semibold text-nilora-navy transition duration-300 hover:-translate-y-1 hover:bg-nilora-navy hover:text-white md:inline-block"
        >
          Plan Your Trip
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-nilora-navy md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="relative z-20 border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive
                    ? "text-nilora-gold"
                    : "text-nilora-navy"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-full bg-nilora-gold px-6 py-3 text-center text-sm font-semibold text-nilora-navy"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
