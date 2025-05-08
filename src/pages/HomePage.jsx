import HeroSection from "../components/HeroSection";
import HowToPlaySection from "../components/HowToPlaySection";
import PrizesSection from "../components/PrizesSection";
import WhyPlaySection from "../components/WhyPlaySection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <HowToPlaySection />
      <PrizesSection />
      <WhyPlaySection />
      {/* You can add a small FAQ or Call to Action section here too */}
    </motion.div>
  );
};

export default HomePage;
