
import { useState } from "react";

import DestinationHero from "../components/destinations/DestinationHero";
import DestinationFilters from "../components/destinations/DestinationFilters";
import DestinationGrid from "../components/destinations/DestinationGrid";

import destinations from "../data/destinations";

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "All Regions" ||
      destination.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <main>
      <DestinationHero />

      <DestinationFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      <div className="bg-nilora-ivory px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-nilora-navy">
              {filteredDestinations.length}
            </span>{" "}
            destinations
          </p>
        </div>
      </div>

      <DestinationGrid destinations={filteredDestinations} />
    </main>
  );
};

export default Destinations;
