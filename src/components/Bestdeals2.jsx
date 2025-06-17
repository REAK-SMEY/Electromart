import React, { useState, useContext, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoStar } from 'react-icons/io5';
import Skeleton from './Skeleton';
import ProductContext from '../store/ProductContext';
import { CartContext } from '../store/CartContext'; // ✅ Add this
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import { motion, AnimatePresence } from 'framer-motion';

function BestDeals2() {
  const { products, isloading } = useContext(ProductContext);
  const { addItem } = useContext(CartContext); // ✅ Get addItem
  const navigate = useNavigate(); // ✅ Initialize navigation

  const tabs = [
    'Top Sellers',
    'New Arrivals',
    'Limited Offers',
    'Best Rated',
    'Budget Buys',
    'Premium Picks',
    'Trending',
    "Editor's Choice",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allAnimate, setAllAnimate] = useState(false);

  useEffect(() => {
    const matched = products.filter(v => v.category === activeTab);
    setFilteredProducts(matched.length > 0 ? matched : products);

    setAllAnimate(true);
    const timeout = setTimeout(() => setAllAnimate(false), 600);
    return () => clearTimeout(timeout);
  }, [products, activeTab]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: allAnimate ? 1.05 : 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="container p-4 mx-auto mt-3">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Today’s Best Deals for you!
      </motion.h1>

      {/* Tabs */}
      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {tabs.map(label => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`py-2 px-4 rounded-3xl border border-gray-400 transition-colors ${
              activeTab === label
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-900 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isloading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <Skeleton />
            </motion.div>
          ))
        ) : (
          <AnimatePresence>
            {filteredProducts.map((v, i) => (
              <motion.div
                key={v.id || i}
                className="relative border border-gray-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group bg-white"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
              >
                <img
                  src={v.image}
                  alt={v.name}
                  className={`w-full h-48 object-contain bg-white transform transition-transform duration-300 ${
                    allAnimate ? 'scale-105' : 'group-hover:scale-110'
                  }`}
                />
                <button
                  className="btn btn-circle absolute right-2 top-2 text-2xl text-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <CiHeart className="text-gray-700" />
                </button>
                <div className="p-3 flex justify-between items-start">
                  <div>
                    <p className="text-lg font-semibold line-clamp-1">{v.name}</p>
                    <p className="text-sm text-gray-600 my-1 line-clamp-2">{v.description}</p>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <IoStar key={j} className="text-yellow-400" />
                      ))}
                      <sup className="ml-1 text-xs">(121)</sup>
                    </div>
                    <button
                      onClick={() => {
                        addItem(v);       // ✅ Add to cart
                         // ✅ Navigate to cart page
                      }}
                      className="mt-2 px-3 py-1 border border-black rounded-full hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <p className="text-xl font-bold">${v.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default BestDeals2;
