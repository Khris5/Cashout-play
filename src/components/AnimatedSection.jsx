import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: 0.3 }} // Trigger when 30% of the element is in view
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
