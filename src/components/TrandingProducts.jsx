import React from 'react';
import { motion } from 'framer-motion';

function TrendingProducts() {
  const products = [
    {
      title: 'Furniture Village',
      subtitle: 'Delivery within 24 hours',
      image: 'https://i.ebayimg.com/images/g/wO4AAOSwaJ1kgN2S/s-l1200.jpg',
    },
    {
      title: 'Fashion World',
      subtitle: 'Delivery within 24 hours',
      image: 'https://cdn.mos.cms.futurecdn.net/gexzDNyJHDdXxrLEt29Ygk.jpg',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="container mx-auto pt-16 p-4">
      <h2 className="text-xl sm:text-3xl font-bold mb-6">Trending Products For You!</h2>

      <motion.div
        className="flex flex-wrap gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="w-full md:w-[48%] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white group"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-6 bg-gray-100">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
              <p className="text-base text-gray-600">{product.subtitle}</p>
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TrendingProducts;
