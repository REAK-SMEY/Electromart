import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaLightbulb,
  FaLock,
  FaHeadset,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const team = [
  {
    name: "Duong Reaksmey",
    role: "Founder & CEO",
    image:
      "https://scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/484975297_1217087013343647_2255221329467740325_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGYSq4AzudbcVEHWc38y-V5zvmdBMv2NvDO-Z0Ey_Y28IHW5jv3UqsnPInGJzwdEP3s_skEv30oR767XiewE0B8&_nc_ohc=xGLMtKFBCRsQ7kNvwF7y1A4&_nc_oc=AdllUtwpQ9lqzMN8qZl0LtukBy2YPAP0o9XjSwV5c8v-G5695YBSiuMN99V2OpRRCXQ&_nc_zt=23&_nc_ht=scontent.fpnh18-1.fna&_nc_gid=p5XjMNFOxXkQWwf5jxcp-Q&oh=00_AfNo5_IrBTPZgy7d_ZBnphO5gT01mEYFYRyMB1mJ9tRy4Q&oe=68547658",
    socials: {
      facebook: "https://facebook.com/reaksmey",
      twitter: "https://twitter.com/reaksmey",
      linkedin: "https://linkedin.com/in/reaksmey",
      instagram: "https://instagram.com/reaksmey",
    },
  },
  {
    name: "Vanda",
    role: "Chief Marketing Officer",
    image:
      "https://yt3.googleusercontent.com/_cW8g6t0jDC78gDDxODgkr8ZZByS7eFr3oez1MZ34s52OtrpvZqWBqD3SjdmMFYgmj4N8q70=s900-c-k-c0x00ffffff-no-rj",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Dit Way",
    role: "Lead Engineer",
    image: "https://i.ytimg.com/vi/8_ybNTNXyPU/hqdefault.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Sok Pisey",
    role: "Customer Experience Lead",
    image:
      "https://yt3.googleusercontent.com/alQ79hFkH39Z-S2zsM2Vwz32Fp0kBu0OirhXqHl6vHjNjCIuRuXkHpeZ2_dNV3uSSpyNnwbedQ=s900-c-k-c0x00ffffff-no-rj",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const testimonials = [
  {
    id: 1,
    name: "Jing Jok",
    role: "Verified Buyer",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhsAQLn7a2nbNqf0lZu6PGM2aKB4xnKZxRMCNoYQkaMLcW_XgGsORaPnKvS5a6fDVpgw&usqp=CAU",
    quote:
      "ElectroMart made my purchase effortless and the product quality is outstanding. Highly recommended!",
  },
  {
    id: 2,
    name: "Tena",
    role: "Long-term Customer",
    photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa-CSUjMfFBS__U7VXUG3Arn0WIvmB80xdDK0WMEkxjOMr7z5B6wTcclPbHnJFffhF9G0VuEopBC4oB0LTxNrP1Q",
    quote:
      "Great prices, fast shipping, and excellent customer service. I'm a happy repeat buyer.",
  },
  {
    id: 3,
    name: "Ronaldo",
    role: "Tech Enthusiast",
    photo: "https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg",
    quote:
      "I found all the latest gadgets I wanted in one place. The team truly cares about customer satisfaction.",
  },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return most items within 30 days of delivery for a full refund or exchange.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within Asia, but international shipping options are coming soon.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing your order, you will receive a tracking number via email to monitor your shipment.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use advanced encryption and secure payment gateways to protect your data.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-100 to-white text-gray-900 font-sans min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 py-20 px-4 text-center shadow-xl"
        aria-labelledby="about-hero-title"
      >
        <h1
          id="about-hero-title"
          className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
        >
          About ElectroMart
        </h1>
        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
          Bringing technology to your doorstep with passion and precision.
        </p>
      </motion.section>

      {/* Company History */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 max-w-6xl mx-auto"
        aria-labelledby="history-title"
      >
        <h2
          id="history-title"
          className="text-3xl font-bold mb-6 text-blue-950"
        >
          Our History
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg max-w-4xl mb-4">
          ElectroMart was founded in 2020 with a simple vision: to make technology
          accessible, affordable, and reliable for everyone. From humble beginnings
          as a small startup, we quickly grew by focusing on quality products and
          exceptional customer service.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg max-w-4xl">
          Over the years, we expanded our product range to include the latest
          electronics, partnering with trusted global brands and local suppliers.
          Today, we proudly serve thousands of customers across Asia, continuing to
          innovate and adapt to the fast-changing tech world.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <section
        className="bg-blue-100 py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        aria-label="Mission and Vision statements"
      >
        {[
          {
            title: "Our Mission",
            content:
              "To become Asia’s most customer-centric electronics marketplace, delivering top-notch service and value while empowering communities through technology.",
            color: "border-blue-950 text-blue-950",
          },
          {
            title: "Our Vision",
            content:
              "To connect people to the future by bridging innovation and trust, ensuring everyone has access to transformative technology.",
            color: "border-blue-950 text-blue-950",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
            variants={fadeUp}
            className={`hover:shadow-2xl transition-shadow p-6 rounded-lg bg-white border-l-4 ${item.color}`}
            tabIndex={0}
          >
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-800 text-lg">{item.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 px-6 max-w-6xl mx-auto"
        aria-labelledby="why-choose-title"
      >
        <h2
          id="why-choose-title"
          className="text-3xl font-bold mb-10 text-center text-blue-950"
        >
          Why Choose ElectroMart?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <FaShippingFast className="mx-auto text-5xl text-blue-800" />,
              title: "Fast Delivery",
              desc: "Enjoy next-day delivery on all orders within our service area.",
            },
            {
              icon: <FaLightbulb className="mx-auto text-5xl text-blue-800" />,
              title: "Latest Technology",
              desc: "Access the newest gadgets and electronics from top brands.",
            },
            {
              icon: <FaLock className="mx-auto text-5xl text-blue-800" />,
              title: "Secure Shopping",
              desc: "Safe and encrypted checkout process to protect your data.",
            },
            {
              icon: <FaHeadset className="mx-auto text-5xl text-blue-800" />,
              title: "24/7 Support",
              desc: "Our support team is available around the clock to assist you.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl border border-blue-950 shadow-md transition-transform cursor-default"
              tabIndex={0}
              aria-label={`${item.title} - ${item.desc}`}
            >
              <div aria-hidden="true">{item.icon}</div>
              <h3 className="font-semibold text-lg text-blue-950">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values with Description */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-blue-100 py-16 px-6 max-w-6xl mx-auto"
        aria-labelledby="core-values-title"
      >
        <h2
          id="core-values-title"
          className="text-3xl font-bold mb-10 text-center text-blue-950"
        >
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-lg">
          {[
            {
              title: "Customer First",
              desc:
                "We prioritize customer satisfaction and strive to exceed expectations in every interaction.",
            },
            {
              title: "Integrity",
              desc:
                "Honesty and transparency guide all our decisions and business practices.",
            },
            {
              title: "Innovation",
              desc:
                "Constantly seeking new ideas and technologies to improve our offerings.",
            },
            {
              title: "Teamwork",
              desc:
                "Collaborating with passion and respect to achieve common goals.",
            },
            {
              title: "Accountability",
              desc:
                "Taking responsibility for our actions and delivering on our promises.",
            },
            {
              title: "Sustainability",
              desc:
                "Committed to environmentally responsible practices in all aspects of business.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg text-center font-medium text-blue-950 border-t-4 border-blue-800 shadow hover:shadow-xl transition cursor-default"
              tabIndex={0}
              aria-label={`Core value: ${value.title}. Description: ${value.desc}`}
            >
              <h3 className="font-bold text-xl mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 bg-white max-w-6xl mx-auto text-center"
        aria-labelledby="meet-team-title"
      >
        <h2
          id="meet-team-title"
          className="text-3xl font-bold text-blue-950 mb-10"
        >
          Meet Our Team
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-xl shadow transition cursor-pointer"
              tabIndex={0}
              aria-label={`Team member: ${member.name}, role: ${member.role}`}
            >
              <motion.img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-900"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-900 mb-3">{member.role}</p>
              <div className="flex justify-center space-x-4 text-blue-700">
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Facebook profile`}
                    className="hover:text-blue-900 transition"
                  >
                    <FaFacebook />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter profile`}
                    className="hover:text-blue-900 transition"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="hover:text-blue-900 transition"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram profile`}
                    className="hover:text-blue-900 transition"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <section
        className="py-16 px-6 max-w-5xl mx-auto"
        aria-labelledby="testimonials-title"
      >
        <h2
          id="testimonials-title"
          className="text-3xl font-bold mb-10 text-center text-blue-950"
        >
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, role, photo, quote }) => (
            <motion.blockquote
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 rounded-lg shadow-md text-center relative"
              tabIndex={0}
              aria-label={`Testimonial from ${name}, ${role}`}
            >
              <img
                src={photo}
                alt={`Photo of ${name}`}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-blue-900"
              />
              <p className="text-gray-800 italic mb-4">"{quote}"</p>
              <footer className="text-blue-900 font-semibold">
                {name} — <span className="text-gray-700">{role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="bg-blue-100 py-16 px-6 max-w-5xl mx-auto"
        aria-labelledby="faq-title"
      >
        <h2
          id="faq-title"
          className="text-3xl font-bold mb-10 text-center text-blue-950"
        >
          Frequently Asked Questions
        </h2>
        <dl className="space-y-6">
          {faqs.map(({ question, answer }, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              tabIndex={0}
              className="bg-white p-6 rounded-lg shadow cursor-default"
            >
              <dt className="font-semibold text-lg text-blue-950 mb-2">{question}</dt>
              <dd className="text-gray-700">{answer}</dd>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* Footer Spacer */}
      <div className="h-16"></div>
    </div>
  );
};

export default AboutUs;
