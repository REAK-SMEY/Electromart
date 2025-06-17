import React from 'react';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaLinkedin
} from 'react-icons/fa';
import { IoBag, IoHelp, IoGift } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Footer = () => {
  const sections = [
    {
      title: 'Department',
      items: ['Fashion', 'Education Product', 'Frozen Food', 'Beverages', 'Organic Grocery', 'Office Supplies', 'Beauty Products', 'Books', 'Electronics & Gadget', 'Travel Accessories', 'Fitness', 'Sneakers', 'Toys', 'Furniture']
    },
    {
      title: 'About Us',
      items: ['About Shopcart', 'Careers', 'News & Blog', 'Help', 'Press Center', 'Shop By Location', 'Shopcart Brands', 'Affiliate & Partners', 'Ideas & Guides']
    },
    {
      title: 'Services',
      items: ['Gift Card', 'Mobile App', 'Shipping & Delivery', 'Order Pickup', 'Account Signup']
    },
    {
      title: 'Help',
      items: ['Shopcart Help', 'Returns', 'Track Orders', 'Contact Us', 'Feedback', 'Security & Fraud']
    }
  ];

  const payments = ['stripe', 'visa', 'mastercard', 'amazon', 'klarna', 'paypal', 'applepay', 'googlepay'];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <footer className="border-t border-gray-300 bg-white text-gray-800 font-medium p-6 sm:p-10 lg:p-14">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-green-800">Shopcart</h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed text-center md:text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            {/* Payment Icons */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 mt-5 w-fit"
              variants={fadeIn}
              custom={1}
            >
              {payments.map((p, i) => (
                <motion.div
                  key={p}
                  className="w-28 h-10 lg:w-16 lg:h-10 sm:w-15 sm:h-10 border border-gray-300 rounded-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={`/images/pay-${p}.png`} alt={p} className="w-10 h-6 object-contain" />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="mt-5 flex flex-wrap gap-4 text-gray-500 justify-center md:justify-start text-3xl lg:text-xl sm:text-2xl"
              variants={fadeIn}
              custom={2}
            >
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedin].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.2 }} className="cursor-pointer">
                  <Icon className="hover:text-orange-500 transition-transform" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Section */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={fadeIn}
            custom={1}
          >
            {sections.map((sec, idx) => (
              <motion.div key={sec.title} variants={fadeIn} custom={1 + idx * 0.2}>
                {/* Animated Section Title */}
                <motion.h4
                  className="font-semibold text-gray-800 mb-2 cursor-default"
                  variants={fadeIn}
                  whileHover={{}}
                >
                  {sec.title}
                </motion.h4>

                {/* Items List */}
                <ul className="space-y-1 text-sm text-gray-600">
                  {sec.items.map((item) => (
                    <li
                      key={item}
                      className="hover:text-orange-600 hover:underline transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-300 mt-5 pt-6 flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-medium">
            {[{ icon: IoBag, text: 'Become Seller' }, { icon: IoGift, text: 'Gift Cards' }, { icon: IoHelp, text: 'Help Center' }].map(({ icon: Icon, text }) => (
              <motion.button
                key={text}
                className="group flex items-center space-x-2 text-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="group-hover:text-orange-500">{text}</span>
              </motion.button>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 font-semibold">
            <a href="#" className="hover:text-orange-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-600 transition">Privacy & Policy</a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-gray-600 px-4">
            All Rights Reserved by Musemind <a href="#" className="hover:text-orange-600 text-blue-800">UI/UX design</a> agency | {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
