import { motion } from "framer-motion";
import { FaCheckCircle, FaSmile, FaGift, FaMobile } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: <FaGift className="text-[#3F23E5]" size={28} />,
    text: "Win Real Cash & Airtime",
  },
  {
    icon: <FaCheckCircle className="text-[#3F23E5]" size={28} />,
    text: "Easy SMS Subscription",
  },
  {
    icon: <FaMobile className="text-[#3F23E5]" size={28} />,
    text: "Automatic Draw Qualification",
  },
  {
    icon: <FaSmile className="text-[#3F23E5]" size={28} />,
    text: "Fun and Engaging Questions",
  },
];

const WhyPlaySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B17A0] mb-12">
            Why <span className="text-[#3F23E5]">CashoutPlay</span>?
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="mr-5 p-3 bg-purple-100 rounded-full">
                  {benefit.icon}
                </div>
                <p className="text-lg font-medium text-gray-700">
                  {benefit.text}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPlaySection;
