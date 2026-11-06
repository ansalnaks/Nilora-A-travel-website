
// import { Link } from "react-router-dom";
// import destinations from "../../data/destinations";

// const DestinationSection = () => {
//   return (
//     <section className="bg-nilora-ivory px-5 py-20 lg:px-8">
//       <div className="mx-auto max-w-7xl">

//         {/* Section Heading */}
//         <div className="mb-12 text-center">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
//             Explore the World
//           </p>

//           <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
//             Popular Destinations
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
//             From tropical islands to beautiful mountain escapes,
//             discover places that make every journey unforgettable.
//           </p>
//         </div>

//         {/* Destination Cards */}
//         <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
//           {destinations.map((destination) => (
//             <div
//               key={destination.id}
//               className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={destination.image}
//                   alt={destination.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//                 <div className="absolute bottom-5 left-5 text-white">
//                   <p className="text-xs uppercase tracking-widest text-nilora-gold">
//                     {destination.country}
//                   </p>

//                   <h3 className="mt-1 font-display text-2xl font-semibold">
//                     {destination.name}
//                   </h3>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-5">
//                 <p className="text-sm leading-6 text-gray-600">
//                   {destination.description}
//                 </p>

//                 <Link
//                   to="/contact"
//                   className="mt-5 inline-block text-sm font-semibold text-nilora-navy transition hover:text-nilora-gold"
//                 >
//                   Explore Destination →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/destinations"
//             className="inline-block rounded-full border border-nilora-navy px-8 py-3 text-sm font-semibold text-nilora-navy transition hover:bg-nilora-navy hover:text-white"
//           >
//             View All Destinations
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DestinationSection;




import { Link } from "react-router-dom";
import { motion } from "motion/react";
import destinations from "../../data/destinations";

const DestinationSection = () => {
  return (
    <section className="bg-nilora-ivory px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-nilora-gold">
            Explore the World
          </p>

          <h2 className="font-display text-3xl font-semibold text-nilora-navy md:text-5xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            From tropical islands to beautiful mountain escapes,
            discover places that make every journey unforgettable.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-nilora-gold">
                    {destination.country}
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-semibold">
                    {destination.name}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <p className="text-sm leading-6 text-gray-600">
                  {destination.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-block text-sm font-semibold text-nilora-navy transition hover:text-nilora-gold"
                >
                  Explore Destination →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            to="/destinations"
            className="inline-block rounded-full border border-nilora-navy px-8 py-3 text-sm font-semibold text-nilora-navy transition hover:bg-nilora-navy hover:text-white"
          >
            View All Destinations
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default DestinationSection;

