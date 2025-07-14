// import React from "react";
// import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import hangingImg from "../assets/img/hanging-chelsea.png";

// export default function Footer() {
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

//   return (
//     <footer className="relative w-full  bg-gradient-to-b from-[#0d0f11] to-[#1f2c3f] text-white overflow-hidden">
//       {/* Animated Hanging Image */}
//       <motion.img
//         src={hangingImg}
//         alt="Hanging character"
//         className="absolute left-1/2 pt-12 top-[-120px] w-24 -translate-x-1/2 z-10"
//         style={{ y }}
//       />

//       <div className="relative z-20 flex flex-col items-center justify-center text-center py-24 space-y-4">
//         <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
//           Let’s connect
//         </h2>
//         <p className="text-sm text-gray-300">
//           Get in touch for opportunities or just say hi!
//         </p>

//         {/* Contact Icons */}
//         <div className="flex space-x-6 text-2xl mt-4">
//           <motion.a
//             href="https://instagram.com/chelseaarantza"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-pink-400 transition-colors"
//             aria-label="Instagram"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaInstagram />
//           </motion.a>

//           <motion.a
//             href="https://linkedin.com/in/chelseaarantza"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition-colors"
//             aria-label="LinkedIn"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaLinkedin />
//           </motion.a>

//           <motion.button
//             onClick={() => navigate("/contact")}
//             className="hover:text-green-400"
//             aria-label="Contact"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaEnvelope />
//           </motion.button>
//         </div>

//         <p className="text-xs text-gray-400 max-w-xs leading-relaxed mt-6">
//           Designed and coded in Visual Studio Code with love. <br />
//           Built with <span className="text-white font-semibold">
//             Vite
//           </span> and{" "}
//           <span className="text-white font-semibold">Tailwind CSS</span>,
//           deployed with <span className="text-white font-semibold">Vercel</span>
//           .
//         </p>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { Link } from "react-router-dom"; // Tambahkan impor Link
import { FaInstagram, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const iconHover = {
    hover: {
      y: -4,
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: { type: "spring", stiffness: 300 },
      },
    },
  };

  return (
    <footer className="w-full border-t mt-24 border-gray-200 py-12 px-6 text-center text-sm text-gray-400 tracking-wide">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl tracking-tight text-black">
            Let's connect
          </h1>
          <p className="text-gray-500">
            Get in touch for opportunities or just say hi!
          </p>

          <div className="flex justify-center space-x-6 text-2xl mt-4">
            <motion.a
              href="https://instagram.com/chelseaarantza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-black transition-colors"
              whileHover="hover"
              variants={iconHover}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/chelseaarantza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-black transition-colors"
              whileHover="hover"
              variants={iconHover}
            >
              <FaLinkedin />
            </motion.a>

            {/* Perbaikan untuk link email */}
            <motion.div whileHover="hover" variants={iconHover}>
              <Link
                to="/contact"
                aria-label="Message"
                className="text-gray-400 hover:text-black transition-colors block"
              >
                <FaEnvelope />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Designed and coded in Visual Studio Code with{" "}
            <FaHeart className="inline text-pink-500 mx-1" /> <br />
            Built with{" "}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium "
            >
              Vite
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium "
            >
              Tailwind CSS
            </a>
            , deployed with{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium "
            >
              Vercel
            </a>
            .
          </p>

          <p className="mt-6 text-gray-400 text-xs">
            © 2025 Chelsea Arantza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}