import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🚚",
    title: "Fast & Reliable Delivery",
    description: "Get your electronics delivered quickly and safely to your doorstep anywhere in Asia.",
    details: "Track your order in real-time and receive notifications from warehouse to your home.",
  },
  {
    icon: "💡",
    title: "Latest Technology",
    description: "We offer the newest gadgets and electronics to keep you ahead of the curve.",
    details: "From smart home devices to smartphones, stay updated with cutting-edge innovations.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Shop with confidence using our encrypted and secure payment methods.",
    details: "We support multiple gateways with PCI compliance to protect your data.",
  },
  {
    icon: "📞",
    title: "24/7 Customer Support",
    description: "Our expert support team is available round the clock to help you anytime.",
    details: "Reach us via chat, phone, or email. Your satisfaction is our priority.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description: "We ensure competitive pricing so you get the best deals every time.",
    details: "Found a better deal elsewhere? Let us know and we’ll match or beat it!",
  },
  {
    icon: "🔧",
    title: "Easy Returns & Warranty",
    description: "Hassle-free returns and reliable warranty service for your peace of mind.",
    details: "Enjoy a 30-day return window and manufacturer warranties on all products.",
  },
  {
    icon: "📦",
    title: "Bulk Order Discounts",
    description: "Need products in large quantities? We've got you covered.",
    details: "Special pricing available for corporate and wholesale orders.",
  },
  {
    icon: "🌐",
    title: "Multi-Language Support",
    description: "Shop in your preferred language with full localization.",
    details: "Our platform supports English, Khmer, Thai, and more.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Service() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 px-6 max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 filter blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-24 w-96 h-96 bg-blue-300 rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

      {/* Title */}
      <div className="text-center mb-16 px-4 sm:px-0">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-wide relative inline-block">
          Our Premium Services
          <span className="block h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full absolute left-0 bottom-0 w-full scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide">
          At ElectroMart, we go beyond just selling electronics. Our services are
          designed to provide you with a seamless, secure, and satisfying shopping
          experience.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleServices.map(({ icon, title, description, details }, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
            variants={itemVariants}
            whileHover={{ scale: 1.07, boxShadow: "0 15px 40px rgba(59,130,246,0.4)" }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center text-5xl shadow-md text-white">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block group cursor-pointer">
              {title}
              <span className="block h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full absolute left-0 bottom-0 w-1/4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h3>
            <p className="text-gray-700 mb-5 font-semibold leading-relaxed">{description}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Button */}
      <div className="mt-20 text-center">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          {showAll ? "Show Less Services" : "Explore More Services"}
        </button>
      </div>
    </section>
  );
}

export default Service;
