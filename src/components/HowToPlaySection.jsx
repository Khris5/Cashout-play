import { motion } from "framer-motion";
import {
  FaSms,
  FaQuestionCircle,
  FaTrophy,
  FaMobileAlt,
  FaRedo,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: <FaMobileAlt className="text-[#3F23E5]" size={36} />,
    title: "MTN Subscriber?",
    description:
      "This service is exclusively available to all MTN Nigeria customers with a valid mobile number.",
  },
  {
    icon: <FaSms className="text-[#3F23E5]" size={36} />,
    title: "Subscribe via SMS",
    description: (
      <>
        Text <strong className="text-[#6D5BEF]">CPD to 585</strong> for Daily
        (N100/day) or <strong className="text-[#6D5BEF]">CPW to 585</strong> for
        Weekly (N400/week).
      </>
    ),
  },
  {
    icon: <FaRedo className="text-[#3F23E5]" size={36} />,
    title: "Automatic Points",
    description:
      "Get 10 points instantly upon subscription and daily renewal, automatically qualifying you for draws!",
  },
  {
    icon: <FaQuestionCircle className="text-[#3F23E5]" size={36} />,
    title: "Answer Questions",
    description:
      "Engage with the game by answering questions correctly to earn even more points.",
  },
  {
    icon: <FaTrophy className="text-[#3F23E5]" size={36} />,
    title: "Win Prizes",
    description:
      "Stand a chance to win daily airtime, daily cash, and weekly cash prizes!",
  },
];

const HowToPlaySection = () => {
  return (
    <section id="how-to-play" className="py-16 lg:py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B17A0] mb-4">
            How to <span className="text-[#3F23E5]">Play & Win</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
            Joining Cashout Play is simple. Follow these easy steps to start
            your journey towards winning big!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-6 p-4 bg-purple-100 rounded-full inline-block">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2B17A0] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
