import React from 'react'
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

function Hero() {
  return (
    <div className='w-full h-[70vh] bg-black bg-image'>
      <div className='container h-full mx-auto flex items-center p-4'>
        <motion.div 
          className='w-auto md:px-4 md:w-[40%] text-white'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold'
            variants={fadeUp}
          >
            Shopping and <br />
            Department store.
          </motion.h1>

          <motion.p
            className='mt-3 lg:mt-16 text-xl'
            variants={fadeUp}
          >
            Shopping is a bit of a <br />
            relaxing hobby for the bank balance.
          </motion.p>

          <motion.button
            className='bg-white mt-16 px-8 py-4 rounded-4xl text-black text-2xl cursor-pointer'
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
