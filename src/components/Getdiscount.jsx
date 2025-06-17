import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    color: 'bg-yellow-50',
    amount: 100,
    textColor: 'text-yellow-500',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20231008/pngtree-minimalistic-orange-laptop-soaring-on-vibrant-yellow-3d-background-image_13534938.png'
  },
  {
    color: 'bg-red-100',
    amount: 29,
    textColor: 'text-red-500',
    img: 'https://www.zdnet.com/a/img/resize/e6ff69f4d5c0f0d4c4e87cb0b5e5f407b2b64e8f/2023/03/21/a97e66fc-c271-4f96-8ce2-92e109dab2aa/nothing-ear-2-case.jpg?auto=webp&width=1280'
  },
  {
    color: 'bg-blue-100',
    amount: 1029,
    textColor: 'text-blue-500',
    img: 'https://assets.thehansindia.com/h-upload/2023/07/08/1363601-apple-iphone-15-pro.webp'
  },
  {
    color: 'bg-pink-100',
    amount: 159,
    textColor: 'text-pink-500',
    img: 'https://www.cnet.com/a/img/resize/84779f63558fff797e20943f89aac0623989a475/hub/2024/04/30/406c497a-b222-4767-a099-b08ba41de3ea/apple-watch-se-2.jpg?auto=webp&fit=crop&height=675&width=1200'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
}

function Getdiscount() {
  return (
    <div>
      <div className='container p-4 mx-auto'>
        <h1 className='text-2xl font-bold'>Get Up to 70% off</h1>
        <div className='flex flex-wrap justify-between mt-5'>

          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`w-full sm:w-[49%] lg:w-[24%] ${card.color} rounded-lg overflow-hidden`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className='p-10'>
                <p className='text-3xl font-bold pb-3'>Save</p>
                <p className={`text-6xl font-bold mb-4 ${card.textColor}`}>
                  <sup>$</sup>{card.amount}
                </p>
                <p className='text-xl font-medium'>
                  Explore Our Furniture & Home Furnishing Range
                </p>
              </div>
              <motion.div
                className='w-full h-[220px] overflow-hidden'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={card.img}
                  alt={`Save $${card.amount}`}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Getdiscount
