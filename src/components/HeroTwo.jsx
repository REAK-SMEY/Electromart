import React from 'react'
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

function HeroTwo() {
  return (
    <div className='w-full h-[70vh] bg-black bg-image-herotwo p-4'>
      <div className='container h-full mx-auto flex justify-end items-center p-4'>
        <motion.div
          className='w-auto p-10 md:w-[70%] lg:w-[34%] text-white bg-blue-950 sm:p-12'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              }
            }
          }}
        >
          <motion.h1
            className='text-4xl sm:text-5xl font-bold mb-3'
            variants={fadeUp}
          >
            Get Cash back on $200
          </motion.h1>

          <motion.p variants={fadeUp}>
            Shopping is a bit of a relaxing hobby for me, which is someone troubling for the balance.
          </motion.p>

          <motion.button
            className='bg-white mt-8 px-8 py-4 rounded-4xl text-black text-xl sm:text-2xl cursor-pointer'
            variants={fadeUp}
            whileHover={{ scale: 1.05, backgroundColor: '#f59e0b', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroTwo
