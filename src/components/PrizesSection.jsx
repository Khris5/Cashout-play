import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaUsers,
  FaCalendarWeek,
  FaCalendarDay,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const prizes = [
  {
    icon: <FaMoneyBillWave size={40} className="text-green-500" />,
    title: "Daily Cash Prize",
    amount: "N5,000",
    winners: "10 Players Daily",
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-yellow-500" />,
    title: "Weekly Cash Prize",
    amount: "N50,000",
    winners: "2 Players Weekly",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
    title: "Daily Airtime Prize",
    amount: "N500 Airtime",
    winners: "100 Players Daily",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B17A0] mb-4">
            Amazing <span className="text-[#3F23E5]">Prizes Await!</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
            Play daily and weekly for a chance to win fantastic cash and airtime
            prizes.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className={`p-8 rounded-xl shadow-lg border-t-4 ${prize.borderColor} ${prize.bgColor} flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`p-5 rounded-full ${prize.iconBg} mb-6 inline-block`}
                >
                  {prize.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${prize.textColor} mb-2`}
                >
                  {prize.title}
                </h3>
                <p className={`text-4xl font-bold text-[#2B17A0] my-3`}>
                  {prize.amount}
                </p>
                <div className="flex items-center text-gray-600 mt-2">
                  {prize.title.includes("Daily") ? (
                    <FaCalendarDay className="mr-2" />
                  ) : (
                    <FaCalendarWeek className="mr-2" />
                  )}
                  <FaUsers className="mr-2" /> {prize.winners}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <p className="text-gray-700 italic max-w-xl mx-auto">
            Winners are selected via computer/machine draw. Cash prize winners
            will be notified via SMS. Airtime is credited automatically.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrizesSection;
