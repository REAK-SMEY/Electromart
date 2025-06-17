// import React, { useContext } from 'react';
// import { CiHeart } from 'react-icons/ci';
// import { IoStar } from 'react-icons/io5';
// import Skeleton from './Skeleton';
// import ProductContext from '../store/ProductContext';
// import { CartContext } from '../store/CartContext';
// import { motion } from 'framer-motion';


// function PopularProducts() {
//   const { products, isloading } = useContext(ProductContext);
//   const { addItem } = useContext(CartContext);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: i => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
//     }),
//   };

//   return (
//     <div className="container p-4 mx-auto overflow-hidden">
//       <motion.h1
//         className="text-xl md:text-2xl font-bold mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         Today's Best Deals for You!
//       </motion.h1>

//       <div className="overflow-x-auto overflow-y-hidden">
//         <div className="flex flex-nowrap gap-3 items-stretch">
//           {isloading ? (
//             Array.from({ length: 3 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="w-[49%] md:w-[32%] shrink-0 flex flex-col h-full"
//               >
//                 <Skeleton />
//               </motion.div>
//             ))
//           ) : (
//             products.map((v, i) => (
//               <motion.div
//                 key={v.id || i}
//                 className="w-[49%] md:w-[32%] shrink-0 flex flex-col h-full"
//                 variants={cardVariants}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 {/* image wrapper */}
//                 <div className="w-full h-fit md:h-[280px] border border-gray-300 rounded-xl overflow-hidden relative">
//                   <button className="btn btn-circle absolute end-1 top-1 text-2xl">
//                     <CiHeart />
//                   </button>
//                   <img
//                     src={v.image}
//                     alt={v.name}
//                     className="w-full h-48 object-contain bg-white transform transition-transform duration-300"
//                   />
//                 </div>

//                 {/* content */}
//                 <div className="flex-1 flex flex-col justify-between p-4">
//                   <div>
//                     <p className="text-base md:text-lg font-semibold line-clamp-1">{v.name}</p>
//                     <p className="text-sm md:text-[13px] my-2 line-clamp-2">{v.description}</p>
//                     <div className="flex items-center">
//                       {Array.from({ length: 5 }).map((_, s) => (
//                         <IoStar key={s} className="text-yellow-400 text-sm md:text-base" />
//                       ))}
//                       <sup className="ml-1 text-xs text-gray-500">(121)</sup>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between mt-4">
//                     <button
//                       onClick={() => addItem(v)}
//                       className="mt-2 px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 border border-black rounded-full text-xs md:text-sm lg:text-base hover:bg-blue-900 hover:text-white transition-colors"
//                     >
//                       Add To Cart
//                     </button>
//                     <p className="h-full flex items-center text-sm md:text-base lg:text-xl font-bold text-blue-900">${v.price}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PopularProducts;
