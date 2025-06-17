import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Contact() {
  return (
    <section className="bg-gradient-to-b from-blue-200 via-white to-blue-50 py-24 px-6" id="contact">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Contact Info */}
        <div className="bg-blue-900 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <p className="text-blue-100 mb-10">
              We’re here to help and answer any questions you may have. Whether you're curious about features, a product demo, or even press—we’re ready to help!
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-xl mt-1" />
                <span>+855 16 526 595</span>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-xl mt-1" />
                <span>support@electromart.com</span>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <span>123 ElectroMart Street, Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-blue-200 mt-10">&copy; 2025 ElectroMart. All rights reserved.</p>
        </div>

        {/* Contact Form */}
        <div className="p-10 md:p-14">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have a question, concern, or just want to say hello? Fill out the form below and our customer service team will get back to you within 1–2 business days.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Product or Subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-800 hover:bg-blue-950 text-white font-semibold px-8 py-4 rounded-full shadow-md transition duration-300"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-500 mt-4">
              We typically respond within 24–48 hours. For urgent inquiries, please call our hotline.
            </p>
          </form>
        </div>
      </motion.div>

      {/* Embedded Google Map */}
      <div className="max-w-6xl mx-auto mt-14 rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="ElectroMart Cambodia Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7816.320539375632!2d104.9188233!3d11.5448721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519c1a79d9db%3A0x86f7307f58fbd9c5!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2skh!4v1718434010000!5m2!1sen!2skh"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[450px] border-0"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
