import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-[#2B17A0] text-white py-12 mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            Cashout<span className="text-[#6D5BEF]">Play</span>
          </h3>
          <p className="text-gray-300 text-sm">
            Test your knowledge, win exciting prizes daily and weekly!
          </p>
        </div>
        {/* <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div> */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cashout Play by MSR Innovations
          Nigeria Limited. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Service available to MTN Nigeria customers.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
