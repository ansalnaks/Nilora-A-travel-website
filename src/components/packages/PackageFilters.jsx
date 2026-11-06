
const PackageFilters = ({
  searchTerm,
  setSearchTerm,
  selectedBudget,
  setSelectedBudget,
  selectedDuration,
  setSelectedDuration,
}) => {
  return (
    <section className="bg-nilora-ivory px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">

        {/* Search */}
        <input
          type="text"
          placeholder="Search packages or destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
        />

        {/* Budget Filter */}
        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
        >
          <option value="All Budgets">All Budgets</option>
          <option value="under-50000">Under ₹50,000</option>
          <option value="50000-75000">₹50,000 – ₹75,000</option>
          <option value="above-75000">Above ₹75,000</option>
        </select>

        {/* Duration Filter */}
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-nilora-gold"
        >
          <option value="All Durations">All Durations</option>
          <option value="short">1–4 Days</option>
          <option value="medium">5–7 Days</option>
          <option value="long">8+ Days</option>
        </select>

      </div>
    </section>
  );
};

export default PackageFilters;
