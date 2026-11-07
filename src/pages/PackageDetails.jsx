
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import packages from "../data/packages";

const PackageDetails = () => {
  const { id } = useParams();

  const selectedPackage = packages.find(
    (item) => item.id === Number(id)
  );

  if (!selectedPackage) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="font-display text-3xl text-nilora-navy">
          Package Not Found
        </h2>
        <Link
          to="/packages"
          className="mt-6 rounded-full bg-nilora-navy px-6 py-3 text-white"
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  const inclusions = selectedPackage.inclusions || [
    "Accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Sightseeing",
    "Travel assistance",
  ];

  return (
    <main className="bg-nilora-ivory">

      {/* Hero Image */}
      <section
        className="relative flex min-h-[65vh] items-end bg-cover bg-center"
        style={{
          backgroundImage: `url('${selectedPackage.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            NILORA Travel Experience
          </p>

          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">
            {selectedPackage.name}
          </h1>

          <div className="mt-5 flex flex-wrap gap-6 text-white">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-nilora-gold" />
              {selectedPackage.location}
            </span>

            <span className="flex items-center gap-2">
              <FaClock className="text-nilora-gold" />
              {selectedPackage.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3">

        {/* Main Content */}
        <div className="space-y-10 lg:col-span-2">

          <div>
            <h2 className="font-display text-3xl font-semibold text-nilora-navy">
              About This Journey
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {selectedPackage.description ||
                `Experience the beauty of ${selectedPackage.location} with NILORA. Discover beautiful destinations, enjoy memorable experiences, and make unforgettable travel memories.`}
            </p>
          </div>

          {/* Inclusions */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-nilora-navy">
              What's Included
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-nilora-gold" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Booking Card */}
        <aside className="h-fit rounded-2xl bg-white p-7 shadow-lg">
          <p className="text-sm text-gray-500">Starting from</p>

          <h2 className="mt-2 text-3xl font-bold text-nilora-navy">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(selectedPackage.price)}
          </h2>

          <p className="mt-2 text-xs text-gray-400">
            Indicative price. Final quotation depends on travel dates and availability.
          </p>

          <div className="my-6 border-t border-gray-200" />

          <p className="text-sm text-gray-600">
            Interested in this travel experience?
          </p>

          <Link
            to={`/contact?package=${encodeURIComponent(selectedPackage.name)}`}
            className="mt-6 block rounded-full bg-nilora-navy px-6 py-4 text-center font-semibold text-white transition hover:bg-nilora-gold hover:text-nilora-navy"
          >
            Enquire Now
          </Link>

          <Link
            to="/packages"
            className="mt-4 block text-center text-sm font-medium text-nilora-navy hover:text-nilora-gold"
          >
            ← Explore Other Packages
          </Link>
        </aside>

      </section>
    </main>
  );
};

export default PackageDetails;
