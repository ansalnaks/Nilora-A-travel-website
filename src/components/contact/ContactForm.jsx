
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: searchParams.get("package") || "",
    travelDate: "",
    travelers: "2",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER; // Replace with your WhatsApp number

    const message = `
Hello NILORA!

I would like to enquire about a trip.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination / Package: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travellers: ${formData.travelers}

Message: ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Start Your Journey
          </p>

          <h2 className="font-display text-3xl font-semibold leading-tight text-nilora-navy md:text-5xl">
            Tell Us About Your
            <span className="block">Dream Trip.</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-600">
            Whether you already know your destination or need
            some inspiration, share your ideas with us.
            We'll help you plan a journey worth remembering.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85"
              alt="Traveller enjoying a beautiful mountain destination"
              className="h-72 w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-nilora-ivory p-7 shadow-lg md:p-10"
        >
          <h3 className="font-display text-2xl font-semibold text-nilora-navy">
            Travel Enquiry Form
          </h3>

          <p className="mb-8 mt-2 text-sm text-gray-500">
            Fill in your details and send your enquiry through WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-nilora-navy">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-nilora-navy">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-nilora-navy">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="mb-2 block text-sm font-medium text-nilora-navy">
                Destination / Package *
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where would you like to go?"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
              />
            </div>

            {/* Date and Travellers */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-nilora-navy">
                  Preferred Travel Date *
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-nilora-navy">
                  Number of Travellers
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
                >
                  <option value="1">1 Traveller</option>
                  <option value="2">2 Travellers</option>
                  <option value="3">3 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="5">5 Travellers</option>
                  <option value="6+">6+ Travellers</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-nilora-navy">
                Tell Us More About Your Trip
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Share your preferences, budget, or special requests..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-nilora-navy px-6 py-4 font-semibold text-white transition hover:bg-nilora-gold hover:text-nilora-navy"
            >
              <FaWhatsapp className="text-xl" />
              Send Enquiry on WhatsApp
            </button>

            <p className="text-center text-xs text-gray-500">
              Your enquiry will open in WhatsApp for you to review and send.
            </p>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
