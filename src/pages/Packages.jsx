
import { useState } from "react";

import PackageHero from "../components/packages/PackageHero";
import PackageFilters from "../components/packages/PackageFilters";

import packages from "../data/packages";

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");

  const filteredPackages = packages.filter((item) => {
    // Search filter
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Budget filter
    const matchesBudget =
      selectedBudget === "All Budgets" ||
      (selectedBudget === "under-50000" && item.price < 50000) ||
      (selectedBudget === "50000-75000" &&
        item.price >= 50000 &&
        item.price <= 75000) ||
      (selectedBudget === "above-75000" && item.price > 75000);

    // Duration filter
    const days = parseInt(item.duration, 10);

    const matchesDuration =
      selectedDuration === "All Durations" ||
      (selectedDuration === "short" && days <= 4) ||
      (selectedDuration === "medium" && days >= 5 && days <= 7) ||
      (selectedDuration === "long" && days >= 8);

    return matchesSearch && matchesBudget && matchesDuration;
  });

  return (
    <main>
      <PackageHero />

      <PackageFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedBudget={selectedBudget}
        setSelectedBudget={setSelectedBudget}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
      />

      <div className="bg-nilora-ivory px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-nilora-navy">
              {filteredPackages.length}
            </span>{" "}
            travel packages
          </p>
        </div>
      </div>
    </main>
  );
};

export default Packages;
