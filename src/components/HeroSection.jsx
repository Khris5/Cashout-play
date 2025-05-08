import { motion } from "framer-motion";
import { FaPlayCircle, FaGift } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#3F23E5] to-[#6D5BEF] text-white py-20 md:py-32 overflow-hidden">
      {/* Subtle background shapes */}
      <motion.div
        className="absolute top-10 -left-20 w-60 h-60 bg-white/10 rounded-full filter blur-xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-5 right-0 -mr-20 w-72 h-72 bg-white/10 rounded-lg filter blur-2xl opacity-30 transform rotate-45"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          Welcome to{" "}
          <span className="block sm:inline">
            Cashout<span className="text-yellow-300">Play</span>!
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100"
        >
          Answer questions, earn points, and win{" "}
          <span className="font-semibold text-yellow-300">
            amazing cash prizes and airtime
          </span>{" "}
          daily and weekly!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#3F23E5] font-semibold px-10 py-4 rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 flex items-center group"
            onClick={() =>
              document
                .getElementById("how-to-play")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaPlayCircle className="mr-3 text-xl group-hover:animate-[spin_3s_linear_infinite]" />{" "}
            How to Play
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white hover:text-[#3F23E5] transition-all duration-300 flex items-center group"
            onClick={() =>
              document
                .getElementById("prizes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaGift className="mr-3 text-xl group-hover:animate-[subtle-pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />{" "}
            View Prizes
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
// Add this to your tailwind.config.js if you use animate-spin-slow
// theme: { extend: { animation: { 'spin-slow': 'spin 3s linear infinite' }}}
export default HeroSection;
