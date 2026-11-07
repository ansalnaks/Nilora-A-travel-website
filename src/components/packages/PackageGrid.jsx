
import PackageCard from "./PackageCard";

const PackageGrid = ({ packages }) => {
  return (
    <section className="bg-nilora-ivory px-6 pb-20">
      <div className="mx-auto max-w-7xl">

        {packages.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-display text-2xl font-semibold text-nilora-navy">
              No Packages Found
            </h3>

            <p className="mt-3 text-gray-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default PackageGrid;
