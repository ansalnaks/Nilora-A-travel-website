
import { FaSearch, FaSlidersH } from "react-icons/fa";

const DestinationFilters = ({
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
}) => {
  const regions = ["All Regions", "Asia", "Europe", "Middle East", "India"];

  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-nilora-gold">
            Find Your Destination
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-nilora-navy md:text-4xl">
            Where Would You Like to Go?
          </h2>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-xl border border-gray-200 bg-nilora-ivory p-4 shadow-sm md:flex-row">

          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-lg bg-white px-4">
            <FaSearch className="text-nilora-gold" />

            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent py-4 text-sm outline-none"
            />
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 md:w-64">
            <FaSlidersH className="text-nilora-gold" />

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-transparent py-4 text-sm outline-none"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationFilters;

