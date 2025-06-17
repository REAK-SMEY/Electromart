import React from 'react';
import { motion } from 'framer-motion';

function PayBank() {
  return (
    <div className="w-full bg-amber-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6">

        <motion.div
          className="flex-1 p-6 md:p-10 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get 5% Cash Back</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">On Shopcart.com</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-3xl sm:rounded-4xl font-bold text-lg sm:text-xl text-white bg-green-950 hover:bg-gray-900 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-none w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="/images/BankCard.png"
            alt="Bank Card"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default PayBank;
