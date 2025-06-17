import React from 'react';
import { motion } from 'framer-motion';
import data from '../Data/categories';

function ShopCategories() {
  // Variants for each category card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="container mx-auto pt-16 p-4">
      <h1 className="text-2xl font-bold">Shop Our Top Categories</h1>
      <div className="flex flex-wrap mt-3 justify-between">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="w-[49%] h-[220px] md:w-[32.2%] md:h-[350px] lg:w-[15.9%] lg:h-[300px] bg-pink-400 rounded-xl overflow-hidden relative my-1"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-center absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 text-xl font-bold text-white">
              {item.text}
            </h1>
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover duration-400"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategories;
